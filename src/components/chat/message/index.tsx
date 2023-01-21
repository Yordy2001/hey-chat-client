import React from 'react'

import "./index.css"

type Props = {}

export const MessageBox = (props: Props) => {
    return (
        <div className='message-box'>
            <div className='message-content'>
                <div className='msg-block'>
                    <p className='message user-msg'>Hola</p>
                </div>
                <div className='msg-block'>
                    <p className='message friend-msg'>Hola</p>
                </div>
            </div>
        </div>
    )
}
