import './App.css';
import {Switch, Route} from 'react-router-dom';
import HomePage from './pages/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SigninAndSignup from './pages/signin-and-signup/signin-and-signup.component';


const HatPage = () => {
  return <h1>Hats Page</h1>
}



function App() {
  return (
    <div>
    <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/> 
        <Route exact path='/hat' component={HatPage}/> 
        <Route exact path='/shop' component={ShopPage}/> 
        <Route exact path='/signin' component={SigninAndSignup}/> 
      </Switch>
    </div>
  );
}

export default App;
