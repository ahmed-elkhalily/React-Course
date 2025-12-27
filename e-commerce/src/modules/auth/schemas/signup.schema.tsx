import { z } from 'zod';
import type { Name } from '../types';

export const signupSchema = z.object({
  fullName: z
    .string({
      required_error: 'Full Name Field is required',
    })
    .min(3, 'Full Name must be at minimum 3 characters'),
  email: z
    .string({
      required_error: 'Email Field is required',
    })
    .email('Email Field not valid, Enter Valid Email!'),
  // search on Zod For it
  // has at least uppercase char
  // has at least special char
  password: z
    .string({
      required_error: 'Password Field is required',
    })
    .min(8, 'Password must be at minimum 8 characters'),
});

export const signupFields: {
  name: Name;
  label: string;
  placeholder: string;
  type?: 'password' | 'text';
}[] = [
  {
    name: 'fullName',
    label: 'Full Name',
    placeholder: 'Please, Enter Full Name',
  },
  {
    name: 'email',
    label: 'Email',
    placeholder: 'Please, Enter Email',
  },
  {
    name: 'password',
    label: 'Password',
    placeholder: 'Please, Enter Password',
    type: 'password',
  },
];
