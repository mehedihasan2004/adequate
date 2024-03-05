import { ZodError } from "zod";
import config from "../../config";
import { Prisma } from "@prisma/client";
import ApiError from "../../errors/ApiError";
import handleZodError from "../../errors/handleZodError";
import handleClientError from "../../errors/handleClientError";
import { TGenericErrorMessage } from "../../types/common";
import handleValidationError from "../../errors/handleValidationError";
import { ErrorRequestHandler, NextFunction, Request, Response } from "express";

const globalErrorHandler: ErrorRequestHandler = (
  error,
  _: Request,
  res: Response,
  __: NextFunction
) => {
  config.env === "development"
    ? console.log(`🐱‍🏍 globalErrorHandler ~~`, { error })
    : console.log(`🐱‍🏍 globalErrorHandler ~~`, error);

  let statusCode = 500;
  let message = "Something went wrong !";
  let errorMessages: TGenericErrorMessage[] = [];

  if (error instanceof Prisma.PrismaClientValidationError) {
    const simplifiedError = handleValidationError(error);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorMessages = simplifiedError.errorMessages;
  } else if (error instanceof Prisma.PrismaClientKnownRequestError) {
    const simplifiedError = handleClientError(error);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message!;
    errorMessages = simplifiedError.errorMessages;
  } else if (error instanceof ZodError) {
    const simplifiedError = handleZodError(error);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorMessages = simplifiedError.errorMessages;
  } else if (error instanceof ApiError) {
    statusCode = error?.statusCode;
    message = error.message;
    errorMessages = error?.message
      ? [{ path: "", message: error?.message }]
      : [];
  } else if (error instanceof Error) {
    message = error?.message;
    errorMessages = error?.message
      ? [{ path: "", message: error?.message }]
      : [];
  }

  res.status(statusCode).json({
    success: false,
    message,
    errorMessages,
    stack: config.env !== "production" ? error?.stack : undefined,
  });
};

export default globalErrorHandler;
