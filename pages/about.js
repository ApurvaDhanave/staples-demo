"use client";
import React from "react";
import { signIn } from "next-auth/react";

function About() {
  const handleGoogleSignIn = () => {
    signIn("google");
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleGoogleSignIn}>Sign in with Google</button>
    </div>
  );
}

export default About;
