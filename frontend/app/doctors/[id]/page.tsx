import {
  AppointmentBookingForm,
  DoctorRestInfo,
  DoctorKeyInfo,
} from "@/app/_components";

const DoctorDetailsPage = ({ params: { id } }: { params: { id: string } }) => {
  return (
    <div className="grid grid-cols-3 gap-x-4">
      <div className="col-span-2 border-2 space-y-4">
        <DoctorKeyInfo />
        <DoctorRestInfo />
      </div>
      <AppointmentBookingForm />
    </div>
  );
};

export default DoctorDetailsPage;
