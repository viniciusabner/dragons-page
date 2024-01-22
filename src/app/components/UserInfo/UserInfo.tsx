import Image from "next/image";

interface UserInfoProps {
  user:
    | {
        name?: string | null;
        email?: string | null;
        image?: string | null;
      }
    | undefined;
}

export default function UserInfo({ user }: UserInfoProps) {
  return (
    <div className="flex items-center mx-4">
      <div className="flex rounded-sm bg-[#2a2a2a] min-w-[250px] font-bold text-white items-center gap-2 p-2 justify-center">
        <div>Olá {user?.name}!!!</div>
        {user?.image ? (
          <Image
            className="rounded-full border border-black shadow-black drop-shadow-xl dark:border-slate-500"
            src={user?.image}
            width={30}
            height={40}
            alt={user?.name ?? "User avatar"}
            priority={true}
          />
        ) : null}
      </div>
    </div>
  );
}
