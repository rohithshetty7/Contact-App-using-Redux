import { Provider } from 'react-redux';
import { BrowserRouter as Router, 
  Route, NavLink,Switch } from 'react-router-dom'

import { ToastContainer } from 'react-toastify';
import './App.css';
import AddContact from './components/AddContact';
import EditContact from './components/EditContact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import store from "../src/redux/store"
function App() {
  return (
    <Provider store={store}>
    <div className="App">
    <ToastContainer></ToastContainer>
    <Navbar/>
    <Switch>
    <Route exact path='/'><Home/></Route>
    <Route exact path='/add' ><AddContact/> </Route>
    <Route exact path='/edit/:id' ><EditContact/></Route>

    </Switch>
    </div>
    </Provider>
  );
}

export default App;
