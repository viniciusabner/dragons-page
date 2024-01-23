"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { getDragon } from "../api/services/route";
import { formatDateBr } from "@/utils/format-date";

interface DetailsProps {
  name: string;
  type: string;
  createdAt: string;
}

export default function Details() {
  const searchParams = useSearchParams();
  const getId = searchParams.get("id");

  const [dragon, setDragon] = useState<DetailsProps>();

  useEffect(() => {
    const fetchDragon = async () => {
      const response = await getDragon(getId as string);
      setDragon(response);
    };

    fetchDragon();
  }, [getId]);

  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin?callbackUrl=/dragons");
    },
  });

  if (status !== "authenticated") return;

  return (
    <section className="flex flex-col items-center gap-4 m-6">
      <h1 className="text-2xl text-white">Detalhes do Dragão:</h1>
      <div className="flex flex-col">
        {dragon && (
          <div className="flex flex-col justify-start items-start ">
            <div>Nome: {dragon?.name}</div>
            <div>Tipo: {dragon?.type}</div>
            <div>
              Data de criação:{" "}
              {formatDateBr(dragon?.createdAt ? dragon?.createdAt : "")}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
