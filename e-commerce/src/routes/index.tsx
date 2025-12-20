import { createFileRoute } from '@tanstack/react-router';
import { Index } from '@/modules/index';

export const Route = createFileRoute('/')({
  component: Index,
});
