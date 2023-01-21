import { ListItemAvatar, Avatar } from '@mui/material'
import React from 'react'
import HomeBar from '../homeBar'
import '../sideBar/sideBar.css'

type Props = {}

const SideBar = (props: Props) => {
    return (
        <div className='side-bar-container'>
            <HomeBar></HomeBar>
            <div className='chats-content'>
                <div className='friend-list'>
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="https://res.cloudinary.com/dmtajoucp/image/upload/v1672868483/hey/tayzxqw6zedoq6ahsts5.png">
                        </Avatar>
                    </ListItemAvatar>
                    <div className='chats-name-msg'>
                        <p>Yordy</p>
                        <p>online</p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default SideBar
