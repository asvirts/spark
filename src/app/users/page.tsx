import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function Index() {
  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });

  let { data: users, error } = await supabase
    .from("users")
    .select("first_name");

  if (error) throw error;

  return (
    <div>
      <ul className="my-auto text-foreground">
        {users?.map((user) => (
          <li key={user.first_name}>{user.first_name}</li>
        ))}
      </ul>
    </div>
  );
}
