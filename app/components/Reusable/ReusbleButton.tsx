import { Button } from "@nextui-org/react";
import { FiArrowDownRight } from "react-icons/fi";
import React from "react";
import clsx from "clsx";

interface ReusbleButtonType {
  title: string;
  className?: string;
}

const ReusbleButton: React.FC<ReusbleButtonType> = ({ title, className }) => {
  return (
    <Button
      color="primary"
      variant="shadow"
      radius="full"
      className={clsx(
        "bg-gradient-to-r from-pink-500 to-purple-700 text-white shadow-lg font-semibold",
        className
      )}
      endContent={<FiArrowDownRight size={24} />}
    >
      {title}
    </Button>
  );
};

export default ReusbleButton;
