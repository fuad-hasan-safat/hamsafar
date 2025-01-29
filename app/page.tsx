import Image from "next/image";
import { Button } from "@heroui/react";
import { GoSmiley } from "react-icons/go";
export default function Home() {
  return (
    <div className="">
      <Button 
      color="primary" 
      variant="bordered"
      startContent={<GoSmiley/>}
      >
        Bordered
      </Button>
    </div>
  );
}
