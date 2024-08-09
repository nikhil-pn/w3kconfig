"use client";

import React, { useRef } from "react";
import Image from "next/image";

function W3k() {
  const hasLogged = useRef(false);

  if (!hasLogged.current) {
    console.log(
      "This website is made by Nikhileth and his interns with loveeee.......enjoyyyy the eventt..."
    );
    console.log("Follow Nikhileth on X: https://x.com/nikhileth");
    hasLogged.current = true;
  }

  return (
    <div>
      <Image src="/images/w3k.png" alt="w3k" width={1000} height={1000} />
    </div>
  );
}

export default W3k;
