import { LucideIcon } from "lucide-react";

interface MetricCardProps {
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
  trend: string;
  trendUp: boolean;
  value: number;
  label: string;
  barColor: string;
  bars: number[];
}

export default function MetricCard({
  icon: Icon,
  iconBg,
  iconColor,
  trend,
  trendUp,
  value,
  label,
  barColor,
  bars,
}: MetricCardProps) {
  return (
    <div className="bg-[#1e293b] border border-[#2d3f55]  rounded-xl p-5 flex flex-col gap-2 flex-1">
      {/* top row — icon + trend */}
      <div className="flex items-center justify-between">
        <div className={`${iconBg} p-2 rounded-lg`}>
          <Icon className={`h-5 w-5 ${iconColor}`} />
        </div>
        <span className={`text-xs font-medium ${trendUp ? "text-green-400" : "text-red-400"}`}>
          {trendUp ? "↗" : "↘"} {trend}
        </span>
      </div>
      {/* value + label */}
      <div>
        <p className="text-[#ffffff] text-2xl font-bold">{value}</p>
        <p className="text-[#94a3b8] text-sm mt-1">{label}</p>
      </div>
      {/* mini bar chart */}
      <div className="flex items-end gap-1 h-8">
        {bars.map((height, i) => (
          <div
            key={i}
            className={`flex-1 rounded-sm ${barColor}`}
            style={{ height: `${height}px` }}
          />
        ))}
      </div>
    </div>
  );
}