import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";

import * as courseActions from "../../redux/actions/courseActions";
import * as authorActions from "../../redux/actions/authorActions";
import CourseList from "./CourseList";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";

class CoursesPage extends React.Component {
  componentDidMount() {
    const { courses, authors, actions } = this.props;

    if (courses.length === 0) {
      actions.loadCourses().catch((error) => {
        console.log("Loading courses failed" + error);
      });
    }
    if (authors.length === 0) {
      actions.loadAuthors().catch((error) => {
        console.log("Loading author failed" + error);
      });
    }
  }

  handleDeleteCourse = (course) => {
    this.props.actions
      .deleteCourse(course)
      .then(() => {
        toast.success("Course deleted.");
      })
      .catch((error) => {
        toast.error("Delete failed" + error.message, { autoClose: false });
      });
  };

  //render
  render() {
    return (
      <div>
        <div className="pageHeaders">
          <h2>Courses</h2>
        </div>
        {this.props.loading ? (
          <Spinner />
        ) : (
          <>
            <CourseList
              courses={this.props.courses}
              deleteCourse={this.handleDeleteCourse}
            />
            <Link to="/course" className="btn btn-primary add-course">
              Add Course
            </Link>
          </>
        )}
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    courses:
      state.authors.length === 0
        ? []
        : state.courses.map((course) => {
            return {
              ...course,
              authorName: state.authors.find((a) => a.id === course.authorId)
                .name,
            };
          }),
    authors: state.authors,
    loading: state.apiCallsInProgress > 0,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
      loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch),
      deleteCourse: bindActionCreators(courseActions.deleteCourse, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
