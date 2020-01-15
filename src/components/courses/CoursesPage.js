import React from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

class CoursePage extends React.Component {
  state = {
    course: {
      title: ""
    }
  };
  handleChange = e => {
    const course = { ...this.state.course, title: e.target.value };
    this.setState({ course });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.actions.createCourse(this.state.course);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h2>Courses</h2>
          <h2>Add Course</h2>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.course.title}
          />
          <input type="submit" value="Save" />
          {this.props.courses.map(course => (
            <div key={course.title}>{course.title}</div>
          ))}
        </form>
      </div>
    );
  }
}

CoursePage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    courses: state.courses
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);
