import './App.css';
import Card from './components/Card';
import { observer } from 'mobx-react-lite';
import store from './store/store';

const App = observer(() => {
  return (
    <div className="app">
      {store.data.map((item, index) => {
        return(
          <Card 
            key={`card-${index}`}
            header={item.header}
            options={item.options}
            text={item.text}
          />
        )
      })}
    </div>
  );
});

export default App;
