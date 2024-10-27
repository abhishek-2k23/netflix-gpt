import { createContext, useState, useRef} from "react";

export const AppContext = createContext();
const AppContextProvider = ({children}) => {
    const email = useRef()
    const password = useRef()
    const name = useRef()
  
    const [errorMessage, setErrorMessage] = useState(null)
    const [signupForm, setSignUpForm] = useState(false)
    
  const [rememberMe, setRememberMe] = useState(true)
  const [isSignupForm, setIsSignUpForm] = useState(true)
  const [signupEmail, setSignupEmail] = useState(null)


    const value = {
        email,password,name,
        errorMessage,setErrorMessage,
        signupForm,setSignUpForm,
        rememberMe, setRememberMe,
        isSignupForm, setIsSignUpForm,
        signupEmail, setSignupEmail
    }

    return (
        <AppContext.Provider value={value}>
          {children}
        </AppContext.Provider>
      );

}
export default AppContextProvider;