import "./App.css";
import Navbar from "./Navbar";
import Home from "./home";
import CreateBLog from "./Create";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import BlogDetails from "./blogDetails";
import PageNotFound from "./PageNotFound";
function App() {
  return (
    <Router>
    <div className="App">
 <Navbar/>
      <div className="content">
<Switch>
<Route  exact path="/">
<Home />
</Route>


<Route path="/create">
<CreateBLog />
</Route>

<Route path="/blog/:id">
<BlogDetails/>
</Route>

<Route path="*">
<PageNotFound/>
</Route>
</Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
