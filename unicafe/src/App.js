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

const StatisticLine = (props) => {
  const { text, value } = props

  if (text === 'Positive') {
    return (

      <tr>
        <td>{text}</td>
        <td>{value}%</td>
      </tr>
    )
  }

  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = (props) => {

  const { good, neutral, bad, all } = props
  const calcAvg = () => {
    return (
      ((good * 1) + (neutral * 0) + (bad * -1)) / all
    )
  }

  const calcPosPer = () => {
    return (
      (good / all) * 100
    )
  }

  if (all === 0) {

    return (
      <div> No feedback given</div>
    )

  }
  return (


      <table>
        <tbody>

          <StatisticLine text='Good' value={good} />

          <StatisticLine text='Neutral ' value={neutral} />

          <StatisticLine text='Bad' value={bad} />

          <StatisticLine text='All ' value={all} />

          <StatisticLine text='Average' value={calcAvg()} />

          <StatisticLine text='Positive' value={calcPosPer()} />

        </tbody>
      </table>

  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const handleGoodClick = () => {
    const updateGood = good + 1;
    setGood(updateGood);
    setAll(updateGood + neutral + bad)

  }
  const handleNeutralClick = () => {
    const updateNeutral = neutral + 1;
    setNeutral(updateNeutral);
    setAll(good + updateNeutral + bad)

  }

  const handleBadClick = () => {
    const updateBad = bad + 1;
    setBad(updateBad);
    setAll(good + neutral + updateBad)

  }

  return (

    <div>

      <Heading text='Give Feedback' />
      <Button text='Good' handleClick={handleGoodClick} />
      <Button text='Neutral' handleClick={handleNeutralClick} />
      <Button text='Bad' handleClick={handleBadClick} />

      <Heading text='Statistics' />
      <Statistics
        good={good} neutral={neutral} bad={bad} all={all}
      />
    </div>


  )
}

export default App