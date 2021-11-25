import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'
import Main from './screens/Main/Main'

function App() {
	return (
		<BrowserRouter>
			<div className="App">
        <Route exact path="/" component = {Main}  />
          {/*   <Route  exact path="/Profile/:id"  render = {(props)=>  <Profile {...props} /> } />   */}
			</div>
		</BrowserRouter>
	);
}

export default App;
