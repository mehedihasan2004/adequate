"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const NotFoundPage = () => {
  const { push } = useRouter();

  return (
    <section className="flex flex-row items-center justify-center min-h-screen">
      <div className="flex flex-row items-center justify-center">
        <h3 className="text-lg text-destructive font-medium">
          Opps, Page not found!
        </h3>
        <Button variant="link" onClick={() => push("/")}>
          Back To Home
        </Button>
      </div>
    </section>
  );
};

export default NotFoundPage;
