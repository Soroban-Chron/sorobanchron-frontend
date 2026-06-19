import { useState } from "react";
import type { Job, RegisterJobParams } from "@/types";
import { useFreighter } from "@/hooks/useFreighter";
import JobCard from "@/components/JobCard";
import RegisterForm from "@/components/RegisterForm";

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

export default function Dashboard() {
  const { address, connected, connect } = useFreighter();
  const [jobs] = useState<Job[]>(MOCK_JOBS);

  const handleRegister = async (params: RegisterJobParams) => {
    // TODO: build + sign + submit Soroban tx
    console.log("register", params);
    alert("Transaction would be submitted via Freighter");
  };

  return (
    <main className="min-h-screen bg-gray-950 text-white p-6 max-w-2xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">SorobanChron Dashboard</h1>
        {connected ? (
          <span className="text-xs font-mono bg-gray-800 px-3 py-1 rounded-full text-green-400">
            {address?.slice(0, 6)}…{address?.slice(-4)}
          </span>
        ) : (
          <button
            onClick={connect}
            className="rounded bg-indigo-600 hover:bg-indigo-500 px-4 py-1.5 text-sm font-semibold"
          >
            Connect Freighter
          </button>
        )}
      </div>

      <section className="space-y-3">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-400">Active Jobs</h2>
        {jobs.length === 0 ? (
          <p className="text-gray-500 text-sm">No jobs registered.</p>
        ) : (
          jobs.map((job) => <JobCard key={job.id} job={job} />)
        )}
      </section>

      {connected && <RegisterForm onSubmit={handleRegister} />}
    </main>
  );
}
