import { Route } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPage';
import PostListPage from './pages/PostListPage';
import PostViewerPage from './pages/PostViewerPage';
import PostWritePage from './pages/PostWritePage';
import RegisterPage from './pages/RegisterPage';

function App() {

    return (
      <div className="App">
        <Route component={PostListPage} path="/" exact/>
        <Route component={PostWritePage} path="/write"/> 
        <Route component={PostViewerPage} path="/view/:postid"/> 
        <Route component={LoginPage} path="/login"/> 
        <Route component={RegisterPage} path="/register"/> 
      </div>
    );
}

export default App;
