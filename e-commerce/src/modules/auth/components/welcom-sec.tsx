import { Link, useLocation } from '@tanstack/react-router';
export const WelcomeSec = () => {
  const location = useLocation();
  const isSignup = location.pathname === '/signup';
  return (
    <div className="flex-1">
      <h2 className="mb-2 text-4xl font-extrabold">
        {isSignup ? 'Create an account' : 'Welcome Back'}
      </h2>
      <p className="text-lg font-medium text-zinc-500">
        {isSignup ? 'Let’s create your account' : 'Login in to your account'}
      </p>
      <div>
        <img src="/auth.png" className="max-w-full" />
      </div>
      <div className="text-base text-zinc-500">
        {isSignup ? 'Already a member' : 'First time here?'}
        <Link
          to={isSignup ? '/signin' : '/signup'}
          className="ms-1 text-black underline"
        >
          {isSignup ? 'Log In' : 'Sign Up'}
        </Link>
      </div>
    </div>
  );
};
