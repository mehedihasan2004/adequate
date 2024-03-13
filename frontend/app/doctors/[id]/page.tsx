import {
  AppointmentBookingForm,
  DoctorRestInfo,
  DoctorKeyInfo,
} from "@/app/_components";

const DoctorDetailsPage = ({ params: { id } }: { params: { id: string } }) => {
  return (
    <div className="flex flex-col gap-y-4 lg:grid lg:grid-cols-3 lg:gap-x-4 ">
      <div className="lg:col-span-2 border-2 space-y-4">
        <DoctorKeyInfo />
        <AppointmentBookingForm className="block lg:hidden" />
        <DoctorRestInfo />
      </div>
      <AppointmentBookingForm className="hidden lg:block" />
    </div>
  );
};

export default DoctorDetailsPage;
