'use client'
import { useCall, useCallStateHooks } from '@stream-io/video-react-sdk'
import React from 'react'
import { Button } from './button'
import { useRouter } from 'next/navigation'

const EndCallButton = () => {
    const call = useCall()
    const router = useRouter()

    const { useLocalParticipant } = useCallStateHooks()
    const LocalParticipant = useLocalParticipant()

    const isMeetiOwner = LocalParticipant &&  // to check if we are the meeting owner
    call?.state.createdBy && LocalParticipant.userId === 
    call.state.createdBy.id;

    if(!isMeetiOwner) return null // if not the meeting owner we will not show the button 
  return (
    <Button onClick={async () => {
        await call.endCall()
        router.push('/')
    }} className='bg-red-500'>
        End Call for Everyone
    </Button>
  )
}

export default EndCallButton