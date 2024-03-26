// withAuth.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { fetchUsers } from './data';

const withAuth = (WrappedComponent) => {
    const Auth = (props) => {
      const router = useRouter();
  
      useEffect(() => {
        const checkAuth = async () => {
          try {
            // Verificar la autenticación del usuario
            const user = await fetchUsers();
            if (!user) {
              // Si el usuario no está autenticado, redirige a la página de inicio de sesión
              router.replace('/'); // Redirige a la página principal de la aplicación
            }
          } catch (error) {
            console.error('Error fetching user data:', error);
            // En caso de error, también redirige a la página de inicio de sesión
            router.replace('/'); // Redirige a la página principal de la aplicación
          }
        };
  
        checkAuth();
      }, []);
  
      return <WrappedComponent {...props} />;
    };
  
    return Auth;
  };
  
  export default withAuth;