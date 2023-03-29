import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function Home() {
  const router = useRouter()
  const [roomName, setRoomName] = useState('')

  const joinRoom = () => {
    router.push(`/room/${roomName || Math.random().toString(36).slice(2)}`)
  }

  return (
    <main className="w-screen h-screen flex items-center justify-center">
      <div className="p-12 rounded-2xl bg-zinc-700 flex flex-col gap-2 items-center">
        <i className="mdi mdi-account-group text-6xl" />
        <h1 className="text-4xl text-white">Lets join a room!</h1>

        <input onChange={(e) => setRoomName(e.target.value)} value={roomName} className="border rounded-md h-10 text-black p-2 mt-6" />

        <button
          onClick={joinRoom}
          type="button"
          className="
          bg-yellow-600 
          text-white 
          px-8
          py-4 
          text-xl
          font-bold
          rounded-xl
          mt-2
        ">Join Room
        </button>
      </div>
    </main>
  )
}