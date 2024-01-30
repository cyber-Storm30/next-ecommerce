"use client";
import React from "react";
import styles from "./links.module.css";
import { useSelector } from "react-redux";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { handleLogout } from "@/lib/actions";

interface Session {
  user?: {};
}

const Links: React.FC<Session> = ({ user }) => {
  const cart = useSelector((state: any) => state.cart.cart);
  const pathname = usePathname();
  const router = useRouter();
  const handleNavigate = (val: string) => {
    console.log(`/${val}`);
    router.push(`/${val}`);
  };
  const links = [
    {
      title: "MEN",
      path: "/men",
    },
    {
      title: "WOMEN",
      path: "/women",
    },
    {
      title: "KIDS",
      path: "/kids",
    },
  ];

  const options = [
    {
      logo: "/profile.png",
      title: "Profile",
      path: "/profile",
    },
    // {
    //   logo: "/heart.png",
    //   title: "Wishlist",
    //   path: "/wishlist",
    // },
    {
      logo: "/bag.png",
      title: "Bag",
      path: "/bag",
    },
  ];

  const logout = () => {
    router.push("/login");
    handleLogout();
  };
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <div className={styles.logoWrapper}>
          <Link href="/">
            <Image src="/logo.png" alt="" className={styles.logo} fill />
          </Link>
        </div>

        {pathname === "/login" || pathname === "/signup" ? (
          <></>
        ) : (
          <div className={styles.link}>
            {links.map((data, idx) => (
              <div className={styles.links} key={idx}>
                <Link href={data.path}>
                  <p className={styles.pathName}>{data.title}</p>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className={styles.rightContainer}>
        {!user ? (
          <div>
            {pathname === "/login" ? (
              <button
                className={styles.signupButton}
                onClick={() => handleNavigate("signup")}
              >
                Singup
              </button>
            ) : (
              <button
                className={styles.signupButton}
                onClick={() => handleNavigate("login")}
              >
                Login
              </button>
            )}
          </div>
        ) : (
          <div className={styles.options}>
            {options?.map((data, idx) => (
              <div key={idx} className={styles.optionWrapper}>
                <div className={styles.optionLogo}>
                  <Link href={data.path}>
                    <Image src={data.logo} alt="" fill />
                    {data.path === "/bag" && (
                      <div className={styles.badge}>{cart.length}</div>
                    )}
                  </Link>
                </div>
              </div>
            ))}
            {user && (
              <form action={logout}>
                <button className={styles.logout}>Logout</button>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Links;
