import Button from "@/app/components/Button";
import Image from "next/image";
import React from "react";
import thumb from "../../../../public/images/thumb.png";

const page = () => {
  return (
    <div className="container mx-auto space-y-5">
      <h2 className="text-2xl">This is Mission Page</h2>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
        ducimus nulla quo quia soluta velit nesciunt necessitatibus, voluptas
        odio voluptatibus atque repellat corrupti totam unde quisquam laboriosam
        quidem? Corporis, blanditiis?
      </p>

      <Image src={thumb} alt="Thumb Image" placeholder="blur"></Image>

      <Button />
    </div>
  );
};

export default page;
