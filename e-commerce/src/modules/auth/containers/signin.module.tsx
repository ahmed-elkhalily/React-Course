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

export const SigninPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const form = useForm({
    resolver: zodResolver(signinSchema),
  });
  function onSubmit(data: z.infer<typeof signinSchema>) {
    setIsLoading(true);
    const { email, password } = data;
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
      const { user } = userCredential;
      // save user data in local storage
      localStorage.setItem('user', JSON.stringify(user));
      // loading while signin
      setIsLoading(false);
      // navigate to home page
      navigate({ to: '/' });
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
        <Button className="w-full" disabled={isLoading}>
          Sign In
        </Button>
      </motion.form>
    </Form>
  );
};
