import React from 'react'
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Link } from 'react-router-dom';


export default function SignUp() {
  return (
    <main className='main-h-screen mt-20'>
     <div className='flex flex-col md:flex-row mx-auto max-w-3xl p-3 md:items-center gap-7'>
        {/* left */}
        <section className='flex-1'>
          <div href="https://flowbite-react.com" className="self-center whitespace-nowrap text-4xl  font-bold dark:text-white" >
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-pink-500 to-blue-500 rounded-lg text-white">Atibyan</span>Blog
            <p className='text-sm mt-5 font-normal'>Welcome to Atibyan Blog.Sign up to get the latest gist and information unfiltered</p>
  
          </div>
        </section>
  
        {/* right */}
  
        <section className='flex-1'>
          <form className="flex max-w-md flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="username" value="Your username" />
              </div>
              <TextInput id="username" type="text" placeholder="enter a username" required />
            </div>
  
            <div className="mb-2 block">
                <Label htmlFor="email" value="Your email" />
              </div>
              <div>
              <TextInput id="email" type="text" placeholder="enter an email" required />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password1" value="Your password" />
              </div>
              <TextInput id="password1" type="password" required />
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember">Remember me</Label>
            </div>
            <Button gradientDuoTone="purpleToPink"type="submit">Sign up</Button>
          </form>

          <div className='flex gap-2 mt-5 text-sm'>
            <span>Have an account?</span>
            <Link to='/sign-in' className='text-teal-400'>
            Sign in
            </Link>
            </div>
  
        </section>
     </div>

    </main>
  )
}
