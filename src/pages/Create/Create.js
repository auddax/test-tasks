import { useLocation } from "react-router-dom";
import CreateEvent from "../../components/CreateEvent/CreateEvent";
import styles from './Create.module.css';

const Create = () => {
  const location = useLocation();
  const { date } = location.state;

  return(
    <section className={styles['create']}>
      <CreateEvent date={date} />
    </section>
  )
}

export default Create;