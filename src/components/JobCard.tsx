import type { Job } from "@/types";
import { formatUnixDate, formatAddress, formatDuration } from "@/lib/formatting";
import { VALIDATION } from "@/lib/constants";

interface Props {
  job: Job;
}

/**
 * Displays a single automation job card
 */
export default function JobCard({ job }: Props) {
  const lastRun = job.lastRun ? formatUnixDate(job.lastRun) : "Never";
  const displayAddress = formatAddress(
    job.contractAddress,
    VALIDATION.ADDRESS_TRUNCATE_START,
    VALIDATION.ADDRESS_TRUNCATE_END
  );
  const intervalDisplay = formatDuration(job.interval);

  return (
    <div className="rounded-xl border border-gray-700 bg-gray-800 p-4 space-y-1 text-sm" role="article" aria-label={`Job ${displayAddress}`}>
      <div className="flex items-center justify-between">
        <span className="font-mono text-xs text-gray-400 truncate w-48" title={job.contractAddress}>
          {displayAddress}
        </span>
        <span
          className={`text-xs font-semibold ${job.active ? "text-green-400" : "text-red-400"}`}
          aria-label={`Job status: ${job.active ? "Active" : "Paused"}`}
        >
          {job.active ? "Active" : "Paused"}
        </span>
      </div>
      <div className="flex gap-4 text-gray-300">
        <span>Interval: <strong>{intervalDisplay}</strong></span>
        <span>Fee Pool: <strong>{job.feePool} XLM</strong></span>
      </div>
      <div className="text-gray-500">Last run: {lastRun}</div>
    </div>
  );
}
