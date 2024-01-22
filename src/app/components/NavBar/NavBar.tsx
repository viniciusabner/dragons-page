"use client";
import Link from "next/link";
import Image from "next/image";
import UserInfo from "../UserInfo/UserInfo";
import logoNav from "../../../../public/logo-nav.png";
import { useState } from "react";
import { useSession } from "next-auth/react";
import "./navBar.css";

export default function NavBar() {
  const { data: session, status } = useSession();
  const [showSignOut, setShowSignOut] = useState<boolean>(false);

  let mediaQuery;
  if (typeof window !== "undefined") {
    mediaQuery = window.matchMedia("only screen and (max-width: 768px)");
  } else {
    mediaQuery = {};
  }

  if (status !== "authenticated") {
    return <></>;
  }

  return (
    <nav>
      <Link className="image" href="/">
        <Image src={logoNav} alt={"Logo Dragons Page"} width={400} />
      </Link>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/dragons">Dragões</Link>
        </li>
        <li>
          <Link href="/register">Cadastro</Link>
        </li>
        {mediaQuery.matches && (
          <li>
            <Link href="/profile">User</Link>
          </li>
        )}
      </ul>
      {mediaQuery.matches ? (
        <></>
      ) : (
        <div className="user">
          <div
            className="user-info"
            onClick={() => setShowSignOut(!showSignOut)}
          >
            <UserInfo user={session?.user} />
          </div>
          <div className="dropdown">
            {showSignOut && (
              <div className="signOut">
                <Link
                  className="link"
                  href="/profile"
                  onClick={() => setShowSignOut(!showSignOut)}
                >
                  - Perfil
                </Link>
                <Link
                  className="link"
                  href="/api/auth/signout"
                  onClick={() => setShowSignOut(!showSignOut)}
                >
                  - Sign Out
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
