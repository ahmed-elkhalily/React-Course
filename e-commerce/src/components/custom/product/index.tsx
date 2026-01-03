import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Product } from '@/types/product.type';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '@/store/cart-slice';

export const ProductCard = ({ product }: { product: Product }) => {
  const dispatch = useDispatch();

  function addProductToCart() {
    dispatch(addItemToCart(product));
  }

  return (
    <motion.div
      className="group flex flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm transition-all hover:shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <div className="relative flex h-64 items-center justify-center bg-gray-50 p-6">
        <img
          src={product.image}
          alt={product.title}
          className="h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-xs font-semibold tracking-wider text-zinc-500 uppercase">
            {product.category}
          </span>
        </div>

        <h3 className="mb-2 line-clamp-2 text-lg font-bold text-zinc-900 group-hover:text-blue-600">
          {product.title}
        </h3>

        <div className="mt-auto flex items-center justify-between pt-4">
          <span className="text-xl font-bold text-zinc-900">
            $ {product.price.toFixed(2)}
          </span>
          <Button
            size="icon"
            className="rounded-full shadow-md transition-transform hover:scale-105 active:scale-95"
            onClick={addProductToCart}
          >
            <ShoppingCart className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
};
