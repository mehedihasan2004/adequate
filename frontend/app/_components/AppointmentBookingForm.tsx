import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

const AppointmentBookingForm = ({ className }: HTMLAttributes<HTMLElement>) => {
  return (
    <section className={cn("lg:col-span-1 border-2", className)}>
      AppointmentBookingForm
    </section>
  );
};

export default AppointmentBookingForm;
