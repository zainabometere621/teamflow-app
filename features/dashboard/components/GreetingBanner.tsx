import { Button } from "@/components/ui/button";



export default function GreetingBanner() {
return(
     <section className="px-6">
        <div className="bg-[#1e293b] rounded-xl p-6 shadow-lg flex items-center justify-between">
          <div>
            <h2 className="text-[#ffffff] text-2xl font-bold flex items-center gap-2">
              Good morning, Alex <span>👋</span>
            </h2>
            <p className="text-[#94a3b8] mt-1 text-sm">
              You have 24 tasks today
            </p>
          </div>
          <Button className="hover:bg-[#2d3f55] text-[#ffffff] text-sm bg-[#0f172a]">
            View Calendar
          </Button>
        </div>
      </section>
)
}