import { Form } from '@/components/ui/form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { signinFields, signinSchema } from '../schemas/signin.schema';
import { AuthField } from '../components/auth-field';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export const SigninPage = () => {
  const form = useForm({
    resolver: zodResolver(signinSchema),
  });
  function onSubmit(data: z.infer<typeof signinSchema>) {
    console.log(data);
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
        <Button className="w-full">Sign In</Button>
      </motion.form>
    </Form>
  );
};
