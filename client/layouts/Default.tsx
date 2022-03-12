import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
  Outlet,
} from 'react-router-dom';
import Header from '@/components/Header';

function Default() {
  return (
    <div className="bg-primary-100 min-h-screen h-full block pb-20">
      <Header />
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Default;
