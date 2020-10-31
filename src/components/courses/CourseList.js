import React from "react";
import { Link } from "react-router-dom";

const CourseList = ({ courses, deleteCourse }) => {
  return (
    <div>
      <div className="pageContent">
        <div className="col-12">
          {courses.map((course) => (
            <div key={course.id}>
              <div className="row listRowStyle">
                <Link
                  to={"/course/" + course.slug}
                  className="col-6 h6 courseListingColor"
                >
                  <p>{course.title}</p>
                </Link>
                <p className="col-2 smallerText">{course.authorName}</p>
                <p className="col-3 text-muted smallerText">
                  {course.category}
                </p>
                <button
                  className="col-1 btn btn-sm btn-outline-danger form-control smallButton"
                  onClick={() => deleteCourse(course.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseList;
