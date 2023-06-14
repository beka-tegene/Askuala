import React, { useState } from 'react'
import Layout from '../../../Component/Client/Student/Layout/Layout'
import Answers from '../../../Component/Client/Student/QandA/Answers'
import GiveAnswer from '../../../Component/Client/Student/QandA/GiveAnswer'

const Questions = () => {
    const [display , setDisplay]=useState(false)
  const createHandler= ()=>{
    setDisplay(true)
  }
  const hiddenHandler= ()=>{
    setDisplay(false)
  }
  return (
    <Layout >
        <Answers onClick={()=>createHandler()}/>
        {display && <GiveAnswer display={()=>hiddenHandler()}/>}
    </Layout>
  )
}

export default Questions