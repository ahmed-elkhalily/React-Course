import { cn } from '@/lib/utils';

export const Categories = ({
  title,
  categories,
  circle = false,
}: {
  title: React.ReactNode;
  categories: Array<{ src: string; alt: string; title: string }>;
  circle?: boolean;
}) => {
  return (
    <div className="w-full py-8">
      {title}
      <div className="flex w-full gap-4">
        {categories.map((category) => (
          <CategoryContainer
            key={category.src}
            category={category}
            circle={circle}
          />
        ))}
      </div>
    </div>
  );
};

const CategoryContainer = ({
  category,
  circle = false,
}: {
  category: {
    src: string;
    alt: string;
  };
  circle?: boolean;
}) => {
  const { src, alt } = category;
  return (
    <div
      className={cn('relative bg-gray-200', {
        'h-24 w-1/5 rounded-md': !circle,
        'h-52 w-52 rounded-full': circle,
      })}
    >
      <img
        src={src}
        alt={alt}
        className="absolute start-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform"
      />
    </div>
  );
};
