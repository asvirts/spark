import AdbIcon from "@mui/icons-material/Adb";
import UsersList from "../../lib/UsersList";
import AuthForm from "./AuthForm";

export default function Home() {
  return (
    <main className="container flex mx-auto justify-center">
      <h1 className="text-4xl font-bold">Spark</h1>
      <AdbIcon />
      <UsersList />
      <AuthForm />
    </main>
  );
}
