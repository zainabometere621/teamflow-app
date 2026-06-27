import Header from "@/components/shared/Header";
import GreetingBanner from "@/features/dashboard/components/GreetingBanner";
import MetricCard from "@/features/dashboard/components/MetricCard";
import { metricCards } from "@/features/dashboard/data";
import ActiveProjects from "@/features/dashboard/components/ActiveProjects";
import RecentActivity from "@/features/dashboard/components/RecentActivity";
import TodaysTasks from "@/features/dashboard/components/TodaysTask";
import TeamMembers from "@/features/dashboard/components/TeamMembers";

export default function Dashboard() {
  return (
    <main className=" h-full bg-[#0f172a] flex flex-col gap-4 py-4 ">
      <Header title="Dashboard" />
      {/* rest of dashboard content */}
      <GreetingBanner />
      <div className="grid grid-cols-4 gap-4 px-4">
        {metricCards.map((card, i) => (
          <MetricCard key={i} {...card} />
        ))}
      </div>
      <div className="flex px-4 gap-4">
        <div className="flex-[2] flex flex-col gap-4">
          <ActiveProjects />
          <TodaysTasks />
        </div>

        <div className="flex-1 flex flex-col gap-4">
          <div className="flex-1">
            <RecentActivity />
          </div>
          <TeamMembers />
        </div>
      </div>
    </main>
  );
}
