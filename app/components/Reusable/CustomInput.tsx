import { Input } from "@nextui-org/react";


interface CustomInputType {
  label: string;
  type: string;
  variant: "underlined";
  isRequired?: boolean;
  defaultValue?: string;
  errorMessage?: string;
  isInvalid?: boolean;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
className?: string
}

const CustomInput: React.FC<CustomInputType> = ({
  label,
  type,
  variant,
  isRequired,
  defaultValue,
  errorMessage,
  isInvalid,
  startContent,
  endContent,
  className

}) => {
  return (
    <>
      <Input
        label={label}
        type={type}
        variant={variant}
        isRequired={isRequired}
        defaultValue={defaultValue}
        errorMessage={errorMessage}
        isInvalid={isInvalid}
        startContent={startContent}
        endContent={endContent}
        className={className}
      />
    </>
  );
};

export default CustomInput;