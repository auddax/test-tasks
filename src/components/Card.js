import React from "react";
import styles from './Card.module.css';

const Card = (props) => {
  return(
    <div className={styles['card']}>
      <h2>{props.header}</h2>
      <ul>
        {props.options.map((item, index) => <li key={`li-${index}`}>{item}</li>)}
      </ul>
      <p>{props.text}</p>
    </div>
  );
};

export default Card;