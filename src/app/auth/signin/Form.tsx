"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Image from "next/image";
import { signIn, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import iconGitHub from "../../../../public/iconmonstr-github-3.svg";

type FormInput = {
  email: string;
  password: string;
};

export default function Form() {
  const [signInCredentialsError, setSignInCredentialsError] =
    useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>();

  const gitHubProvider = async () =>
    await signIn("github", {
      redirect: true,
      callbackUrl: "/",
    });

  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    const result = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
      callbackUrl: "/",
    });

    setSignInCredentialsError(!!result?.error);
  };

  const { status } = useSession();

  if (status === "authenticated") {
    redirect("/");
  }

  return (
    <section className="mt-10 flex flex-col items-center gap-4 m-auto m-6">
      <div className="flex bg-slate-50 p-3 text-zinc-900 font-bold gap-2 cursor-pointer hover:bg-violet-600 hover:text-white w-full">
        <div onClick={gitHubProvider}>Login com Github</div>
        <Image src={iconGitHub} alt={"Icone GitHub"} />
      </div>
      <p className="text-gray-500">ou</p>
      {signInCredentialsError && (
        <p className="text-red-500">Credenciais inválidas!</p>
      )}
      <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder="email"
          required
          {...register("email", { required: true })}
        />
        <input
          type="password"
          placeholder="senha"
          required
          {...register("password", { required: true })}
        />
        <input
          className="bg-violet-600 hover:bg-violet-300 hover:text-black p-3 cursor-pointer font-bold"
          type="submit"
          value="Login"
        />
      </form>
    </section>
  );
}
