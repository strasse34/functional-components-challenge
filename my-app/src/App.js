import css from './App.module.css';
import Content from './components/Content';
import NavBarForm from './components/NavBarForm';

function App() {
  return (
    <div className={css.App}>
      <NavBarForm />
      <Content />
    </div>
  );
}

export default App;