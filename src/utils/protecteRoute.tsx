import { Navigate } from 'react-router-dom';

export default function PrivateRouter({ children }: any) {
  const user: any = localStorage.getItem('hey-chat');
  const {isAuthtenicate} = JSON.parse(user);
  if (!isAuthtenicate) {
    return <Navigate to="/login"></Navigate>;
  }
  return children;
}