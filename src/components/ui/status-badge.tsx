import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  status: "pending" | "graded" | "late";
  className?: string;
}

export const StatusBadge = ({ status, className }: StatusBadgeProps) => {
  const variants = {
    pending: "bg-warning/10 text-warning border-warning/20",
    graded: "bg-success/10 text-success border-success/20",
    late: "bg-danger/10 text-danger border-danger/20"
  };

  const labels = {
    pending: "Pending",
    graded: "Graded",
    late: "Late"
  };

  return (
    <span 
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border",
        variants[status],
        className
      )}
    >
      {labels[status]}
    </span>
  );
};