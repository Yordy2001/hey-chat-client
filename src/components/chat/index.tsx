import React, { SetStateAction, useState, useContext, useEffect } from 'react'
import { SocketContext } from '../../context/socket'
import ChatBar from './chat-bar'
import { MessageBox } from './message'
import MessageField from './messageField'
import { tel } from '../../utils/storage'
import { FriendsController } from '../../helpers/api/friends.controller'
import { IUser } from '../../interfaces/user.interface'


type Props = {
  isChat: boolean
  setIsChat: any
  chatId: string
}

const userApi = new FriendsController()
export default function Chat({ isChat, setIsChat, chatId }: Props) {
  const socket = useContext(SocketContext)

  const [messages, setMessages] = useState<IUser[]>([])
  const [user, setUser] = useState([])

  const getUser = async () => {
    const user = await userApi.getFriend(chatId)
    setUser(user)
  }

  useEffect(() => {
    socket.emit('client-get-db-messages', { to: chatId, from: tel })
    getUser()
  }, [])

  // Get message from de db after join a chat
  socket.on('server-db-messages', (msg) => {
    setMessages(msg.data)
  })

  return (
    <div className='chat-container'>
      {
        isChat ?
          <React.Fragment>
            <ChatBar user={user}></ChatBar>
            <MessageBox></MessageBox>
            <MessageField></MessageField>
          </React.Fragment>
          :
          <div>
            No hay Chat
          </div>
      }
    </div>
  )
}
