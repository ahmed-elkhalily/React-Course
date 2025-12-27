import { ShoppingBasket, User } from 'lucide-react';
import { Container } from './container';
import { Link, useLocation } from '@tanstack/react-router';

export const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <div className="border-b border-b-zinc-200 py-8">
      <Container className="flex justify-between">
        <Link to="/">
          <img src="/logo.png" />
        </Link>
        <ul className="flex gap-x-6">
          {pathname !== '/signin' && (
            <li>
              <Link
                to="/signin"
                className="flex text-lg font-semibold text-zinc-500"
              >
                <User className="me-1" />
                Sign Up / Sign In
              </Link>
            </li>
          )}

          <li className="flex text-lg font-semibold text-zinc-500">
            <ShoppingBasket className="me-1" />
            Cart
          </li>
        </ul>
      </Container>
    </div>
  );
};
