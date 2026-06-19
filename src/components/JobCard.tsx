import type { Job } from "@/types";

interface Props {
  job: Job;
}

export default function JobCard({ job }: Props) {
  const lastRun = job.lastRun
    ? new Date(job.lastRun * 1000).toLocaleString()
    : "Never";

  return (
    <div className="rounded-xl border border-gray-700 bg-gray-800 p-4 space-y-1 text-sm">
      <div className="flex items-center justify-between">
        <span className="font-mono text-xs text-gray-400 truncate w-48">{job.contractAddress}</span>
        <span className={`text-xs font-semibold ${job.active ? "text-green-400" : "text-red-400"}`}>
          {job.active ? "Active" : "Paused"}
        </span>
      </div>
      <div className="flex gap-4 text-gray-300">
        <span>Interval: <strong>{job.interval}s</strong></span>
        <span>Fee Pool: <strong>{job.feePool} XLM</strong></span>
      </div>
      <div className="text-gray-500">Last run: {lastRun}</div>
    </div>
  );
}
