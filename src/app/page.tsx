import AuthForm from "./AuthForm";
import Index from "./users/page";

export default function Home() {
  return (
    <main className="container flex mx-auto justify-between">
      <div>
        <h2 className="font-bold ">Users:</h2>
        <Index />
      </div>
      <AuthForm />
    </main>
  );
}
