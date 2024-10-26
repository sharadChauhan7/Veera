import { useContext, createContext } from 'react';
import { useStorageState } from './useStorageState';
import axios from 'axios'
import { registerIndieID, unregisterIndieDevice } from 'native-notify';
const AuthContext = createContext({
  signIn: () => null,
  signOut: () => null,
  session: null,
  isLoading: false,
});

// This hook can be used to access the user info.
export function useSession() {
  const value = useContext(AuthContext);
  if (process.env.NODE_ENV !== 'production') {
    if (!value) {
      throw new Error('useSession must be wrapped in a <SessionProvider />');
    }
  }

  return value;
}

export function SessionProvider({ children }) {
  const [[isLoading, session], setSession] = useStorageState('session');

  return (
    <AuthContext.Provider
      value={{
        signIn: async (data) => {
          // Perform sign-in logic here
          console.log(data);
          
          let result = await axios.post('http://172.16.149.176:3000/api/auth/login',data);  
          if(result.status!=200){
              console.log(result.data.message);
              throw new Error(result.data.message);
          }
          console.log("Api Result ctx->"+result.data);
          console.log("ctx->"+data.email);
          setSession(result.data.token);
        },
        signUp: async (data) => {
              console.log('Sending signUp');
              console.log(data);
            // Call post request to local host 3000
            let result = await axios.post('http://172.16.149.176:3000/api/auth/signup',data);  
            if(result.status!=200){
              console.dir(result.data.message);
                throw new Error(result.data.message);
            }
          
            setSession(result.data.token);
            // await registerIndieID(data.email, 23095, 't7U6tMbwevUKc9gC7Eddsf');
            console.log("Api Result ctx->53"+result.data);
        },
        signOut: async () => {
          // let userData = await axios.post('http://172.16.149.176:3000/api/auth/user',{token:session});
          // userData = userData.data.user;
          // console.log("ctx->59"+userData.email); 
          setSession(null);
          return;
        },
        session,
        isLoading,
      }}>
      {children}
    </AuthContext.Provider>
  );
}

