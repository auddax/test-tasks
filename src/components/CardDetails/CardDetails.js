import styles from './CardDetails.module.css';

const CardDetails = (props) => {
  return(
    <div className={styles['card-details']}>
      <h2 className={styles['card-details__header']}>{props.name}</h2>
      <p className={styles['card-details__price']}>Цена: {props.price} руб.</p>
      <p className={styles['card-details__content']}>Описание услуги: {props.content}</p>
    </div>
  );
};

export default CardDetails;