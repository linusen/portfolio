import type { ProjectStatus } from "@/lib/types";

const labels: Record<ProjectStatus, string> = {
  shipped: "Shipped",
  "in progress": "In progress",
  parked: "Parked",
};

const styles: Record<ProjectStatus, string> = {
  shipped: "border-emerald-200/80 bg-emerald-50 text-emerald-800/90",
  "in progress": "border-amber-200/80 bg-amber-50 text-amber-900/85",
  parked: "border-stone-200 bg-stone-100 text-stone-600",
};

type StatusTagProps = {
  status: ProjectStatus;
};

export function StatusTag({ status }: StatusTagProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${styles[status]}`}
    >
      {labels[status]}
    </span>
  );
}
