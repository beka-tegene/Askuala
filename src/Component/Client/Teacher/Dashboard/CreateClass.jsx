import React from "react";
import style from "./CreateClass.module.css";
const CreateClass = (props) => {
  return (
    <div className={style.container}>
      <div className={style.dropBack} onClick={() => props.display()}></div>
      <div className={style.classes}>
        <h2>Create new class for online student</h2>
        <form className={style.class}>   
          <div className={style.form}>
            <div className={style.formControl}>
              <label htmlFor="">Course ID</label>
              <select name="" id="">
                <option value=""></option>
                <option value="">NSR/5767/54</option>
                <option value="">NSR/3452/32</option>
                <option value="">NSR/5325/23</option>
              </select>
            </div>
            <div className={style.formControl}>
              <label htmlFor="">Course Name</label>
              <select name="" id="">
                <option value=""></option>
                <option value="">C++</option>
                <option value="">C#</option>
                <option value="">python</option>
              </select>
            </div>
          </div>
          <div className={style.form}>
            <div className={style.formControl}>
              <label htmlFor="">ETCS</label>
              <select name="" id="">
                <option value=""></option>
                <option value="">3</option>
                <option value="">5</option>
                <option value="">7</option>
              </select>
            </div>
            <div className={style.formControl}>
              <label htmlFor="">Credit Hours</label>
              <select name="" id="">
                <option value=""></option>
                <option value="">2</option>
                <option value="">3</option>
              </select>
            </div>
          </div>
          <div className={style.form}>
            <div className={style.formControl}>
              <label htmlFor="">Started Day</label>
              <input type="month" name="" id="" />
            </div>
            <div className={style.formControl}>
              <label htmlFor="">End Day</label>
              <input type="month" name="" id="" />
            </div>
          </div>
          <div className={style.formControl}>
              <label htmlFor="">Description</label>
              <textarea name="" id="" cols="30" rows="7"></textarea>
            </div>
          <div className={style.btn}>
            <button  onClick={() => props.display()}>Cancel</button>
            <button>Create</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateClass;
