import { useState } from "react";
import type { Job, RegisterJobParams } from "@/types";
import { useFreighter } from "@/hooks/useFreighter";
import JobCard from "@/components/JobCard";
import RegisterForm from "@/components/RegisterForm";
import { formatAddress } from "@/lib/formatting";
import { VALIDATION } from "@/lib/constants";

// Stub: replace with real contract call
const MOCK_JOBS: Job[] = [
  {
    id: "1",
    contractAddress: "CABC...XYZ",
    interval: 3600,
    feePool: "50",
    lastRun: Math.floor(Date.now() / 1000) - 900,
    active: true,
  },
];

/**
 * Main dashboard page for SorobanChron
 */
export default function Dashboard() {
  const { address, connected, connect, disconnect, error } = useFreighter();
  const [jobs] = useState<Job[]>(MOCK_JOBS);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleConnect = async () => {
    try {
      setSubmitError(null);
      await connect();
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Connection failed");
    }
  };

  const handleDisconnect = () => {
    disconnect();
    setSubmitError(null);
  };

  const handleRegister = async (params: RegisterJobParams) => {
    try {
      setSubmitError(null);
      // TODO: build + sign + submit Soroban tx
      console.log("register", params);
      alert("Transaction would be submitted via Freighter");
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : String(err);
      setSubmitError(errorMsg);
      console.error("Registration failed:", err);
    }
  };

  const displayAddress = address ? formatAddress(address, VALIDATION.ADDRESS_TRUNCATE_START, VALIDATION.ADDRESS_TRUNCATE_END) : null;
  const currentError = error || submitError;

  return (
    <main className="min-h-screen bg-gray-950 text-white p-6 max-w-2xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">SorobanChron Dashboard</h1>
        {connected ? (
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono bg-gray-800 px-3 py-1 rounded-full text-green-400">
              {displayAddress}
            </span>
            <button
              onClick={handleDisconnect}
              className="rounded bg-red-600 hover:bg-red-500 px-3 py-1.5 text-sm font-semibold text-white"
              aria-label="Disconnect wallet"
            >
              Disconnect
            </button>
          </div>
        ) : (
          <button
            onClick={handleConnect}
            className="rounded bg-indigo-600 hover:bg-indigo-500 px-4 py-1.5 text-sm font-semibold"
            aria-label="Connect Freighter wallet"
          >
            Connect Freighter
          </button>
        )}
      </div>

      {currentError && (
        <div className="rounded-lg bg-red-900/20 border border-red-700 p-3 text-sm text-red-200" role="alert">
          <strong>Error:</strong> {currentError}
        </div>
      )}

      <section className="space-y-3">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-400">Active Jobs</h2>
        {jobs.length === 0 ? (
          <p className="text-gray-500 text-sm">No jobs registered.</p>
        ) : (
          <div className="space-y-2">
            {jobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        )}
      </section>

      {connected && <RegisterForm onSubmit={handleRegister} />}
    </main>
  );
}
