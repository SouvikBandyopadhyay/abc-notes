import Navbar from './Navbar'
import Home from './Home'
import Create from './Create';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BlogDetails from './BlogDetails';
import BlogTrash from './BlogTrash';
import PageNotFound from './PageNotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <div className="content">
          <Switch>
            <Route exact path="/abc-notes">
              <Home />
            </Route>
            <Route path="/abc-notes/create">
              <Create />
            </Route>
            <Route path="/abc-notes/note/:id">
              <BlogDetails />
            </Route>
            <Route path="/abc-notes/trash">
              <BlogTrash />
            </Route>
            <Route path="*">
              <PageNotFound/>
            </Route>
          </Switch>
          
        </div>
        <div className='credits'>
          <p>Created by: Souvik Bandyopadhyay</p>
          <a href="mailto:souvikbandyopadhyay2000@gmail.com"></a><p>souvikbandyopadhyay2000@gmail.com</p>
        </div>
      </div>
    </Router>
  );
}

export default App;
