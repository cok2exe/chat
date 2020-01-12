import React, { useState } from 'react'
// import io from 'socket.io-client'

const App = () => {
  const [messages, setMessages] = useState([])
  // const socket = io()

  const sendMassage = () => {

  }

  return (
    <div className="Message">
      <section className="Message-content">
        {messages.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
      </section>
      <div className="Message-input">
        <input type="text"/>
      </div>
    </div>
  )
}

export default App

