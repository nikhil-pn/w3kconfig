"use client"
import dynamic from 'next/dynamic'
import React from 'react'

const Timer = dynamic(() => import('../../components/Timer/timer'), {
  ssr: false,
  loading: () => <p>Loading timer...</p>
})

function TimerPage() {
  return (
    <div>
      <Timer />
    </div>
  )
}

export default TimerPage