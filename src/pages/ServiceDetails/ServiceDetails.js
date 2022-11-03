import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { observer } from 'mobx-react-lite';
import store from '../../store/store';
import Spinner from '../../components/Spinner/Spinner';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import CardDetails from '../../components/CardDetails/CardDetails';

const ServiceDetails = observer(() => {
  const { id } = useParams();

  useEffect(() => {
    store.fetchServiceDetails(id);
  }, [id])

  return(
    <section>
      {store.state === 'pending' 
        ? <Spinner /> 
        : store.state === 'error' 
          ? <ErrorMessage onClick={store.fetchServiceDetails.bind(store, id)}/>
          : <CardDetails 
              name={store.serviceDetails.name} 
              price={store.serviceDetails.price} 
              content={store.serviceDetails.content} 
            />
      }
    </section>
  );
});

export default ServiceDetails;