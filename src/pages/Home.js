import React from "react";
import Box from "../components/Box";
import style from "./home.module.css";

function About() {
    let arr=[{
        heading:"HTML CSS",
        info:"I have knowledge of html and css"
    },
{
        heading:"javascript",
        info:"I have knowledge javascript"
    },
{
        heading:"React",
        info:"I have knowledge React"
    }]
  return (
    <>
      <div className={style.mainContainer}>
        <div className={style.rightContainer}>
          <h1> About Us</h1>
          <img
            src="https://imgs.search.brave.com/lKkboHF3HW85Lt6ll-_2J7G5tI58mmIwl7LvKsvtpKg/rs:fit:256:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC51/ZmVEckVlY0JnbHpr/eEh6V1BqUXJnQUFB/QSZwaWQ9QXBp"
            alt=""
          />
          <div className={style.personalInfo}>
            <p>age:23</p>
            <p>location:India</p>
          </div>
        </div>
        <div className={style.leftContainer}>
          <div className={style.info}>
            <h3>Harshit Mishra</h3>
            <p>
              Support for women Heroines is a platform which
              benefits diverse groups of women by hosting supportive events. The
              About Us page successfully captures the spirit of the
              organization, beginning with a heartwarming text about its mission
              and photographs of empowered women who represent their community.
            </p>
          </div>
          <div className={style.components}>
            {arr.map((el) => {
              return <Box heading={el.heading} information={el.info} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
