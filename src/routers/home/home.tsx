import React, { useEffect, useState } from 'react';
import SideBar from '../../components/sideBar/sideBar';
import CssBaseline from '@mui/material/CssBaseline';

import './home.css'
import { FriendsController } from '../../helpers/api/friends.controller';
import { IUser } from '../../interfaces/user.interface';
import Chat from '../../components/chat';

const friendsController = new FriendsController()
export default function Home() {
    const [friends, setFriends] = useState<IUser[]>([])

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
                <SideBar friends={friends} />
                <Chat /> 
            </div>
        </React.Fragment >
    );
}
