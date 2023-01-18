import React from 'react'
import ChatBar from './chat-bars'
import { MessageBox } from './message'

type Props = {}
export default function Chat(props: Props) {
  return (
    <div className='chat-container'>
      <ChatBar></ChatBar>
      <MessageBox></MessageBox>
    </div>
  )
}
