"use client"
import dynamic from 'next/dynamic'
import React from 'react'

const LeafletMap = dynamic(() => import('@/components/Map/LeafletMap'), {
  ssr: false,
  loading: () => <p>Loading map...</p>
})

function Map() {
  return (
    <div>
      <LeafletMap />
    </div>
  )
}

export default Map