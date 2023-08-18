import Counter from './components/Counter/Counter';
import TodoList from './components/ToDo/TodoList/TodoList';
import Timer from './components/Timer/Timer';

import './App.css';

function App() {
  return (
    <div className="App">
      {/* 
        - можно в Counter передать начальное значение по свойству initialValue
        - при отсутсвтвии назначения - в app.js отобразиться input где и можно установить значение этому свойству
      */}
      <Counter />
      <TodoList />
      <Timer />

      <div className='info-block'>
        <p>Habr: <a href='https://career.habr.com/muhammadk2103' target='_blank' rel="noreferrer">Тык</a></p>
        <p>HeadHunter: <a href='https://hh.ru/resume/35c171e0ff09e662cc0039ed1f74666257616a' target='_blank' rel="noreferrer">Тык</a></p>
        <p>LinkedIn: <a href='https://www.linkedin.com/in/muhammadk2103/' target='_blank' rel="noreferrer">Тык</a></p>
        <p>Telegram: <a href='https://t.me/muhammadk2103' target='_blank' rel="noreferrer">Тык</a></p>
        <p>GitHub: <a href='https://github.com/muhammadk2103' target='_blank' rel="noreferrer">Тык</a></p>
      </div>
    </div>
  );
}

export default App;
