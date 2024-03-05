import { Prisma } from "@prisma/client";

const handleValidationError = (error: Prisma.PrismaClientValidationError) => {
  const errors = [{ path: "", message: error.message }];

  return {
    statusCode: 400,
    message: "Prisma Validation Error",
    errorMessages: errors,
  };
};

export default handleValidationError;
