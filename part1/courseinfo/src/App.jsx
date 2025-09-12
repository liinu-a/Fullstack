const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Part = (props) => {
  return <p>{props.part} {props.exercise}</p>
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.pt1} exercise={props.ex1} />
      <Part part={props.pt2} exercise={props.ex2} />
      <Part part={props.pt3} exercise={props.ex3} />
    </div>
  )
}

const Total = (props) => {
  return <p>Number of exercises {props.numOfEx}</p>
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content 
       pt1={part1} ex1={exercises1} 
       pt2={part2} ex2={exercises2} 
       pt3={part1} ex3={exercises1} 
      />
      <Total numOfEx={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App
