// import logo from './logo.svg';
import './App.css';
import Frops2 from './component';
import CounterHooks from './counterusinghook';
import CounterHook from './counteruseeffect';
import Change from './conditon';
import Comp from './components';
import Form from './form';
function App() {
  return (
    <div className="App">
      <Frops2 name='abbhiraj' company='cloudeqw' />
      <CounterHooks/>
      <CounterHook/>
      <Change/>
      <Comp />
      <Form/>
    </div>
  );
}

export default App;
