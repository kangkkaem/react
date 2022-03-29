import './App.css';
import Product from './components/Product';
import Student from './components/Student';
import Home from './components/Home';
import Todos from './components/Todos';
import {NavLink, Route} from 'react-router-dom';
import { Switch} from 'react-router-dom';


function App() {
  const active={
    color: 'green'
  }
  return (
    <div className="App">

      <div className='menu'>
        <span><NavLink to="/home" className='item' activeStyle={active}>홈</NavLink></span>
        <span><NavLink to ="/student" className='item' activeStyle={active}>학생관리</NavLink></span>
        <span><NavLink to ="/product" className='item' activeStyle={active}>상품관리</NavLink></span>
        <span><NavLink to ="/todos" className='item' activeStyle={active}>할일목록</NavLink></span>
      </div>
      <Switch>
        <Route path="/home" component={Home}/>
        <Route path="/student" component={Student}/>
        <Route path="/product" component={Product}/>
        <Route path="/todos" component={Todos}/>
        <Route render={({location})=> (
          <div>
            <h2>이페이지가 존재하지 않습니다.</h2>
            <p>{location.pathname}</p>
          </div>
        )}/>
      </Switch>
    </div>
  );
}

export default App;
