import { ShoppingBasket, User } from 'lucide-react';
import { Container } from './container';
import { Link, useLocation } from '@tanstack/react-router';
import { useNavigate } from '@tanstack/react-router';

export const Navbar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const user = localStorage.getItem('user');

  function logoutUser() {
    localStorage.removeItem('user');
    navigate({
      to: '/signin',
    });
  }

  return (
    <div className="border-b border-b-zinc-200 py-8">
      <Container className="flex justify-between">
        <Link to="/">
          <img src="/logo.png" />
        </Link>
        <ul className="flex gap-x-6">
          <li className="flex text-lg font-semibold text-zinc-500">
            <ShoppingBasket className="me-1" />
            Cart
          </li>
          {user ? (
            <li>
              <button
                onClick={logoutUser}
                className="flex text-lg font-semibold text-zinc-500"
              >
                <User className="me-1" />
                Logout
              </button>
            </li>
          ) : (
            <>
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
            </>
          )}
        </ul>
      </Container>
    </div>
  );
};
