import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import Register from '../../components/register/Register';

export default function RegisterPage() {
  const { isLoggedIn } = useAuth();

  return (
    <>
      {isLoggedIn ? <Navigate to="/contacts" replace={true} /> : <Register />}
    </>
  );
}
