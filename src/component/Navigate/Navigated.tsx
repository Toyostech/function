"use client"
import { Typography } from '@mui/material'
import React, { Children, useState } from 'react'
 
import Linkeds from './linked/Linkeds'
import { Button } from '../button/Button'


const Navigated = () => {
    const [buttonss , setbutton] = useState(true)
  return (
    <div>
        <div style={{ 
            display: "flex",
            background: "rebeccapurple",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 15
        }}>
            <div>
                <Typography>LOGO</Typography>
            </div>
            <div style={{
                
                
            }}>
                <Linkeds
                
            
                />
                {Children && <Button buttonstyle='btn--outline' >Sign in</Button>}
            </div>





        </div>
      
    </div>
  )
}

export default Navigated
