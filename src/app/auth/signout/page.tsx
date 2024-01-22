"use client";

import { Button } from "@/app/components/Button/Button";
import { signOut } from "next-auth/react";

import { Text } from "@/app/components/Text/Text";

export default function SignOut() {
  const handleClick = () => {
    signOut({
      callbackUrl: "/",
    });
  };

  return (
    <section className="flex flex-col justify-center items-center gap-4 text-bold m-6">
      <Text
        label={"Tem certeza que deseja sair?"}
        fontSize="text-md"
        color="text-white"
      />
      <Button
        label={"Sign out"}
        backgroundColor=""
        color="#FFFFFF"
        onclick={handleClick}
        size="medium"
        primary
      />
    </section>
  );
}
