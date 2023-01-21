import React from 'react'
import ChatBar from './chat-bar'
import { MessageBox } from './message'
import MessageField from './messageField'

type Props = {}
export default function Chat(props: Props) {
  return (
    <div className='chat-container'>
      <ChatBar></ChatBar>
      <MessageBox></MessageBox>
      <MessageField></MessageField>      
    </div>
  )
}
