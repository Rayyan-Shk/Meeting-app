"use client"
import Loader from '@/components/ui/Loader';
import MeetingRoom from '@/components/ui/MeetingRoom';
import MeetingSetup from '@/components/ui/MeetingSetup';
import { useGetCallById } from '@/hooks/useGetCallById';
import { useUser } from '@clerk/nextjs'
import { StreamCall, StreamTheme } from '@stream-io/video-react-sdk';
import { useParams } from 'next/navigation';
import React, { useState } from 'react'

const Meeting = ({}: {params: {id: string}}) => {

  const { isLoaded } = useUser();
  const [ isSetupComplete, setIsSetupComplete ] = useState(false);
  const { id } = useParams();
  const { call, isCallLoading } = useGetCallById(id)

  if(!isLoaded || isCallLoading) return <Loader/>

  return (
    <main className='h-screen w-full'>
      <StreamCall call={call}>
        <StreamTheme>
          {!isSetupComplete ? ( // this is if and else
            <MeetingSetup setIsSetupComplete= {setIsSetupComplete}/>
          ):(
            <MeetingRoom/>
          )}
        </StreamTheme>
      </StreamCall>
    </main>
  )
}

export default Meeting