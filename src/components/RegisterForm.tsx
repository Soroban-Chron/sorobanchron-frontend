import { useState, FormEvent } from "react";
import type { RegisterJobParams } from "@/types";
import { UI, VALIDATION, JOB_DEFAULTS } from "@/lib/constants";
import { isValidContractAddress, isValidInterval, isValidDeposit, sanitizeAddress } from "@/lib/validation";

interface Props {
  onSubmit: (params: RegisterJobParams) => Promise<void>;
}

/**
 * Form for registering new automation jobs
 */
export default function RegisterForm({ onSubmit }: Props) {
  const [form, setForm] = useState<RegisterJobParams>({
    contractAddress: "",
    interval: JOB_DEFAULTS.INITIAL_INTERVAL,
    initialDeposit: JOB_DEFAULTS.INITIAL_DEPOSIT,
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!isValidContractAddress(form.contractAddress)) {
      newErrors.contractAddress = "Invalid contract address (must be 56 chars starting with C)";
    }

    if (!isValidInterval(form.interval)) {
      newErrors.interval = `Interval must be between ${VALIDATION.MIN_INTERVAL}s and 1 year`;
    }

    if (!isValidDeposit(form.initialDeposit)) {
      newErrors.initialDeposit = "Deposit must be between 1 and 1,000,000 XLM";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validate()) return;

    setLoading(true);
    try {
      await onSubmit(form);
      setForm({
        contractAddress: "",
        interval: JOB_DEFAULTS.INITIAL_INTERVAL,
        initialDeposit: JOB_DEFAULTS.INITIAL_DEPOSIT,
      });
      setErrors({});
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3 p-4 bg-gray-800 rounded-xl border border-gray-700">
      <h2 className="text-lg font-semibold text-white">Register Job</h2>

      <label className={UI.LABEL_CLASS}>
        Contract Address
        <input
          required
          type="text"
          placeholder="C..."
          className={`${UI.INPUT_CLASS} ${errors.contractAddress ? "border-red-500" : ""}`}
          value={form.contractAddress}
          onChange={(e) => setForm({ ...form, contractAddress: sanitizeAddress(e.target.value) })}
          aria-invalid={!!errors.contractAddress}
          aria-describedby={errors.contractAddress ? "address-error" : undefined}
        />
        {errors.contractAddress && (
          <p id="address-error" className="mt-1 text-xs text-red-400">{errors.contractAddress}</p>
        )}
      </label>

      <label className={UI.LABEL_CLASS}>
        Interval (seconds)
        <input
          required
          type="number"
          min={VALIDATION.MIN_INTERVAL}
          className={`${UI.INPUT_CLASS} ${errors.interval ? "border-red-500" : ""}`}
          value={form.interval}
          onChange={(e) => setForm({ ...form, interval: Number(e.target.value) })}
          aria-invalid={!!errors.interval}
          aria-describedby={errors.interval ? "interval-error" : undefined}
        />
        {errors.interval && (
          <p id="interval-error" className="mt-1 text-xs text-red-400">{errors.interval}</p>
        )}
      </label>

      <label className={UI.LABEL_CLASS}>
        Initial Deposit (XLM)
        <input
          required
          type="number"
          min={VALIDATION.MIN_DEPOSIT}
          step={VALIDATION.DEPOSIT_STEP}
          className={`${UI.INPUT_CLASS} ${errors.initialDeposit ? "border-red-500" : ""}`}
          value={form.initialDeposit}
          onChange={(e) => setForm({ ...form, initialDeposit: e.target.value })}
          aria-invalid={!!errors.initialDeposit}
          aria-describedby={errors.initialDeposit ? "deposit-error" : undefined}
        />
        {errors.initialDeposit && (
          <p id="deposit-error" className="mt-1 text-xs text-red-400">{errors.initialDeposit}</p>
        )}
      </label>

      <button
        type="submit"
        disabled={loading}
        className={`${UI.BUTTON_CLASS_FULL} text-white`}
        aria-busy={loading}
      >
        {loading ? "Submitting…" : "Register"}
      </button>
    </form>
  );
}
