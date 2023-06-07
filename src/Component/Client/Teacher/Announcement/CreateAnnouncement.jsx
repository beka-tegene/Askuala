import React from 'react'
import style from './CreateAnnouncement.module.css'
const CreateAnnouncement = (props) => {
  return (
    <div className={style.container}>
    <div className={style.dropBack} onClick={() => props.display()}></div>
    <div className={style.classes}>
      <h2>Create new class Announcement for online student</h2>
      <form className={style.class}>   
        <div className={style.form}>
          <div className={style.formControl}>
            <label htmlFor="">Title</label>
            <input type="text" />
          </div>
          <div className={style.formControl}>
            <label htmlFor="">Started Time</label>
            <input type="text" />
          </div>
        </div>
        <div className={style.formControl}>
            <label htmlFor="">URL / Link</label>
            <input type="url" name="" id="" />
          </div>
        <div className={style.formControl}>
            <label htmlFor="">Message</label>
            <textarea name="" id="" cols="30" rows="7"></textarea>
          </div>
        <div className={style.btn}>
          <button  onClick={() => props.display()}>Cancel</button>
          <button>Announcement</button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default CreateAnnouncement