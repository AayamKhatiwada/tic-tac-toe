import './App.css';
import {useState} from 'react'

function App() {
  const [turn , change] = useState('x')
  const [cell, setcell] = useState((Array(9).fill('')));

  const handle = (num) =>{
    let squares = [...cell]
    if (turn === 'x'){
      squares[num] = 'x'
      change(turn => turn = 'o')
    }else{
      squares[num] = 'o'
      change(turn => turn = 'x')
    }

    setcell(squares)
    console.log(squares)
  }

  return (
    <div className="App">
      <div className='box'>
        <table>
          <tbody>
            <tr>
              
              <td onClick={()=>handle(0)}>{cell[0]}</td>
              <td onClick={()=>handle(1)}>{cell[1]}</td>
              <td onClick={()=>handle(2)}>{cell[2]}</td>
            </tr>
            <tr>
              <td onClick={()=>handle(3)}>{cell[3]}</td>
              <td onClick={()=>handle(4)}>{cell[4]}</td>
              <td onClick={()=>handle(5)}>{cell[5]}</td>
            </tr>
            <tr>
              <td onClick={()=>handle(6)}>{cell[6]}</td>
              <td onClick={()=>handle(7)}>{cell[7]}</td>
              <td onClick={()=>handle(8)}>{cell[8]}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
