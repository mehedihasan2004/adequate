import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface DoctorCardImageProps {
  src?: string;
  fallbackText: string;
}

const DoctorCardImage = ({ src, fallbackText }: DoctorCardImageProps) => {
  return (
    <Avatar className="rounded-md w-full h-[300px]">
      <AvatarImage
        className="rounded-md"
        src={src}
        alt={`doctor ${fallbackText}`}
      />
      <AvatarFallback className="rounded-md text-[300px] font-semibold text-secondary-foreground/15 bg-primary/15">
        {fallbackText.slice(0, 1)}
      </AvatarFallback>
    </Avatar>
  );
};

export default DoctorCardImage;
