import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="px-10 py-10 mt-auto">
      <div className="flex flex-col lg:flex-row gap-2 items-center justify-center sm:justify-between">
        <div className="flex flex-col gap-3 lg:flex-row items-center justify-center">
          <h1 className="text-2xl font-bold"> * </h1>

          <p className=" text-sm">© Oli Harris 2023</p>
        </div>
        <div className="flex text-xs lg:text-sm gap-4">
          <Link href="/">
            <p> Twitter</p>
          </Link>
          <Link href="/">
            <p> LinkedIn</p>
          </Link>
          <Link href="/">
            <p> Mail</p>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
