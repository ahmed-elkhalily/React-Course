import { Link } from '@tanstack/react-router';
export const WelcomeSec = () => {
  return (
    <div className="flex-1">
      <h2 className="mb-2 text-4xl font-extrabold">Welcome Back</h2>
      <p className="text-lg font-medium text-zinc-500">
        Login In To Your Account
      </p>
      <div>
        <img src="/auth.png" className="max-w-full" />
      </div>
      <div className="text-base text-zinc-500">
        First time here?{' '}
        <Link to="/signin" className="text-black underline">
          Log In
        </Link>
      </div>
    </div>
  );
};
