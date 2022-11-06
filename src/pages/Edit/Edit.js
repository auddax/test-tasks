import { useLocation } from "react-router-dom";
import EditEvent from "../../components/EditEvent/EditEvent";
import styles from './Edit.module.css';

const Edit = () => {
  const location = useLocation();
  const eventData = JSON.parse(location.state);

  return(
    <section className={styles['edit']}>
      <EditEvent data={eventData} />
    </section>
  )
}

export default Edit;