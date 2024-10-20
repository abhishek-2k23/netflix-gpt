import { useContext } from "react"
import { AppContext } from "../context/AppContext"
import { validate } from "../utils/validate"
import toast from "react-hot-toast"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth"
import { auth, signInWithGoogle } from "../utils/firebase"
import { addUser } from "../redux/Slice/userSlice"
import { useDispatch } from "react-redux"

const useLoginUser = ()  => {
    const dispatch = useDispatch();
    const {
        email,
        password,
        name,
        errorMessage,
        setErrorMessage,
        rememberMe,
        setRememberMe,
        isSignupForm,
        setIsSignUpForm,
        signupEmail,setSignupEmail
      } = useContext(AppContext)

     //for checkbox change
  function handleChange(e) {
    setRememberMe(!e.target.checked)
  }

  //login form submission function
  const handleSubmitForm = () => {
    //email and password validation
    const message = validate(email.current.value, password.current.value)
    setErrorMessage(message)
    if (message !== null) {
      toast.error(message);
      return;
    }

    //make the loading true

    if (isSignupForm) {
      //signup the new user
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          // update the user profile by adding name and photo
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              "https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser
              dispatch(addUser({ uid, email, displayName, photoURL }))
            })
            .catch((error) => {
              setErrorMessage(error.errorMessage)
            })
        })
        .catch((error) => {
          const errorMessage = error.message 
          if(errorMessage ===  'Firebase: Error (auth/invalid-credential)'){
            toast.error('Invalid credentials')
            setErrorMessage('Invalid credentials')
          }else if(errorMessage === 'Firebase: Error (auth/email-already-in-use).'){
            toast.error('Email is alredy in use')
            setErrorMessage('Email is already in use')
          }else{
            setErrorMessage(errorMessage)
          }
        })
    } else {
      // login the user
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
          if(errorCode ===  'auth/invalid-credential'){
            toast.error('Invalid credentials')
            setErrorMessage('Invalid credentials')
          }else{
            setErrorMessage(errorMessage)

          }
        })
    }
  }

  //login with google account
  const handleGoogleLogin = () => {
    signInWithGoogle()
    .catch(e => console.log(e))
  }

  return { handleChange, handleSubmitForm, handleGoogleLogin };
}

export default useLoginUser;