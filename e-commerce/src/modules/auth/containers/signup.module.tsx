import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { signupFields, signupSchema } from '../schemas/signup.schema';
import { AuthField } from '../components/auth-field';

export const SignupPage = () => {
  const form = useForm({
    resolver: zodResolver(signupSchema),
    mode: 'onBlur',
  });
  function onSubmit(data: z.infer<typeof signupSchema>) {
    console.log(data);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex-1 space-y-4">
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
      </form>
    </Form>
  );
};
