import Header from "@/components/shared/Header";
import GreetingBanner from "@/features/dashboard/components/GreetingBanner";
import MetricCard from "@/features/dashboard/components/MetricCard";
import { metricCards } from "@/features/dashboard/data";

export default function Dashboard() {
  return (
    <main className=" h-screen bg-[#0f172a] flex flex-col gap-4 ">
      <Header title="Dashboard" />
      {/* rest of dashboard content */}
      <GreetingBanner />
      <div className="grid grid-cols-4 gap-4 px-4">
        {metricCards.map((card, i) => (
          <MetricCard key={i} {...card} />
        ))}
      </div>
    </main>
  );
}
