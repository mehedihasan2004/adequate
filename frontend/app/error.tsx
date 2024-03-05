"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const ErrorPage = () => {
  const { push } = useRouter();

  return (
    <section className="flex flex-row items-center justify-center min-h-screen">
      <div className="flex flex-row items-center justify-center">
        <h3 className="text-lg text-destructive font-medium">
          Something went wrong!
        </h3>
        <Button variant="link" onClick={() => push("/")}>
          Try Again
        </Button>
      </div>
    </section>
  );
};

export default ErrorPage;
