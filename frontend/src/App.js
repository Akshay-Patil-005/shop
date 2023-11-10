
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Shop from './Pages/shop'
import Category from './Pages/Category'
import Khadya from './Components/Khadya/Khadya';
import Footer from './Components/Footer/Footer'


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Khadya/>
      <Routes>
        <Route path='/' element={<shop/>}/>
        <Route path='/dhanya' element={<Category category="dhanya"/>}/>
        <Route path='/khat' element={<Category category="khat"/>}/>
        <Route path='/centre' element={<Category category="centre"/>}/>
        <Route path='/Cart' element={<Category category="Cart"/>}/>
      </Routes>
      {/* <Footer/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
