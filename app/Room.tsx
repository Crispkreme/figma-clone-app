// @ts-nocheck
"use client"

import React, { ReactNode } from 'react'
import { RoomProvider } from "@/liveblocks.config";
import { ClientSideSuspense } from '@liveblocks/react'
import { LiveMap } from '@liveblocks/client';
import Loader from '@/components/Loader';

const Room = ({ children }: { children: ReactNode}) => {
  return (
    <RoomProvider id='my-room' 
      initialPresence={{ 
        cursor: null,
        message: null,
        cursorColor: null,
        editingText: null
      }}
      initialStorage={{ 
        canvasObjects: new LiveMap(),
      }}
    >
      <ClientSideSuspense fallback={<Loader />}>
        {() => children}
      </ClientSideSuspense>
    </RoomProvider>
  )
}

export default Room