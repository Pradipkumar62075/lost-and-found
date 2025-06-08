"use client"
import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const Dashboard = () => {
  const {data: session} = useSession()

  // useEffect(() => {
  //   if (!session) {
  //     const router = useRouter()
  //     router.push("/login")
  //   }
  // }, [session]);
  

  if(!session){
    const router = useRouter()
    router.push("/")
  }
  return (
    <div>
      this is dashboard
      <button onClick={signOut}>signOut</button>
    </div>
  )
}

export default Dashboard ;
