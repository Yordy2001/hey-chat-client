import React, { useEffect, useState } from 'react';
import HomeBar from '../../components/homeBar';
import CssBaseline from '@mui/material/CssBaseline';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';

import './home.css'
import { FriendsController } from '../../helpers/friends.controller';
import { IUser } from '../../interfaces/user.interface';


const friendsController = new FriendsController()
export default function Home() {
    const [friends, setFriends] = useState<IUser[]>([])

    const getData = async () => {
        const data = await friendsController.getFriends()
        setFriends(data)
        console.log(data);
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <React.Fragment>
            <HomeBar />
            <CssBaseline />
            <div className='main'>
                <div className='friends-container'>
                    <div className='chat-route'>

                        <div className='chats-content'
                        >
                            <ListItemAvatar>
                                <Avatar alt="Remy Sharp" src="https://res.cloudinary.com/dmtajoucp/image/upload/v1672868483/hey/tayzxqw6zedoq6ahsts5.png">
                                </Avatar>
                            </ListItemAvatar>

                            <div className='chats-name-msg'>
                                <h3>"each?.name"</h3>
                            </div>

                            <div className='chats-content-right'>
                                <p>each?.isActive ? "online" : "offline"</p>
                            </div>
                        </div>
                        <Divider variant="inset" component="li" />
                    </div>
                </div>
            </div>

            <div className='tainer'>

            </div>

        </React.Fragment >
    );
}