import React, { useState } from 'react'
import Layout from '../../../Component/Client/Teacher/Layout/Layout'
import TeacherDashboard from '../../../Component/Client/Teacher/Dashboard/TeacherDashboard'
import CreateClass from '../../../Component/Client/Teacher/Dashboard/CreateClass'

const DashboardTeacher = () => {
  const [display , setDisplay]=useState(false)
  const createHandler= ()=>{
    setDisplay(true)
  }
  const hiddenHandler= ()=>{
    setDisplay(false)
  }
  return (
    <Layout>
        <TeacherDashboard onClick={()=>createHandler()}/>
        {display && <CreateClass display={()=>hiddenHandler()}/>}
    </Layout>
  )
}

export default DashboardTeacher