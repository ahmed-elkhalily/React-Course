import { Navbar } from '@/components/custom/navbar';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { Container } from '@/components/custom/container';
import { NotFound } from '@/components/custom/not-found';

const RootLayout = () => (
  <Container className="flex h-full flex-col">
    <Navbar />
    <div className="flex items-center">
      <Outlet />
    </div>
  </Container>
);

export const Route = createRootRoute({
  component: RootLayout,
  notFoundComponent: NotFound,
});
