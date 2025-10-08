import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './views/Login';
import Register from './views/Register';
import AuthLayout from './layouts/AuthLayouth';
import AppLayout from './layouts/AppLayout';
import LinkTree from './views/LinkTree';
import Profile from './views/Profile';
import HandleView from './views/HandleView';
import HandleLayout from './layouts/HandleLayout';
import NotFound from './views/NotFound';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="auth/login" element={<Login />} />
          <Route path="auth/register" element={<Register />} />
        </Route>

        <Route path="/admin" element={<AppLayout />}>
          <Route index={true} element={<LinkTree />} />
          <Route path="profile" element={<Profile />} />
        </Route>

        <Route path='/:handle' element={<HandleLayout />} >
          <Route index={true} element={<HandleView />} />
        </Route>

        <Route path='/404' element={<HandleLayout />} >
          <Route index={true} element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}