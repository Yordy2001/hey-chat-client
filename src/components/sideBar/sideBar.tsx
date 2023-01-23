import React from 'react'
import { ListItemAvatar, Avatar } from '@mui/material'
import HomeBar from '../homeBar'
import { IUser } from '../../interfaces/user.interface'

import '../sideBar/sideBar.css'

type Storage = {
    tel?: string,
    isAuthtenicate: boolean
}

type props = {
    setIsChat: any
    friends: any
}

const SideBar = ({ friends, setIsChat }: props) => {

    // delete data when is null
    const friend = friends.filter((data: IUser) => data != null)

    return (
        <div className='side-bar-container'>
            <HomeBar></HomeBar>
            <div className='chats-content'>
                <div className='friend-list'>
                    {
                        friend?.map((data: IUser) => {
                            return <div className='chats-name-msg' onClick={() => {
                                setIsChat({ isChat: true, chatId: data.tel })
                            }}>
                                <ListItemAvatar>
                                    <Avatar alt={data?.name + `portada`} src={data?.portada}>
                                    </Avatar>
                                </ListItemAvatar>
                                <div className='friend-name-status'>
                                    <p>{data?.name}</p>
                                    <p>{data?.isActive ? '🟢online' : '🔴offline'}</p>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div >
    )
}

export default SideBar
