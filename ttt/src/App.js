import './App.css';
import {useState} from 'react'

function App() {
  const [turn , change] = useState('x')
  const [cell, setcell] = useState((Array(9).fill('')));
  const [winner, setwinner] = useState('')

  const checkWinner = (squares) => {
    let combination = {
      across: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8]
      ],
      down: [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8]
      ],
      diagonal: [
        [0, 4, 8],
        [2, 4, 6]
      ]
    }

    for (let combos in combination){
      combination[combos].forEach(element => {
        if (squares[element[0]] === '' ||
            squares[element[1]] === '' ||
            squares[element[2]] === ''
        ){

        }else if(squares[element[0]] === squares[element[1]] && 
          squares[element[1]] === squares[element[2]]){
            setwinner(squares[element[0]])
          }
      });
    }
  }

  const handle = (num) =>{
    if (cell[num] !== ''){
      return
    }

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
    checkWinner(squares)
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
        {winner &&(
          <>
          <p>{winner} is the winner</p>
          <button>Restart</button>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
