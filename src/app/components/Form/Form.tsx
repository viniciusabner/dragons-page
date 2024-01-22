"use client";

import React, { useState } from "react";
import {
  registerDragon,
  updateDragon,
  removeDragon,
} from "@/app/api/services/route";
import { useRouter } from "next/navigation";

interface Dragon {
  id: string;
  name: string;
  type: string;
}

interface FormProps {
  dragon?: Dragon;
  onUpdate?: (dragon: Dragon) => void;
  onRemove?: any;
  submit?: "register" | "update";
}

const Form: React.FC<FormProps> = ({ dragon, onUpdate, onRemove, submit }) => {
  const [name, setName] = useState(dragon?.name || "");
  const [type, setType] = useState(dragon?.type || "");
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (submit === "register" && name !== "") {
      registerDragon(name, type, onUpdate as () => void);
      setName("");
      setType("");
    }

    if (submit === "update") {
      updateDragon(
        dragon?.id ? dragon.id : "",
        name,
        type,
        onUpdate as () => void
      );
    }
  };

  const handleDelete = async (event: React.FormEvent) => {
    event.preventDefault();
    onRemove(dragon?.id);
    removeDragon(dragon?.id as string);
  };

  return (
    <div className="flex gap-6">
      <form
        className="flex gap-4 md:flex-col md:w-full md:mb-12 md:border-b-[#6c69eb] md:border-b-[3px] md:border-solid"
        onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor="name"> Nome: </label>
          <input
            required
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="name"> Tipo: </label>
          <input
            className="md:w-[233px]"
            type="text"
            value={type}
            onChange={(event) => setType(event.target.value)}
          />
        </div>
        {submit === "register" ? (
          <button className="md:mb-12 hover:text-[#9896f1]" type="submit">
            Cadastrar
          </button>
        ) : (
          <div className="flex gap-4 md:flex md:justify-around md:mb-12 ">
            <button
              className="hover:text-[#9896f1]"
              onClick={() => router.push(`/details?id=${dragon?.id}`)}
            >
              Visualizar
            </button>
            <button className="hover:text-[#9896f1]" type="submit">
              Editar
            </button>
            <button className="hover:text-[#9896f1]" onClick={handleDelete}>
              Remover
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default Form;
