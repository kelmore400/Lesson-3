import './App.css';
import StateComponent from './components/StateComponent';
import { ListComponent } from './components/ListComponent';
import { NewListComponent } from './components/NewListComponent';
import { Task1 } from './homework/Task1/index';
import { Task2 } from './homework/Task2/index';
import { Task3 } from './homework/Task3/index';
import { Task4 , FunctionalComponent , ClassComponent} from './homework/Task4/index';

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
      <h3>Task1</h3>
      <Task1/>
      <hr></hr>
      <h3>Task2</h3>
      <Task2/>
      <hr></hr>
      <h3>Task3</h3>
      <Task3/>
      <hr></hr>
      <h3>Task4</h3>
      <Task4 value="2"/>
      <Task4 value="5"/>
      <hr></hr>
      <StateComponent name="aa"/>
      <hr></hr>
      <ListComponent items={arr}/>
      <hr></hr>
      <NewListComponent />
      <hr></hr>
    </div>
  );
}

export default App;
