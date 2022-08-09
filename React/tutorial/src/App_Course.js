const Header = ({ course }) => {
  return (<div>
    <h1>{course.name}</h1>
  </div>)
}

const Part = ({ name, exercises }) => {
  return (<div>
    <p>
      {name} {exercises}
    </p>
  </div>)
}

const Content = ({ course }) => {
  const parts = course.parts
  return (
    <div>
      {parts.map(part =>
        <Part name={part.name} exercises={part.exercises} key={part.name} />)}
    </div>)
}

const Total = ({ course }) => {
  const parts = course.parts
  const total = parts.reduce((previousValue, currentValue) => previousValue + currentValue.exercises, 0)
  return (<div>
    <p>Number of exercises {total}</p>
  </div>)
}

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

const Courses = ({ courses }) => {
  return (
    <div>
      {courses.map(course => 
        <Course course={course} key={course.name} />)}
    </div>
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <Courses courses={courses} />
    </div>
  )
}

export default App