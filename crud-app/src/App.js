import logo from './logo.svg';
import './App.css';
import AddUser from './components/AddUser';
import Home from './components/Home';
import UpdateUser from './components/UpdateUser';
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <>
    <GlobalProvider>

    <Router>
    <Routes>

    <Route  path='/' element={<Home/>}></Route>
    <Route path='/add' element={<AddUser/>}></Route>
    <Route path='/edit/:id' element={<UpdateUser/>}></Route>

    </Routes>
    </Router>
    






    </GlobalProvider>
        
    </>
  );
}

export default App;
