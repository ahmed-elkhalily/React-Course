import { Footer } from '@/components/custom/footer';
import { Navbar } from '@/components/custom/navbar';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { Container } from '@/components/custom/container';

const RootLayout = () => (
  <Container className="flex h-full flex-col">
    <Navbar />
    <div className="flex items-center">
      <Outlet />
    </div>
    <Footer />
  </Container>
);

export const Route = createRootRoute({ component: RootLayout });
