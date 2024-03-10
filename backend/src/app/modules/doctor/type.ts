import { Doctor, User } from "@prisma/client";

type TCreateDoctorRequest = User & Doctor;

export { TCreateDoctorRequest };
