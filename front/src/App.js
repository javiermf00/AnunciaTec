import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export default function App() {

  const [backendData, setBackendData] = useState([{}])
  const [text, setText] = useState("");
  const centerdiv = {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    minHeight: "100vh",
    gap: "10px"
  }

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
    <div style={centerdiv}>
      {(typeof backendData === 'undefined') ? (
        <p>Aun no hay texto...</p>
      ) : (
        <Typography id="typography" variant="h2"> {backendData.map(x => x.texto)} </Typography>

      )}

      <div>
        <TextField
          id="textfield"
          value={text}
          inputProps={{ maxLength: 30, size: 30 }}
          onChange={(e) => setText(e.target.value)}
          variant="outlined"
        />

      </div>
      <div>
        <text>{"\n"}</text>
      </div>

      <div>
        <Button id="button" variant="outlined" onClick={sendData}> Cambiar texto</Button>
      </div>

    </div>
  )
}
