const Sum = ({ course }) => {
  const result = course.parts.reduce(function (acc, obj) {
    return acc + obj.exercises;
  }, 0);

  return <li>total: {result}</li>;
};

export default Sum;
