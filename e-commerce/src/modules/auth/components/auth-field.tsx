import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import type { Control } from 'react-hook-form';
import type z from 'zod';
import type { signupSchema } from '../schemas/signup.schema';
import type { Name } from '../types';

type FieldInputProps = {
  control: Control<z.infer<typeof signupSchema>>;
  label: string;
  name: Name;
  placeholder: string;
  type?: 'text' | 'password';
};

export const AuthField = ({
  control,
  label,
  name,
  placeholder,
  type = 'text',
}: FieldInputProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-base font-bold">{label}</FormLabel>
          <FormControl>
            <Input
              className="border-none bg-black/5 px-2 py-6 text-sm text-zinc-700"
              placeholder={placeholder}
              type={type}
              {...field}
            />
          </FormControl>
          <FormMessage className="text-xs" />
        </FormItem>
      )}
    />
  );
};
