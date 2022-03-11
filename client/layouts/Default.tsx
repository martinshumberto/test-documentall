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
    <div className="bg-primary-100 min-h-screen">
      <Header />
      <Outlet />
    </div>
  );
}

export default Default;
