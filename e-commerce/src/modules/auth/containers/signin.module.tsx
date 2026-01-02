import { Form } from '@/components/ui/form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { signinFields, signinSchema } from '../schemas/signin.schema';
import { AuthField } from '../components/auth-field';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { auth } from '@/configs/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from '@tanstack/react-router';
import { useState } from 'react';
import { Alert, AlertTitle } from '@/components/ui/alert';
import { AlertCircleIcon } from 'lucide-react';

export const SigninPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const navigate = useNavigate();
  const form = useForm({
    resolver: zodResolver(signinSchema),
  });
  function onSubmit(data: z.infer<typeof signinSchema>) {
    setIsLoading(true);
    const { email, password } = data;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const { user } = userCredential;
        // save user data in local storage
        localStorage.setItem('user', JSON.stringify(user));
        // loading while signin
        setIsLoading(false);
        // navigate to home page
        navigate({ to: '/' });
      })
      .catch((error) => {
        const { message } = error as { message: string; code: string };
        console.log(error.message);
        setErrorMsg(message);
        setIsLoading(false);
      });
  }
  return (
    <Form {...form}>
      <motion.form
        initial={{ opacity: 0, x: 0 }}
        animate={{ opacity: 1, x: -20 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex-1 space-y-4"
      >
        {signinFields.map((field) => {
          return <AuthField {...field} control={form.control} />;
        })}
        {errorMsg && (
          <Alert variant="destructive">
            <AlertCircleIcon />
            <AlertTitle>{errorMsg}</AlertTitle>
          </Alert>
        )}
        <Button className="w-full" disabled={isLoading}>
          {isLoading ? (
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
              <span>Signing In...</span>
            </div>
          ) : (
            'Sign In'
          )}
        </Button>
      </motion.form>
    </Form>
  );
};
