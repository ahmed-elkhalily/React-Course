import { ProductCard } from '@/components/custom/product';
import { ProductSkeleton } from '@/components/custom/product/loading';
import { useGetAllProducts } from '@/services/products.services';
import type { Product } from '@/types/product.type';

export const FeaturedProducts = () => {
  const { data, isLoading } = useGetAllProducts();

  if (isLoading) {
    return (
      <div
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        role="status"
        aria-label="Loading featured products"
      >
        {Array.from({ length: 8 }).map((_, i) => (
          <ProductSkeleton key={i} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {data?.map((product: Product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
};
