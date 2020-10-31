import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";

import * as courseActions from "../../redux/actions/courseActions";
import * as authorActions from "../../redux/actions/authorActions";
import CourseForm from "../courses/CourseForm";
import { newCourse } from "../..//json-server-tools/mockData";
import Spinner from "../common/Spinner";

function ManageCourses({
  courses,
  authors,
  loadCourses,
  loadAuthors,
  saveCourse,
  history,
  ...props
}) {
  const [course, setCourse] = useState({ ...props.course });
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    console.log("ManageCourse loading...");
    if (courses.length === 0) {
      loadCourses().catch((error) => {
        console.log("Loading courses failed" + error);
      });
    } else {
      setCourse({ ...props.course });
    }
    if (authors.length === 0) {
      loadAuthors().catch((error) => {
        console.log("Loading author failed" + error);
      });
    }
  }, [props.course, props.authors]);

  function handleChange(event) {
    const { name, value } = event.target;
    setCourse((prevCourse) => ({
      ...prevCourse,
      [name]: name === "authorId" ? parseInt(value, 10) : value,
    }));
  }

  function formIsValid() {
    const { title, authorId, category } = course;
    const errors = {};

    if (!title) errors.title = "Title is required.";
    if (!authorId) errors.author = "Author is required.";
    if (!category) errors.category = "Category is required.";

    setErrors(errors);
    return Object.keys(errors).length === 0;
  }

  function handleSave(event) {
    event.preventDefault();
    if (!formIsValid()) return;

    setSaving(true);
    saveCourse(course)
      .then(() => {
        toast.success("Course saved.");
        history.push("/courses");
      })
      .catch((error) => {
        setSaving(false);
        console.log(`Error Logged: ` + error.message);
        setErrors({ onSave: error.message });
      });
  }

  //render
  return authors.length === 0 || courses.length === 0 ? (
    <Spinner />
  ) : (
    <div className="marginTop20">
      <CourseForm
        course={course}
        errors={errors}
        authors={authors}
        onChange={handleChange}
        onSave={handleSave}
        saving={saving}
      />
    </div>
  );
}

export function getCourseBySlug(courses, slug) {
  return courses.find((course) => course.slug === slug) || null;
}

function mapStateToProps(state, ownProps) {
  const slug = ownProps.match.params.slug;
  const course =
    slug && state.courses.length > 0
      ? getCourseBySlug(state.courses, slug)
      : newCourse;
  return {
    course: course,
    courses: state.courses,
    authors: state.authors,
  };
}

const mapDispatchToProps = {
  loadCourses: courseActions.loadCourses,
  loadAuthors: authorActions.loadAuthors,
  saveCourse: courseActions.saveCourses,
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageCourses);
