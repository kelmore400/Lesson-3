import './App.css';
import StateComponent from './components/StateComponent';
import { ListComponent } from './components/ListComponent';
import { NewListComponent } from './components/NewListComponent';

const arr = [
  {
      id: 1,
      value: 'some val1'
  },
  {
      id: 2,
      value: 'some val2'
  },
  {
      id: 3,
      value: 'some val3'
  },
  {
      id: 4,
      value: 'some val4'
  },
  {
      id: 5,
      value: 'some val5'
  }
];

function App() {
  return (
    <div className="App">
      <StateComponent name="aa"/>
      <hr></hr>
      <ListComponent items={arr}/>
      <hr></hr>
      <NewListComponent />
    </div>
  );
}

export default App;
