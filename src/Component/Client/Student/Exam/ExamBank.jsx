import React from "react";
import style from "./ExamBank.module.css";
import image from "../../../../img/photo_2023-06-19_08-37-45.jpg";
import image1 from "../../../../img/photo_2023-06-19_08-37-59.jpg";
import image2 from "../../../../img/photo_2023-06-19_08-38-01.jpg";
import image3 from "../../../../img/photo_2023-06-19_08-38-48.jpg";
import image4 from "../../../../img/photo_2023-06-19_08-39-06.jpg";
import image5 from "../../../../img/photo_2023-06-19_08-39-10.jpg";
import image6 from "../../../../img/photo_2023-06-19_08-39-15.jpg";
const ExamBank = () => {
  const DUMMY_EXAM = [
    {
      exam: image,
    },
    {
      exam: image1,
    },
    {
      exam: image2,
    },
    {
      exam: image3,
    },
    {
      exam: image4,
    },
    {
      exam: image5,
    },
    {
      exam: image6,
    },
  ];
  return (
    <div className={style.container}>
      {DUMMY_EXAM.map((item, index) => (
        <div className={style.exam}>
          <img src={item.exam} alt="exam" key={index} />
        </div>
      ))}
    </div>
  );
};

export default ExamBank;
