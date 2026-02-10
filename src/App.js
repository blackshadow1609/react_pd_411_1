// import logo from './logo.svg';
import './App.css';
import Header from './heder/Header';
import Article from './article/Article'; 
import Footer from './footer/Footer';
import Nav from './nav/Nav';
import data from './db.json';

function App() {
  let items = {"Главная":"/index", "Новости":"/news", "Магазин":"/store", "About":"/about", "Контакты":"/contscts"};
  let db = data.people;
  return (
    <div className="App">
      <Header />
      <Nav navigation = {items}></Nav>
      <Article db = {db}/>  
      <Footer />   
      
      {/* Alt+Shift+стрелка вниз - Дублирует строку вниз */}
      {/* Выравнивание выделенного фрагмента Windows/Linux: Ctrl + K Ctrl + F */}
    </div>
  );
}

export default App;
