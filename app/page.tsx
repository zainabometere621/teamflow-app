import Landing from "@/features/auth/components/Landing";
import AuthForm from "@/features/auth/components/AuthForm";
export default function Home() {
  return (
    <main className="flex">
      <Landing />
      <AuthForm />
    </main>
  );
}
