import { Skeleton } from "@/components/ui/skeleton";

const LoadingPage = () => {
  return (
    <section className="space-y-6 mt-6">
      <Skeleton className="h-[20px] w-full rounded-xl" />
      <Skeleton className="h-[200px] w-full rounded-xl" />
      <div className="flex flex-row justify-between gap-x-4">
        <Skeleton className="h-[200px] w-1/2 rounded-xl" />
        <Skeleton className="h-[200px] w-1/2 rounded-xl" />
      </div>
      <Skeleton className="h-[200px] w-full rounded-xl" />
    </section>
  );
};

export default LoadingPage;
