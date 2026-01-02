import { Button } from '@/components/ui/button';
import { Link } from '@tanstack/react-router';
import { motion } from 'framer-motion';
import { Home, AlertCircle } from 'lucide-react';

export const NotFound = () => {
  return (
    <div className="flex min-h-[60vh] w-full flex-col items-center justify-center text-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-red-50"
      >
        <AlertCircle className="h-12 w-12 text-red-500" />
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <h1 className="mb-2 text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl">
          Page not found
        </h1>
        <p className="mb-8 text-lg text-zinc-500">
          Sorry, we couldn't find the page you're looking for.
        </p>

        <div className="flex justify-center gap-4">
          <Button asChild className="gap-2" size="lg">
            <Link to="/">
              <Home className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </motion.div>
    </div>
  );
};
