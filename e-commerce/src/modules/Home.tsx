import { Categories } from '@/components/custom/categories';
import { Button } from '@/components/ui/button';
import { BRANDS, CATEGORIES } from '@/const/categories';
import { FeaturedProducts } from './featured-products';
export const Home = () => {
  return (
    <div className="w-full space-y-12 pb-12">
      <Categories
        title={
          <div className="mb-4 text-2xl font-extrabold text-zinc-800">
            SHOP BY BRANDS
          </div>
        }
        categories={BRANDS}
      />
      <Categories
        title={
          <div className="mb-4 flex items-center justify-between text-2xl font-extrabold">
            <div className="text-zinc-800">
              SHOP From
              <span className="ms-2 text-yellow-500">Top Categories</span>
            </div>
            <Button>View All</Button>
          </div>
        }
        categories={CATEGORIES}
        circle={true}
      />
      <FeaturedProducts />
    </div>
  );
};
