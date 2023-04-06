import Header from "./Header";
import Content from "./Content";
import Sum from "./Sum";

const Course = ({ courses }) => {
    console.log(courses); // add this line to log the courses prop to the console
    return (
      <div>
        {courses && courses.map((course) => {
          console.log(course.name); // add this line to log the course name to the console
          return (
            <div key={course.id}>
              <Header name={course.name} />
              <Content parts={course.parts}/>
              <Sum parts={course.parts} />
            </div>
          );
        })}
      </div>
    );
  };

export default Course;
