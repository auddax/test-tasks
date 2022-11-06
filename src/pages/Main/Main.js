import { observer } from "mobx-react-lite";
import { useLocation } from "react-router-dom";
import Calendar from "../../components/Calendar/Calendar";
import Header from "../../components/Header/Header";
import SuccessModal from "../../components/SuccessModal/SuccessModal"
import ReminderModal from "../../components/ReminderModal/ReminderModal";
import store from "../../store/rootStore";

const Main = observer(() => {

  const location = useLocation();

  const showSuccessModal = () => {
    let message = ''
    switch (location.state) {
      case 'create':
        message = 'Событие успешно создано!'
        break;

      case 'edit':
        message = 'Событие успешно изменено!'
        break;

      case 'delete':
        message = 'Событие успешно удалено!'
        break;
    
      default:
        break;
    }
  
    setTimeout(() => {
      store.eventStore.setResult(false);
    }, 2000);
  
    return <SuccessModal data={message} />
  }

  const showReminderModal = () => {
    return <ReminderModal data={store.eventStore.reminder} />
  }

  return(
    <>
      <Header />
      <Calendar />
      {store.eventStore.result ? showSuccessModal() : ''}
      {store.eventStore.reminder.active ? showReminderModal() : ''}
    </>
  );
});

export default Main;