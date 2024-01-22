import Link from "next/link";

import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import UserInfo from "../components/UserInfo/UserInfo";

export default async function Profile() {
  const session = await getServerSession();

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/profile");
  }
  return (
    <section className="flex flex-col justify-center items-center gap-6 m-6">
      <UserInfo user={session?.user} />
      <Link href="/api/auth/signout">Sign Out</Link>
    </section>
  );
}
