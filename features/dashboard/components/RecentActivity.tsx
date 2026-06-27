import { recentActivities } from "@/features/dashboard/data";

export default function RecentActivity() {
  return (
    <div className="bg-[#1e293b] w-full shadow-lg rounded-xl p-6 flex flex-col gap-4">
      <h2 className="text-[#ffffff] font-semibold text-lg">Recent Activity</h2>
      <div className="flex flex-col gap-4">
        {recentActivities.map((activity, i) => (
          <div key={i} className="flex gap-3">
            <div
              className={`h-2 w-2 rounded-full mt-1.5 shrink-0 ${activity.color}`}
            />
            <div>
              <p className="text-[#ffffff] text-sm">{activity.text}</p>
              <p className="text-[#94a3b8] text-xs mt-0.5">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
