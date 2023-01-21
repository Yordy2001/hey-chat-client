import React, { useState } from 'react'
import SendIcon from '@mui/icons-material/Send';
import KeyboardVoiceSharpIcon from '@mui/icons-material/KeyboardVoiceSharp';

import "./style.css"
import { Fab } from '@mui/material';

type Props = {}

const MessageField = (props: Props) => {
  const [isWriting, setIsWriting] = useState(false)

  return (
    <div className='input-field-cont'>
      <br />
      <div className='input-btn'>
        <input type="text" />
        <Fab color="primary" aria-label="send">
          { isWriting ? <SendIcon /> :< KeyboardVoiceSharpIcon /> } 
        </Fab>
      </div>
    </div>
  )
}

export default MessageField
