import { Doctor } from "@prisma/client";
import { DoctorService } from "./service";
import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";

const createADoctor = catchAsync(async (req: Request, res: Response) => {
  const data = await DoctorService.createADoctor(req.body);

  sendResponse<Doctor>(res, {
    statusCode: 201,
    success: true,
    message: "A doctor created successfully",
    data,
  });
});

export const DoctorController = { createADoctor };
