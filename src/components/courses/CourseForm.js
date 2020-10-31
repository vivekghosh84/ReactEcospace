import React from "react";
import { Link } from "react-router-dom";

import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";

const CourseForm = ({
  course,
  authors,
  onSave,
  onChange,
  saving = false,
  errors = {},
}) => {
  return (
    <div>
      <div className="pageHeaders">
        <h2>{course.id ? "Edit" : "Add"} Course</h2>
      </div>
      <form onSubmit={onSave} className="marginTop20">
        {errors.onSave && (
          <div className="alert alert-danger" role="alert">
            {errors.onSave}
          </div>
        )}
        <div className="marginTop20">
          <TextInput
            name="title"
            label="Title"
            value={course.title}
            onChange={onChange}
            error={errors.title}
          />
          <SelectInput
            name="authorId"
            label="Author"
            value={course.authorId || ""}
            defaultOption="Select Author"
            options={authors.map((author) => ({
              value: author.id,
              text: author.name,
            }))}
            onChange={onChange}
            error={errors.author}
          />
          <TextInput
            name="category"
            label="Category"
            value={course.category}
            onChange={onChange}
            error={errors.category}
          />
          <button
            type="submit"
            disabled={saving}
            className="btn btn-primary margin05 width80"
          >
            {saving ? "Saving..." : "Save"}
          </button>
          <Link to="/courses" className="btn btn-secondary margin05 width80">
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
};

export default CourseForm;

// return (
//   <div>
//     <div className="pageHeaders">
//       <h2>Manage Courses</h2>
//     </div>
//     <div>
//       <form onSubmit={this.handleSubmit}>
//         <div className="pageContent">
//           <div className="col-12 row">
//             <h5 style={{ margin: "0 0 30px" }}>Add Cource</h5>
//             <div className="col-12">
//               <label className="margin05" htmlFor="courseName">
//                 Course Name
//               </label>
//               <input
//                 name="courseName"
//                 className="margin05 width350"
//                 type="text"
//                 placeholder="Course name..."
//                 onChange={this.handleChange}
//                 value={this.state.course.title}
//               />
//             </div>
//             <div className="col-12 row">
//               <Link
//                 to="/courses"
//                 exact
//                 className="margin05 btn btn-light width100 buttonFloatLeft"
//               >
//                 Back
//               </Link>
//               <input
//                 className="margin05 btn btn-primary width100 buttonFloatLeft"
//                 type="submit"
//                 value="Save"
//               />
//             </div>
//             <br />
//           </div>
//           <div className="col-12 marginTop20">
//             <h5 style={{ margin: "0 0 50px 0" }}>Available Courses</h5>
//             <div>
//               {this.props.courses.map((course) => (
//                 <div key={course.title}>{course.title}</div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </form>
//     </div>
//   </div>
// );

// function mapStateToProps(state, ownProps) {
//   return {
//     courses: state.courses,
//     authors: state.authors,
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     actions: {
//       loadCourses,
//       loadAuthors,
//     },
//   };
// }

//render
//}

//connect(mapStateToProps, mapDispatchToProps)
