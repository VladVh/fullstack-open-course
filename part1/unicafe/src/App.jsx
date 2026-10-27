import { useState } from 'react'


const StatisticLine = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td> <td>{value}</td>
    </tr>
    
  )
}

const Statistics = ({good, neutral, bad}) => {
  const calculateAverage = () => {
    if (good == 0 && neutral == 0 && bad == 0)
      return 0
    else {
      return (good - bad) / (good + neutral + bad)
    }
  }

  const calculatePositive = () => {
    if (good == 0 && neutral == 0 && bad == 0)
      return 0
    else {
      return good / (good + neutral + bad) * 100
    }
  }

  if (good == 0 && neutral == 0 && bad == 0) {
    return (
      <div>no feedback gathered</div>
    )
  }
  else {
    return (
        <div>
          <table>
            <StatisticLine text={"good"} value={good} />
            <StatisticLine text={"neutral"} value={neutral} />
            <StatisticLine text={"bad"} value={bad} />
            <StatisticLine text={"all"} value={good + bad + neutral} />
            <StatisticLine text={"average"} value={calculateAverage()} />
            <StatisticLine text={"positive"} value={calculatePositive()} />
          </table>
        </div>
      )
  }
  
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleButtonClick = (value, setValue) => setValue(value + 1)
  

  return (
    <div>
      <div>
        <b>give feedback</b>
      </div>
      
      <br/>
      <button onClick={() => handleButtonClick(good, setGood)}>good</button>
      <button onClick={() => handleButtonClick(neutral, setNeutral)}>neutral</button>
      <button onClick={() => handleButtonClick(bad, setBad)}>bad</button>
      <br/>

      <div>
        <b>statistics</b>
      </div>
      <br/>
      <Statistics good={good} neutral={neutral} bad={bad} />

    </div>
  )
}

export default App