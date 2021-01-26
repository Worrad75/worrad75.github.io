import './App.css';
import Frontpage from './Frontpage'
import About from './About'
import Projects from './Projects'

function App() {
  return (
    <div className="App">
      <Frontpage className="fp"></Frontpage>
      <About></About>
      <Projects></Projects>
    </div>
  )
}
export default App;
