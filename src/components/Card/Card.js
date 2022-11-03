import styles from './Card.module.css';

const Card = (props) => {
  return(
    <div className={styles['card']}>
      <h2 className={styles['card__header']}>{props.name}</h2>
      <p className={styles['card__price']}>Цена: {props.price} руб.</p>
    </div>
  );
};

export default Card;
