import { useState } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState('')
  

  const handleSubmit = event => {
    console.log('handleSubmit ran');
    event.preventDefault();
    let newInput = document.getElementById('word').value;

    console.log('input');
    console.log(input)

    setInput(newInput)
  }

  const boldVowels = () => {
    let result = []
    let vowels = ['a','e','i','o','u','A','E','I','O','U']

    for (let i = 0; i < input.length; i++){
        if(vowels.includes(input[i])){
          result.push(<span class='highlight'>{input[i]}</span>)
        } else {
          result.push(<span>{input[i]}</span>)
        }
      
    }
    console.log(result)
    return result


  }

  return (
    <div className="App">
      <h1>Which letters are vowels?</h1>
      <div className="card">
        <form onSubmit={handleSubmit}>
        <label for='word'> Enter your word:</label>
          <input id='word' type='text' ></input>
        <button type='submit'>Submit
        </button>
        </form>
        <p>{boldVowels()}</p>
      </div>
    </div>
  )
}

export default App