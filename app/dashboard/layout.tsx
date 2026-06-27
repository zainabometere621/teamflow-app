import Sidebar from "@/components/shared/Sidebar";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex">
      <div className="sticky top-0 h-screen">
          <Sidebar />
      </div>
    

      <div className="flex-1">{children}</div>
    </main>
  );
}