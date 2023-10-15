import Header from "./Header";
import Content from "./Content";
import Sum from "./Sum";

const Course = ({ course }) => {
  return (
    <>
      <Header course={course} />
      <Content course={course} />
    </>
  );
};

export default Course;