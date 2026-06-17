import Sidebar from "@/components/shared/Sidebar";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex">
      <Sidebar />
      <div className="flex-1">{children}</div>
    </main>
  );
}