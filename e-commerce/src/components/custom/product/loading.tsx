import { Skeleton } from "@/components/ui/skeleton";

export const ProductSkeleton = () => {
  return (
    <div 
      className="flex flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm"
      aria-hidden="true"
    >
      <div className="relative flex h-64 items-center justify-center bg-gray-50 p-6">
        <Skeleton className="h-4/5 w-4/5 object-contain" />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-4 flex items-center justify-between">
          <Skeleton className="h-3 w-20 rounded-full" />
          <div className="flex items-center gap-1">
            <Skeleton className="h-3 w-3 rounded-full" />
            <Skeleton className="h-3 w-8 rounded-full" />
          </div>
        </div>

        <div className="mb-4 space-y-2">
          <Skeleton className="h-5 w-full rounded-md" />
          <Skeleton className="h-5 w-2/3 rounded-md" />
        </div>

        <div className="mt-auto flex items-center justify-between pt-4">
          <Skeleton className="h-7 w-24 rounded-md" />
          <Skeleton className="h-10 w-10 rounded-full shadow-sm" />
        </div>
      </div>
    </div>
  );
};
