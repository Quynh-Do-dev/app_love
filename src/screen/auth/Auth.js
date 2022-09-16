import Login from "./Login";
import Register from "./Register";
import ForgotPassword from "./ForgotPassword";
import {useState} from "react";

function Auth(){
  const authPage=[
    { hash:"#login",component:<Login/>},
    { hash: "#register", component: <Register/>},
    { hash: "#forgotPassword", component: <ForgotPassword/>}
  ]
  const [ auth , setAuth] =useState(() => {
    const hash = window.location.hash;
    if(!["#login","#register","#forgotPassword"].includes(hash)){
      return false
    }
    return  authPage.find((page) => page.hash === hash)
  })

  window.onhashchange = () =>{
    const hash = window.location.hash;
    const currentPage = authPage.find((page) => page.hash === hash) ?? "#login";
          setAuth(currentPage)
    }
  return (
      <div className="auth">
        {
          auth ? auth?.component :<Login/>
        }
      </div>
  )
}
export default Auth