import './App.css';
import {useState} from 'react'

function App() {
  const [change, chnageto] = useState('X')


  return (
    <div className="App">
      <div className='box'>
        <tr>
          <th><button>{change}</button></th>
          <th>-</th>
          <th>-</th>
        </tr>
        <tr>
          <th>-</th>
          <th>-</th>
          <th>-</th>
        </tr>
        <tr>
          <th>-</th>
          <th>-</th>
          <th>-</th>
        </tr>
      </div>
    </div>
  );
}

export default App;
