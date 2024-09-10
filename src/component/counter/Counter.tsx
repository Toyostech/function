import React from 'react'
import ConuntDate from './countData/ConuntDate'
import ArrayAdd from '../arryAdd/ArrayAdd'
import DataState from '../counter/countData/ConuntDate'
import Project from '../project/Project'
const Counter = () => {
  console.log()
  return (
    <div style={{
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center",
        margin: 50,
        border: "5px solid red",
        padding: "15px  45px",
        gap: 30
      }}>
      <ConuntDate />
      <ArrayAdd/>
      <Project/>
    </div>
  )
}

export default Counter
