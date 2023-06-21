import React, { useState } from 'react'
import Layout from '../../../Component/Client/Teacher/Layout/Layout'
import Announcement from '../../../Component/Client/Teacher/Announcement/Announcement'
import CreateAnnouncement from '../../../Component/Client/Teacher/Announcement/CreateAnnouncement'
import EditAnnounce from '../../../Component/Client/Teacher/Announcement/EditAnnounce'

const ClassAnnouncement = () => {
  const [display , setDisplay]=useState(false)
  const [editDisplay, setEditDisplay] = useState(false);
  const [useData, setUseData] = useState();
  const createHandler= ()=>{
    setDisplay(true)
  }
  const hiddenHandler= ()=>{
    setDisplay(false)
  }
  const createEditHandler = (id) => {
    setEditDisplay(true);
    setUseData(id)
  };
  const hiddenEditHandler = () => {
    setEditDisplay(false);
  };
  return (
    <Layout>

        <Announcement onClick={()=>createHandler()} onEditClick={(id) => createEditHandler(id)}/>
        {display && <CreateAnnouncement display={()=>hiddenHandler()}/>}
        {editDisplay && <EditAnnounce editDisplay={() => hiddenEditHandler()} useData={useData}/>}
    </Layout>
  )
}

export default ClassAnnouncement