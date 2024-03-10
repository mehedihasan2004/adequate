import { z } from "zod";
import { E_Branch, E_Role, E_Speciality } from "@prisma/client";

const ZCreateADoctor = z.object({
  body: z.object({
    // User data
    name: z.string().optional(),
    email: z.string({ required_error: "Email is required!" }).email(),
    password: z.string().optional(),
    role: z
      .enum([...Object.keys(E_Role)] as [string, ...string[]])
      .default(E_Role.PATIENT),
    image: z.string().optional(),

    // Doctor data
    contactNo: z.string({ required_error: "Contact number is required!" }),
    educationAndExperience: z.string({
      required_error: "Education and experience is required!",
    }),
    about: z.string().optional(),
    visitFee: z.number({ required_error: "Visit fee is required!" }).default(0),
    speciality: z.enum(
      [...Object.keys(E_Speciality)] as [string, ...string[]],
      { required_error: "Speciality is required!" }
    ),
    branch: z
      .enum([...Object.keys(E_Branch)] as [string, ...string[]])
      .default(E_Branch.DHAKA),
  }),
});

export const DoctorValidation = { ZCreateADoctor };
