import React, { useEffect, useState } from 'react'

export default function App() {

  const [backendData, setBackendData] = useState([{}])
  const [text, setText] = useState("");

  useEffect(() => {
    fetch("/bring").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])

  function sendData() {

    let obj = {
      texto: text
    }

    fetch("/update", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj)
    })
    window.location.reload()
  }

  return (
    <div>
      {(typeof backendData === 'undefined') ? (
        <p>Aun no hay texto...</p>
      ) : (
        <p>{backendData.map(x => x.texto)}</p>
      )}

      <div>
        <input type="text"
          maxLength={30}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={sendData}>Cambiar texto</button>
      </div>

    </div>
  )
}
