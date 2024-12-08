import { Button } from "@nextui-org/react";
// import { FiArrowDownRight } from "react-icons/fi";

export default function ReusbleButton({title}) {
  return (
    <Button
      color="primary"
      variant="shadow"
      radius="full"
      className="bg-gradient-to-r from-pink-500 to-purple-700 text-white shadow-lg"
      startContent={''}
    >
      {title}
    </Button>
  );
}