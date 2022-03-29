import './App.css';
import { NavLink } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './components/Home'
import Address from './components/Address'
import Product from './components/Product'
import AddressInsert from './components/AddressInsert';
import AddressRead from './components/AddressRead';
import User from './components/User';
import UserInsert from './components/UserInsert';

function App() {
    return (
      <div className="App">
          <div className='menu'>
              <span className='item'><NavLink to="/">Home</NavLink></span>
              <span className='item'><NavLink to="/address">주소관리</NavLink></span>
              <span className='item'><NavLink to="/product">상품관리</NavLink></span>
              <span className='item'><NavLink to="/user">사용자관리</NavLink></span>
          </div>
          <Switch>
            <Route path ="/" component={Home} exact/>
            <Route path ="/address" component={Address} exact/>
            <Route path ="/product" component={Product}/>
            <Route path ="/address/insert" component={AddressInsert}/>
            <Route path ="/address/read/:id" component={AddressRead}/>
            <Route path ="/user" component={User} exact/>
            <Route path ="/user/insert" component={UserInsert} exact/>
            <Route render = {()=><h2>이 페이지는 존재하지 않습니다.</h2>}></Route>
          </Switch>
      </div>
    );
}

export default App;
