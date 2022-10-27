import React from "react";
import Link from "next/link";
import { BsSearch } from "react-icons/bs";
import { IconContext } from "react-icons";
import styles from "./search.module.css";

export default function Navbar() {
  return (
    <nav className="mt-8">
      <div className="flex justify-between items-center">
        <div className="mx-4 font-bold text-md">
          <Link href={"/"} passHref>
            ALOHA
          </Link>
          <p className="font-normal">Creatic</p>
        </div>
        <div>
          <ul className="flex gap-6">
            <li className="cursor-pointer hover:font-semibold ">Home</li>
            <li className="cursor-pointer hover:font-semibold ">About</li>
            <li className="cursor-pointer hover:font-semibold ">Services</li>
          </ul>
        </div>
        <div className="flex gap-6">
          <div className={styles.container}>
            <input className={styles.input} type="text" />
            <button className={styles.btn}>
              <BsSearch />
            </button>
          </div>
          <Link href={"/loginpage"} passHref>
            <button className="font-medium mx-4 bg-[#F3C7BD] px-6 py-1 rounded-xl hover:shadow-md hover:bg-[#FDAE9C]">
              Login
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
