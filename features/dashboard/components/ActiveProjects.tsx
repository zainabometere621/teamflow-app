import { activeProjects } from "@/features/dashboard/data";

export default function ActiveProjects() {
  return (
    <section className="bg-[#1e293b] shadow-lg border border-[#2d3f55] rounded-xl p-6 flex flex-col gap-3">
      <h2 className="text-[#ffffff] font-semibold text-lg">Active Projects</h2>
      <div className="flex flex-col gap-2">
        {activeProjects.map((project, i) => (
          <div key={i} className="bg-[#0f172a] rounded-lg overflow-hidden flex">
            <div className={`w-1 ${project.color} shrink-0`} />
            <div className="flex flex-col gap-1 p-4 flex-1">
              <div className="flex items-center justify-between">
                <p className="text-[#ffffff] text-sm font-medium">
                  {project.name}
                </p>
                <p className="text-[#94a3b8] text-xs">{project.dueDate}</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex-1 bg-[#2d3f55] rounded-full h-1.5">
                  <div
                    className={`${project.color} h-1.5 rounded-full`}
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
                <span className="text-[#94a3b8] text-xs">
                  {project.progress}%
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
