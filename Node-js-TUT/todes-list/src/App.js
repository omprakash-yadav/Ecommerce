
import './App.css';
import Header from './MyComponents/Header';
import { Footer } from './MyComponents/Footer';
import { TodoItem } from './MyComponents/TodoItem';
import { Todos } from './MyComponents/Todos';

function App() {
  let todos = [
    {
      sno: 1,
      title: "go to the market",
      desc: "you have nead to go to the market buy somthing"
    },
    {
      sno: 2,
      title: "go to the market",
      desc: "you have nead to go to the market buy somthing"
    },
    {
      sno: 3,
      title: "go to the market",
      desc: "you have nead to go to the market buy somthing"
    }
  ]
  return (
    <div>
      <Header />
      <Footer />
      <TodoItem />
      <Todos />

    </div>
  );
}

export default App;
