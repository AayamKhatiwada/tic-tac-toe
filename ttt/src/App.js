import './App.css';
import {useState} from 'react'

function App() {
  const [turn , change] = useState('x')
  const handle = () =>{
    if (turn === 'x'){
      change(turn => turn = 'o')
    }else{
      change(turn => turn = 'x')
    }
  }

  return (
    <div className="App">
      <div className='box'>
        <table>
          <tbody>
            <tr>
              <td onClick={()=>handle()}>{turn}</td>
              <td onClick={()=>handle()}>{turn}</td>
              <td onClick={()=>handle()}>{turn}</td>
            </tr>
            <tr>
              <td onClick={()=>handle()}>{turn}</td>
              <td onClick={()=>handle()}>{turn}</td>
              <td onClick={()=>handle()}>{turn}</td>
            </tr>
            <tr>
              <td onClick={()=>handle()}>{turn}</td>
              <td onClick={()=>handle()}>{turn}</td>
              <td onClick={()=>handle()}>{turn}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
