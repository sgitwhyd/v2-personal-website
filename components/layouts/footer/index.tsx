import React from "react";
import Link from "next/link";

const sosmedLinks = {
  github: "https://github.com/sgitwhyd",
  telegram: "https://t.me/sgitwhyd",
  instagram: "https://instagram.com/sigtwhyu",
  linkedin: "https://www.linkedin.com/in/sigit-wahyudi/",
};

const index = () => {
  return (
    <footer className="mx-auto hidden w-full max-w-5xl py-10 sm:px-9 md:block">
      <hr className="my-5 " />
      <p className="text-end">Copyright 2023 - made by Sigit with 💖</p>
    </footer>
  );
};

export default index;
