
import Link from "next/link";
import React from "react";

export default function layout({ children }) {
  return (
    <div className="mt-10">
      
      <nav>
        <ul className="flex gap-6">
            <li><Link href={"/about/mission"}>Mission</Link></li>
            <li><Link href={"/about/vision"}>Vission</Link></li>
        </ul>
      </nav>
      {children}
    </div>
  );
}
