import { useState } from 'react'
import './App.css'
const Heading = (props) => {
  const { text } = props
  return (
    <h1>{text}</h1>
  )
}
const Button = (props) => {
  const { text, handleClick } = props
  return (
    <button onClick={handleClick}>{text} </button>
  )
}
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)


  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0))



  // console.log('points',points)
  const handleClickNext = () => {
    const index = Math.floor(Math.random() * anecdotes.length)
    // console.log('before', selected)

    setSelected(index)
    // console.log('after', index)

  }



  const [mostIndex, setMost] = useState(0)

  const handleClickVote = () => {
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
    // console.log(copy[selected])
    // console.log(copy)

      let max = points[0]
      let index=0
      for(let i=0; i<=points.length-1; i++){
        if(points[i]>max){
          max=points[i]
          index=i
        }
      }
      console.log(mostIndex)
      setMost(index)
      console.log(index)
    

  }



  return (
    <div>
    <Heading text = 'Anectode of the day' />
      {anecdotes[selected]}
      <p>has votes {points[selected]}</p>
      <Button text='Vote' handleClick={handleClickVote} />
      <Button text='Next anectode' handleClick={handleClickNext} />

      <Heading text = 'Anectode with most votes' />
      {anecdotes[mostIndex]}
      <p>has votes {points[mostIndex]}</p>
    </div>
  )
}

export default App