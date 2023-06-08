import React, { useState } from 'react'
import Layout from '../../../Component/Client/Teacher/Layout/Layout'
import Announcement from '../../../Component/Client/Teacher/Announcement/Announcement'
import CreateAnnouncement from '../../../Component/Client/Teacher/Announcement/CreateAnnouncement'

const ClassAnnouncement = () => {
  const [display , setDisplay]=useState(false)
  const createHandler= ()=>{
    setDisplay(true)
  }
  const hiddenHandler= ()=>{
    setDisplay(false)
  }
  return (
    <Layout>

        <Announcement onClick={()=>createHandler()} />
        {display && <CreateAnnouncement display={()=>hiddenHandler()}/>}
    </Layout>
  )
}

export default ClassAnnouncement