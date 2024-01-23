"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { getDragons } from "../api/services/routes";
import Form from "../components/Form/Form";
import { Modal } from "../components/Modal/Modal";

interface DragonsProps {
  name: string;
  type: string;
  id: string;
}

export default function Dragons() {
  const [dragons, setDragons] = useState<DragonsProps[]>([]);
  const [openModal, setOpenModal] = useState<boolean>(false);

  useEffect(() => {
    const fetchDragons = async () => {
      const response = await getDragons();
      const sortedData = response?.sort(
        (a: { name: string }, b: { name: string }) => {
          return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
        }
      );
      setDragons(sortedData);
    };

    fetchDragons();
  }, []);

  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin?callbackUrl=/dragons");
    },
  });

  if (status !== "authenticated") return;

  const handleUpdate = (updatedDragon: DragonsProps) => {
    const updatedDragons = dragons.map((dragon) => {
      if (dragon.id === updatedDragon.id) {
        return {
          ...dragon,
          name: updatedDragon.name,
          type: updatedDragon.type,
        };
      }
      return dragon;
    });
    setDragons(updatedDragons);
  };

  const handleDelete = (id: string) => {
    setDragons((prevDragons) =>
      prevDragons.filter((dragon) => dragon.id !== id)
    );
  };

  return (
    <section className="flex flex-col gap-4 justify-center md:w-full m-6">
      <h1 className="text-2xl text-gray-300 font-bold">LISTA DE DRAGÕES:</h1>
      <div className="flex flex-col">
        {dragons.sort().map((dragon: DragonsProps) => (
          <Form
            key={dragon.id}
            dragon={dragon}
            onUpdate={handleUpdate}
            onRemove={handleDelete}
            submit="update"
            openModal={setOpenModal as any}
          />
        ))}
      </div>
      {openModal && (
        <div>
          <Modal closeButton openModal={setOpenModal}>
            <div className=" text-gray-100 p-16 rounded-3xl font-bold">
              Alteração realizada com sucesso!!!
            </div>
          </Modal>
        </div>
      )}
    </section>
  );
}
