import React from 'react'

// const LoginPage = () => {
//   return (
// <div class="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat bg-[url('https://images.unsplash.com/photo-1499123785106-343e69e68db1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1748&q=80')]">
//   <div class="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
//     <div class="text-white">
//       <div class="mb-8 flex flex-col items-center">
//         <img className='rounded-full' src="/tempImg.avif" width="150" alt="" srcSet="" />
//         <h1 class="mb-2 text-2xl"> Portal</h1>
//         <span class="text-gray-300">Enter Login Details</span>
//       </div>
//       <form action="#">
//         <div class="mb-4 text-lg">
//           <input class="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" type="text" name="name" placeholder="Enter your ID" />
//         </div>

//         <div class="mb-4 text-lg">
//           <input class="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" type="Password" name="name" placeholder="password here" />
//         </div>
//         <div class="mt-8 flex justify-center text-lg text-black">
//           <button type="submit" class="rounded-3xl bg-yellow-400 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600">Login</button>
//         </div>
//       </form>
//     </div>
//   </div>
// </div>
   
//   )
// }
import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'

function LoginPage() {
  const [data, setData] = useState([])
  const supabase = createClient('https://iezfnxnaffbzfzgpnxtb.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImllemZueG5hZmZiemZ6Z3BueHRiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzcyNjc1NDcsImV4cCI6MTk5Mjg0MzU0N30.MnqeeWg3yygZk9PR4_adZm52ug9tk0ZACjQX7eUJXsY')

  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase.from('your-table').select('*')
      setData(data)
    }
    fetchData()
  }, [])

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  )
}



export default LoginPage;