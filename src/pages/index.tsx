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
    <main>
      <h1>Lets join a room!</h1>
      <input onChange={(e) => setRoomName(e.target.value)} value={roomName} className="border" />
      <button onClick={joinRoom} type="button" className="">Join Room</button>
    </main>
  )
}