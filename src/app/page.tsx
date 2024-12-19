import { Button } from "@nextui-org/react";
import Link from "next/link";
import { FaRegSmile } from "react-icons/fa";


export default function Home() {
  return (
    <div>
      <h1>Hello app!</h1>
      <Button
        as={Link}
        href='/members'
        size='sm' color='primary' variant="bordered" startContent={<FaRegSmile size={15} />}>Click me!</Button>
    </div>
  );
}
