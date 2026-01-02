import { Container } from '@/components/custom/container';
import { WelcomeSec } from '@/modules/auth/components/welcom-sec';
import { createFileRoute, Outlet, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/_auth')({
  beforeLoad: () => {
    const user = localStorage.getItem('user');
    if (user) {
      throw redirect({
        to: '/',
      });
    }
  },
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Container className="flex gap-x-11">
      <WelcomeSec />
      <div className="flex flex-1 items-center">
        <Outlet />
      </div>
    </Container>
  );
}
