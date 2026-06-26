import Header from "@/components/shared/Header";
import GreetingBanner from "@/features/dashboard/components/GreetingBanner";
import MetricCard from "@/features/dashboard/components/MetricCard";

export default function Dashboard() {
  return (
    <main className=" h-screen bg-[#0f172a] flex flex-col gap-8 ">
      <Header title="Dashboard" />
      {/* rest of dashboard content */}
     <GreetingBanner />
     <MetricCard/>
      
    </main>
  );
}
