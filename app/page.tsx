import Image from "next/image";
import { Button } from "@heroui/react";
import { GoSmiley } from "react-icons/go";
import Link from "next/link";
import { url } from "inspector";
import { GiLoveMystery } from "react-icons/gi";
export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center mt-20 gap-6 text-default-600 w-full">
      <div
        className="flex flex-row justify-center items-center gap-6">
        <h1 className="text-3xl text-yellow-500">Welcome to  <span className="font-dancing_script text-4xl text-red-400 font-semibold">Ham - safar</span></h1>
        <Image
          src={'/svg/envelope.png'}
          alt="envlope"
          width={50}
          height={70}
        />
      </div>

      <Button
        as={Link}
        href="/members"
        color="warning"
        size="lg"
        // variant="bordered"
        startContent={<GiLoveMystery />}
        className="text-red-500 hover:text-red-500 font-semibold bg-green-400 hover:bg-yellow-300"
      >
        Continue
      </Button>
    </div>
  );
}
