import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import styles from './Services.module.css';
import store from '../../store/store';
import Card from '../../components/Card/Card';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Spinner from '../../components/Spinner/Spinner';

const Services = observer(() => {
  useEffect(() => {
    store.fetchServicesData();
  }, [])

  const Cards = store.servicesData.map((service) => {
    const link = `/services/${service.id}/details`
    return(
      <Link to={link} key={service.id}>
        <Card
          name={service.name}
          price={service.price}
        />
      </Link>
    )
  })

  return(
    <section className={styles['services']}>
      <h1>Наши услуги</h1>
      {store.state === 'pending' 
        ? <Spinner /> 
        : store.state === 'error' ? <ErrorMessage onClick={store.fetchServicesData.bind(store)} /> : Cards
      }
    </section>
  );
});

export default Services;
