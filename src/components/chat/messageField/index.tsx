import React, { FormEventHandler, useState } from 'react'
import SendIcon from '@mui/icons-material/Send';
import KeyboardVoiceSharpIcon from '@mui/icons-material/KeyboardVoiceSharp';

import "./style.css"
import { Fab } from '@mui/material';

type Props = {}

const MessageField = (props: Props) => {
  const [isWriting, setIsWriting] = useState(false)
  const [inputValue, setinputValue] = useState('')

  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setinputValue(e.currentTarget.value);
    if (!inputValue.trim()) {
      setIsWriting(true)
    }
  }



  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <div className='input-field-cont'>
      <br />
      <div className='input-btn'>
        <form className='message-form' onSubmit={handleSubmit}>
          <input type="text" name='message' onChange={handleChange} value={inputValue} />
          <Fab color="primary" aria-label="send">
            {isWriting
              ?
              <SendIcon color="primary" />
              :
              < KeyboardVoiceSharpIcon />}
          </Fab>
        </form>
      </div>
    </div>
  )
}

export default MessageField
