import Part from "./Part";
import Sum from "./Sum";

const Content = ({ course }) => {
  return (
    <ul>
      {course.parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
      <Sum course={course} />
    </ul>
  );
};

export default Content;
