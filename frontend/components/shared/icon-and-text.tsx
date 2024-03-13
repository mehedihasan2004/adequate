import dynamic from "next/dynamic";
import { LucideProps } from "lucide-react";
import dynamicIconImports from "lucide-react/dynamicIconImports";

interface IconAndTextProps extends LucideProps {
  name: keyof typeof dynamicIconImports;
  text: string;
}

const IconAndText = ({ name, text, ...props }: IconAndTextProps) => {
  const LucideIcon = dynamic(dynamicIconImports[name]);

  return (
    <div className="flex flex-row items-center justify-start">
      <LucideIcon name={name} size={20} {...props} />
      &nbsp;
      <span className="text-secondary-foreground/50">{text}</span>
    </div>
  );
};

export default IconAndText;
