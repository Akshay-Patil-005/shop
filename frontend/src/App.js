
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
// import {Khad, Dhanya,Khat,Cart,Center} from './Pages'
import Khad from './Pages/Khad';
import Dhanya from './Pages/Dhanya';
import Khat from './Pages/Khat';
import Cart from './Pages/Cart'
import Center from './Pages/Center'
import Khadya from './Components/Khadya/Khadya';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      {/* <Khadya/> */}
      <Routes>
        <Route path='/' element={<Khad/>}/>
        <Route path='/Dhanya' element={<Dhanya/>}/>
        <Route path='/Khat' element={<Khat/>}/>
        <Route path='/Center' element={<Center/>}/>
        <Route path='/Cart' element={<Cart/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
