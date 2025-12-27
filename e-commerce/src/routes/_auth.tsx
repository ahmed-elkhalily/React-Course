import { Container } from '@/components/custom/container';
import { WelcomeSec } from '@/modules/auth/components/welcom-sec';
import { createFileRoute, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/_auth')({
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
