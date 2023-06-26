import logo from './logo.svg';
import './App.css';
import ParentContext from './components/demoUseContext/ParentContext';
import DemoUseReducer from './components/DemoUseReducer';
import DemoUseRef from './components/DemoUseRef';
import DemouseState from './components/DemouseState';
import DemoUseEffect from './components/DemoUseEffect';
import CounterTH1 from './components/Bài Thực Hành/CounterTH1';
import OrderFormTH2 from './components/Bài Thực Hành/OrderFormTH2';
import ProductListTH3 from './components/Bài Thực Hành/ProductListTH3';
import TaskListTH4 from './components/Bài Thực Hành/TaskListTH4';
import SearchAndFilterTH5 from './components/Bài Thực Hành/SearchAndFilterTH5';
import FormTH6 from './components/Bài Thực Hành/FormTH6';
import TemperatureConverterTH7 from './components/Bài Thực Hành/TemperatureConverterTH7';
import ShippingCalculatorTH8 from './components/Bài Thực Hành/ShippingCalculatorTH8';
import Baitap1 from './components/Bài tập/Baitap1';
import TodoList from './components/Bài Thực Hành/TodoList';
import IndexColor from './components/LifingStateUp/IndexColor';
function App() {
  return (
    <div className="App">
      {/* <DemouseState /> */}
      {/* <hr /> */}
      {/* <DemoUseEffect /> */}
      <CounterTH1 />
      <hr />
      <OrderFormTH2 />
      <hr />
      <ProductListTH3 />
      <hr />
      <TaskListTH4 />
      <hr />
      <SearchAndFilterTH5 />
      <hr />
      <FormTH6 />
      <hr />
      <TemperatureConverterTH7 />
      <hr />
      <ShippingCalculatorTH8 />
      <hr />
      <Baitap1 />
      <hr />
      <TodoList />
      <hr />
      <IndexColor />
      <ParentContext />
      <DemoUseReducer />
      <DemoUseRef />
    </div>
  );
}

export default App;
