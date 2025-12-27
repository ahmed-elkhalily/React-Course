import { SignupPage } from '@/modules/auth/containers/signup.module';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_auth/signup')({
  component: SignupPage,
});
