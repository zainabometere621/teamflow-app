import { todaysTasks } from "@/features/dashboard/data";
import { Checkbox } from "@/components/ui/checkbox";

export default function TodaysTasks() {
  return (
    <div className="bg-[#1e293b] shadow-lg border border-[#2d3f55] rounded-xl p-6 flex flex-col gap-4">
      <h2 className="text-[#ffffff] font-semibold text-lg">Today's Tasks</h2>
      <div className="flex flex-col gap-3">
        {todaysTasks.map((task, i) => (
          <div
            key={i}
            className="bg-[#0f172a] rounded-lg px-4 py-3 flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <Checkbox
                checked={task.completed}
                className="border-[#94a3b8]  bg-[#ffffff] data-[state=checked]:bg-[#3b82f6] data-[state=checked]:border-[#3b82f6]"
              />
              <p
                className={`text-sm ${task.completed ? "line-through text-[#94a3b8]" : "text-[#ffffff]"}`}
              >
                {task.text}
              </p>
            </div>
            <span
              className={`${task.priorityColor} text-white text-xs px-2 py-0.5 rounded`}
            >
              {task.priority}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}