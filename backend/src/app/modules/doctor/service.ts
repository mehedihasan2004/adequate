import { E_Role } from "@prisma/client";
import { TCreateDoctorRequest } from "./type";
import prisma from "../../../constants/prisma";
import ApiError from "../../../errors/ApiError";
import { DoctorConstant } from "./constant";

const createADoctor = async ({
  name,
  email,
  password,
  image,
  ...doctorData
}: TCreateDoctorRequest) => {
  let result;

  await prisma.$transaction(async (tx) => {
    const user = await tx.user.create({
      data: {
        name: name ?? "",
        email,
        password: password ?? "",
        rawPass: password ?? "",
        role: E_Role.DOCTOR,
        image: image ?? "",
      },
      select: DoctorConstant.userSelect,
    });

    if (!user) throw new ApiError(400, "Failed to create user!");

    console.log(
      "....................................................................................",
      user
    );

    const doctor = await prisma.doctor.create({
      data: { ...doctorData },
    });

    console.log(
      "..................................................doctor",
      doctor
    );

    result = { user, doctor };
  });

  if (!result) throw new ApiError(400, "Failed to create doctor!");

  return result;
};

export const DoctorService = { createADoctor };
