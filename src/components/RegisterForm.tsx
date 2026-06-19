import { useState, FormEvent } from "react";
import type { RegisterJobParams } from "@/types";

interface Props {
  onSubmit: (params: RegisterJobParams) => Promise<void>;
}

export default function RegisterForm({ onSubmit }: Props) {
  const [form, setForm] = useState<RegisterJobParams>({
    contractAddress: "",
    interval: 3600,
    initialDeposit: "10",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await onSubmit(form);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3 p-4 bg-gray-800 rounded-xl border border-gray-700">
      <h2 className="text-lg font-semibold text-white">Register Job</h2>

      <label className="block text-sm text-gray-300">
        Contract Address
        <input
          required
          className="mt-1 w-full rounded bg-gray-900 border border-gray-600 px-3 py-1.5 text-sm text-white"
          value={form.contractAddress}
          onChange={(e) => setForm({ ...form, contractAddress: e.target.value })}
        />
      </label>

      <label className="block text-sm text-gray-300">
        Interval (seconds)
        <input
          required
          type="number"
          min={60}
          className="mt-1 w-full rounded bg-gray-900 border border-gray-600 px-3 py-1.5 text-sm text-white"
          value={form.interval}
          onChange={(e) => setForm({ ...form, interval: Number(e.target.value) })}
        />
      </label>

      <label className="block text-sm text-gray-300">
        Initial Deposit (XLM)
        <input
          required
          type="number"
          min={1}
          step="0.01"
          className="mt-1 w-full rounded bg-gray-900 border border-gray-600 px-3 py-1.5 text-sm text-white"
          value={form.initialDeposit}
          onChange={(e) => setForm({ ...form, initialDeposit: e.target.value })}
        />
      </label>

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 py-2 text-sm font-semibold text-white"
      >
        {loading ? "Submitting…" : "Register"}
      </button>
    </form>
  );
}
