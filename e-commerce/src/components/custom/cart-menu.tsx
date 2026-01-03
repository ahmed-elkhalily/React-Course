import { useState, useRef, useEffect } from 'react';
import { ShoppingBasket, Trash2, X } from 'lucide-react';
import { motion, AnimatePresence, removeItem } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '@/store';
import { removeItemFromCart } from '@/store/cart-slice';

export const CartMenu = () => {
  const { quantity, items: products } = useSelector(
    (state: RootState) => state.cart
  );
  const disptach = useDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  function removeFromCart(id: number) {
    disptach(removeItemFromCart(id));
  }
  // Close on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  const totalPrice = products.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  return (
    <div className="relative z-50" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex cursor-pointer items-center text-lg font-semibold text-zinc-500 transition-colors hover:text-zinc-800"
      >
        <ShoppingBasket className="me-1" />
        Cart
        {quantity > 0 && (
          <span className="ml-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs text-white">
            {quantity}
          </span>
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full right-0 mt-2 w-80 overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-xl sm:w-96"
          >
            <div className="flex items-center justify-between border-b border-zinc-100 bg-white p-4">
              <h3 className="font-semibold text-zinc-900">
                My Cart ({quantity})
              </h3>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            <div className="max-h-[60vh] space-y-4 overflow-y-auto bg-white p-4">
              {products.length === 0 ? (
                <div className="py-8 text-center text-zinc-500">
                  Your cart is empty
                </div>
              ) : (
                products.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="h-16 w-16 flex-shrink-0 rounded-md border border-zinc-200 bg-zinc-50 p-1">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-between">
                      <div className="flex justify-between gap-2">
                        <h4 className="line-clamp-2 text-sm font-medium text-zinc-900">
                          {item.title}
                        </h4>
                        <button
                          className="text-zinc-400 transition-colors hover:text-red-500"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                      <div className="flex items-end justify-between">
                        <span className="text-sm text-zinc-500">
                          Qty: {item.quantity}
                        </span>
                        <span className="text-sm font-semibold text-zinc-900">
                          ${(item.quantity * item.price).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {products.length > 0 && (
              <div className="border-t border-zinc-100 bg-zinc-50 p-4">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-zinc-600">Total</span>
                  <span className="text-lg font-bold text-zinc-900">
                    ${totalPrice.toFixed(2)}
                  </span>
                </div>
                <Button className="w-full" onClick={() => setIsOpen(false)}>
                  Checkout
                </Button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
