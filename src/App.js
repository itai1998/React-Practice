import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom' 
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  // Use 'exact' to match the exact path 
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>  
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create"> 
              <Create />
            </Route>
            <Route path="/blogs/:id"> 
              <BlogDetails />
            </Route>

            {/* Not catch any route */}
            <Route path="*"> 
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
