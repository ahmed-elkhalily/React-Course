import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { signupFields, signupSchema } from '../schemas/signup.schema';
import { AuthField } from '../components/auth-field';
import { motion } from 'framer-motion';
import { auth } from '@/configs/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from '@tanstack/react-router';

export const SignupPage = () => {
  const navigate = useNavigate();
  const form = useForm({
    resolver: zodResolver(signupSchema),
  });

  function onSubmit(data: z.infer<typeof signupSchema>) {
    const { email, password } = data;
    createUserWithEmailAndPassword(auth, email, password).then(
      (userCredential) => {
        const user = userCredential.user;
        localStorage.setItem('user', JSON.stringify(user));
        navigate({ to: '/' });
      }
    );
  }

  return (
    <Form {...form}>
      <motion.form
        initial={{ opacity: 0, x: 0 }}
        animate={{ opacity: 1, x: 20 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex-1 space-y-4"
      >
        {signupFields.map((item) => {
          return (
            <AuthField
              name={item.name}
              label={item.label}
              placeholder={item.placeholder}
              control={form.control}
              key={item.name}
              type={item.type}
            />
          );
        })}

        <Button type="submit" className="w-full py-6">
          Sign Up
        </Button>
      </motion.form>
    </Form>
  );
};
