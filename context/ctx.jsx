import { useContext, createContext } from 'react';
import { useStorageState } from './useStorageState';
import axios from 'axios'
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
          
          // let result = await axios.post('https://helpme-api.onrender.com/api/auth/login',data);  
          // if(result.status!=200){
          //     console.log(result.data.message);
          //     throw new Error(result.data.message);
          // }
          // console.log("Api Result ctx->"+result.data);
          // console.log("ctx->"+data.email);
          // setSession(result.data.token);
          setSession("token");
        },
        signUp: async (data) => {
              console.log('Sending signUp req');
            // Call post request to local host 3000
            let result = await axios.post('https://helpme-api.onrender.com/api/auth/signup',data);  
            if(result.status!=200){
              console.log(result.data.message);
                throw new Error(result.data.message);
            }
            
            console.log("Api Result ctx->53"+result.data);
            setSession(result.data.token);
        },
        signOut: async () => {
        //   let userData = await axios.post('https://helpme-api.onrender.com/api/auth/user',{token:session});
        // userData = userData.data.user;
        // console.log("ctx->59"+userData.email); 
          setSession(null);
        },
        session,
        isLoading,
      }}>
      {children}
    </AuthContext.Provider>
  );
}

