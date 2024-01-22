import { getServerSession } from "next-auth";
import Link from "next/link";
import Image from "next/image";
import { Text } from "./components/Text/Text";
import logo from "../../public/logo-home.png";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession();
  if (!session) {
    redirect("/api/auth/signin");
  }

  return (
    <div className="bg-[#fffef8] w-full h-full p-9 rounded-md shadow-[inset_0px_0px_36px_1px_rgba(0,0,0,0.75)]">
      {session ? (
        <>
          <div className="flex flex-col justify-center items-center mt-12 md:mt-0 gap-8 text-">
            <Text
              label={"Bem vindo á Dragons Page!!!"}
              color="text-neutral-900"
              fontSize="md:text-[16px]"
            />
            <Image src={logo} alt={"Logo Dragons Page"} />
          </div>
        </>
      ) : (
        <div className="flex flex-col justify-center items-center text-neutral-900">
          <h4>Ops! Você não está logado.</h4>
          <Link
            className=" hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
            href="/api/auth/signin"
          >
            Clique aqui para fazer seu login!!!
          </Link>
        </div>
      )}
    </div>
  );
}
