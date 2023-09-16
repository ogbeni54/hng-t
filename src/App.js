import './App.css'
import Home from './page/homepage/Home';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Trail from './page/trail/Trail';





function App() {
  
  
  return (
    <div className="App">
      {/* <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='' element={<Trail/>}/>

        </Routes>
        </Router>
       */}
       <Home/>
    </div>
  );
}

export default App;
