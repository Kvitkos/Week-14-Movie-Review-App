import './App.css';
import { Switch, Route } from 'react-router-dom';
import Movie from './components/movie';
import ReviewForm from './components/review';
import ReviewList from './components/review-list';
import Home from './components/movie-list';

function App() {
  return (
    <div>
      {/* Your other components */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={Movie} />
        <Route path="/contact" component={ReviewForm} />
        <Route path="/contact" component={ReviewList} />
        <Route path="/contact" component={Review} />
        <Route path="/contact" component={Stars} />
      </Switch>
    </div>
  );
}

export default App;

