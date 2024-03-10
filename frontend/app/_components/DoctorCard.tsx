"use client";

import { cn } from "@/lib/utils";
import { MapPin, Star } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { DoctorCardImage } from "@/app/_components";
import { badgeVariants } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

const DoctorCard = () => {
  const id = 123;
  const { push } = useRouter();

  return (
    <Card className={cn("w-[300px] bg-primary/5")}>
      <CardHeader>
        <DoctorCardImage src="/images/logo.png" fallbackText="Doctor" />
      </CardHeader>
      <CardContent className="space-y-2">
        <h2 className="text-lg text-primary font-semibold truncate">
          Dr. Anamur Rahman Khan Akond
        </h2>
        <h4 className="text-sm truncate font-medium">
          MBBS, BCS, From BSMMU, Dhaka Bangladesh.
        </h4>
        <div className="flex flex-row items-center justify-between">
          <p
            className={`${badgeVariants({
              variant: "outline",
            })} font-medium outline-primary/80`}
          >
            Eye
          </p>
          <div className="flex flex-row items-center gap-x-1">
            <Star fill="gold" className="size-4 text-[gold]" />
            <p className="font-semibold">4.5</p>
          </div>
        </div>
        <div className="flex flex-row items-center justify-start">
          <MapPin className="size-4" />
          <p className="font-medium ml-2">Dhaka</p>
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={() => push(`/doctors/${id}`)} className="w-full">
          Visit Doctor
        </Button>
      </CardFooter>
    </Card>
  );
};

export default DoctorCard;
