import './Styles/App.css';
import './Styles/App.container.css';
import Header from './Comps/Header';
import Nav from './Comps/Nav';
import Main from './Comps/Main';
import Footer from './Comps/Footer';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header>
        <Nav />
      </Header>
      <Main />
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
