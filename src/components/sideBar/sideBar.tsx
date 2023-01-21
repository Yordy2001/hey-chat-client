import React from 'react'
import { ListItemAvatar, Avatar } from '@mui/material'
import HomeBar from '../homeBar'
import '../sideBar/sideBar.css'
import { IUser } from '../../interfaces/user.interface'


const SideBar = ({ friends }: any) => {

    // delete data when is null
    const friend = friends.filter((data: IUser) => data != null)

    return (
        <div className='side-bar-container'>
            <HomeBar></HomeBar>
            <div className='chats-content'>
                <div className='friend-list'>
                    {
                        friend?.map((data: IUser) => {
                            return <div className='chats-name-msg'>
                                <ListItemAvatar>
                                    <Avatar alt={data?.name + `por`} src={data?.portada}>
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
