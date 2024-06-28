import css from './App.module.css';
import Sidebar from './components/Sidebar';
import GeneralGreeting from './components/GeneralGreetings';

function App() {
  return (
    <div className={css.App}>
      <Sidebar />
      <GeneralGreeting greeting="My beautiful girlfriend jo"/>
    </div>
  );
}

export default App;