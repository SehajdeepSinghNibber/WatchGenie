import { useState } from 'react'
import { Link } from 'react-router-dom'

const SignUpPage = () => {

  const [email,setEmail] = useState<string>("")
  const [username,setUsername] = useState<string>("")
  const [password,setPassword] = useState<string>("")

  const handleSignUp = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  console.log(email, username, password);
};

  return (
    <div className="h-screen w-full hero-bg">
      <header className="max-w-6xl mx-auto flex items-center justify-between p-2">
        <Link to={"/"}>
        <img src="/watchGenieLogo.png" alt="logo" className='w-52' />
        </Link>
      </header>
      
      <div className='flex justify-center items-center mt-10 mx-3'>
        <div className='w-full max-w-md p-8 space-y-6 bg-black/60 rounded-lg shadow-md'>
          <h1 className='text-center text-white text-2xl font-bold mb-4'>
            Sign Up
          </h1>
          <form className="space-y-4" onSubmit={handleSignUp}>
            <div>
              <label htmlFor="email" 
              className='text-sm font-medium text-gray-300 block'>
                Email
              </label>
              <input type="email" 
              className='w-full px-3 py-2 mt-1 border border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:ring'
              placeholder='JohnDoe@gmail.com'
              id="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              />
              <label htmlFor="username" 
              className='text-sm font-medium text-gray-300 block'>
                username
              </label>
              <input type="text" 
              className='w-full px-3 py-2 mt-1 border border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:ring'
              placeholder='Username'
              id="username"
              value={username}
              onChange={(e)=>setUsername(e.target.value)}
              />
              <label htmlFor="password" 
              className='text-sm font-medium text-gray-300 block'>
                Password
              </label>
              <input type="password" 
              className='w-full px-3 py-2 mt-1 border border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:ring'
              placeholder='********'
              id="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              />
            </div>
            <button className='w-full py-2 bg-sky-500 text-white font-semibold rounded-md hover:bg-sky-700'>
              Sign Up
            </button>
          </form>
          <div className='text-center text-gray-400'>
            Already a member?{" "}
            <Link to={"/login"} className='text-sky-500 hover:underline'>
            Sign in
            </Link>
          </div>
        </div>
      </div>

    </div>
  )
}

export default SignUpPage
