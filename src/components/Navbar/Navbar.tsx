"use client";

import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
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
        {/* <div className={styles.searchContainer}>
          <div className={styles.searchImg}>
            <Image src="/search.png" fill alt="" />
          </div>
          <input
            className={styles.searchbar}
            placeholder="Seach for products,brands and more"
          />
        </div> */}
      </div>
      <div className={styles.rightContainer}>
        {pathname === "/login" || pathname === "/signup" ? (
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
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
