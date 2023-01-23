import React, { useEffect, useState, useContext } from 'react';
import SideBar from '../../components/sideBar/sideBar';
import CssBaseline from '@mui/material/CssBaseline';

import { FriendsController } from '../../helpers/api/friends.controller';
import Chat from '../../components/chat';
import { IUser } from '../../interfaces/user.interface';
import './home.css'

const friendsController = new FriendsController()
export default function Home() {
    const [friends, setFriends] = useState<IUser[]>([])
    const [chat, setChat] = useState({
        isChat: false,
        chatId: ''
    })

    const getData = async () => {
        const data = await friendsController.getFriends()
        setFriends(data)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <React.Fragment>
            <CssBaseline />
            <div className='main'>
                <SideBar friends={friends} setIsChat={setChat} />
                <Chat isChat={chat.isChat} setIsChat={setChat} chatId={chat.chatId}/>
            </div>
        </React.Fragment >
    );
}
