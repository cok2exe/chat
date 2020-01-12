import React, {useState} from 'react'
import io from 'socket.io-client'

const App = () => {
  const [username, setUserName] = useState('')
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])
  const socket = io('http://localhost:5000')

  socket.on('chat', data => {
    setMessages([...messages, data])
  })

  const sendMassage = () => {
    socket.emit('chat', {username, message})

    setUserName('')
    setMessage('')
  }

  return (
    <div className="Message">
      <section className="Message-content">
        {messages.map((message, index) => (
          <div key={index}>{message.username}: {message.message}</div>
        ))}
      </section>

      <div className="Message-input">
        <input type="text" placeholder="닉네임" value={username}
               onChange={({target}) => setUserName(target.value)}/>
        <input type="text" placeholder="닉네임" value={message}
               onChange={({target}) => setMessage(target.value)}/>
        <button onClick={sendMassage}>보내기</button>
      </div>
    </div>
  )
}

export default App

