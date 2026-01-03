import { User } from 'lucide-react';
import { Container } from './container';
import { Link, useLocation } from '@tanstack/react-router';
import { useNavigate } from '@tanstack/react-router';
import { auth } from '@/configs/firebase';
import { signOut } from 'firebase/auth';
import { Button } from '../ui/button';
import { useState } from 'react';
import { CartMenu } from './cart-menu';

export const Navbar = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const user = localStorage.getItem('user');

  function logoutUser() {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setIsLoading(false);
        localStorage.removeItem('user');
        navigate({
          to: '/signin',
        });
      })
      .catch((error) => {
        setIsLoading(false);
      });
  }

  return (
    <div className="border-b border-b-zinc-200 py-8">
      <Container className="flex justify-between">
        <Link to="/">
          <img src="/logo.png" />
        </Link>
        <ul className="flex gap-x-6">
          <li>
            <CartMenu />
          </li>
          {user ? (
            <li>
              <Button onClick={logoutUser} disabled={isLoading}>
                <User className="me-1" />
                {isLoading ? 'Log Out ...' : 'Log Out'}
              </Button>
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
