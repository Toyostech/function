import { Typography } from '@mui/material'
import React from 'react'

const Headers = () => {
  return (
    <div style={{
        background: "white",
        color: "red",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 20,
        padding: "0px 15px 0px 15px"

    }}>
        <div style={{
            display: "flex",
            alignItems: "center",
            gap: 40
        }}>
            
        <img src="./familly.jpg" alt="" width={50}/>
        <Typography variant='h3'>Meme Generator</Typography>

        </div>
        <Typography variant='h3'>React Courec - Project3</Typography>
      
    </div>
  )
}

export default Headers
