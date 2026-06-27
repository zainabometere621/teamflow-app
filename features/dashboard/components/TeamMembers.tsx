import { teamMembers } from "@/features/dashboard/data";

export default function TeamMembers() {
  return (
    <section className="bg-[#1e293b] shadow-lg border border-[#2d3f55] rounded-xl p-6 flex flex-col gap-3">
      <h2 className="text-[#ffffff] font-semibold text-lg">Team Members</h2>
      <div className="flex flex-col gap-4">
        {teamMembers.map((member, i) => (
          <div key={i} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className={`${member.avatarColor} h-9 w-9 rounded-full flex items-center justify-center text-white font-semibold text-sm shrink-0`}
              >
                {member.avatar}
              </div>
              <div>
                <p className="text-[#ffffff] text-sm font-medium">
                  {member.name}
                </p>
                <p className="text-[#94a3b8] text-xs">{member.role}</p>
              </div>
            </div>
            <span
              className={`text-xs px-2 py-0.5 rounded-full ${
                member.status === "Active"
                  ? "bg-[#175147] text-[#4ade80]"
                  : member.status === "Away"
                    ? "bg-[#4D4531] text-[#fbbf24]"
                    : "bg-[#1e293b] text-[#94a3b8]"
              }`}
            >
              {member.status}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
