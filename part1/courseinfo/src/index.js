import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
	return (
		<h1>{props.title}</h1>
	)
}

const Content = (props) => {
	const parts = props.parts;
	const exercises = props.exercises;
	const contents = []
	for (var i = 0; i < parts.length; i++) {
		contents.push(<Part part={parts[i]} exercises={exercises[i]}/>);
	}
	return (
		<>{contents}</>
	)
}

const Part = (props) => {
	return (
		<p>{props.part} {props.exercises}</p>
	)
}

const Total = (props) => {
	const exercises = props.exercises;
	var total = 0;
	for (var i = 0; i < exercises.length; i++) {
		total += exercises[i];
	}
	return (
		<p>Number of exercises {total}</p>
	)
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = ['Fundamentals of React', 'Using props to pass data', 'State of a component'];
  const exercises = [10, 7, 14];

  return (
    <div>
      <Header title={course} />
      <Content parts={parts} exercises={exercises} />
      <Total exercises={exercises} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))