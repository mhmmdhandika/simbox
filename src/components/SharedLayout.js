import { Outlet } from 'react-router-dom';
import { Navbar } from '.';

function SharedLayout() {
  return (
    <>
      <Navbar />
      <section>
        <Outlet />
      </section>
    </>
  );
}
export default SharedLayout;
