import React from "react";
import AuthForm from "@/components/auth-form";
import {getLoggedInUser} from "@/lib/actions/user.actions";

const SignUp = async () => {
  const loggedIn = await getLoggedInUser();
  
  console.log(loggedIn)
  
  return (
    <section className="flex-center size-full max-sm:px-6">
      <AuthForm type="sign-up"/>
    </section>
  );
};

export default SignUp;
