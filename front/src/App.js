import React, { useEffect, useState } from 'react'

export default function App() {

  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/bring").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])

  return (
    <div>
      {(typeof backendData === 'undefined') ? (
        <p>Aun no hay texto...</p>
      ) : (
        <p>{backendData.map(x => x.texto)}</p>
      )}


    </div>
  )
}
