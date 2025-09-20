import { useState } from 'react'

const Button = ({onClick, rating}) => <button onClick={onClick}>{rating}</button>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [count, setCount] = useState(0)
  const [average, setAverage] = useState(0)


  return (
    <div>
      <h1>give feedback</h1>
      <Button 
       onClick={() => {
        setGood(good + 1)
        const updatedCount = count + 1
        setCount(updatedCount)
        setAverage((average * count + 1) / (updatedCount))
       }} 
       rating="good"
      />
      <Button 
       onClick={() => {
        setNeutral(neutral + 1)
        const updatedCount = count + 1
        setCount(updatedCount)
        setAverage(average * (count) / updatedCount)
       }}
       rating="neutral"
      />
      <Button 
       onClick={() => {
        setBad(bad + 1)
        const updatedCount = count + 1
        setCount(updatedCount)
        setAverage((average * count - 1) / updatedCount)
       }} 
       rating="bad"
      />

      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {count}</p>
      <p>average {average}</p>
      <p>positive {good / count * 100} %</p>
    </div>
  )
}

export default App
