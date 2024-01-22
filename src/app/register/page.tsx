"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Form from "../components/Form/Form";
import { useState } from "react";

interface DragonProps {
  id: string;
  name: string;
  type: string;
}

export default function Register() {
  const [dragon, setDragon] = useState<DragonProps[]>([]);
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin?callbackUrl=/dragons");
    },
  });

  if (status !== "authenticated") return;

  return (
    <section className="flex flex-col gap-4 justify-center m-6">
      <h1 className="text-2xl text-gray-300 font-bold">CADASTRO DE DRAGÕES:</h1>
      <div className="flex flex-col">
        <Form submit="register" />
      </div>
    </section>
  );
}
