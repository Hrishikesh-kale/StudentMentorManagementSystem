import axios from "axios";

const BaseUrl = "http://localhost:8989/SMG-System-Backend-SpringBoot/courses";

class CourseService {
  // get All courses By Admin
  getAllCourses() {
    return axios.get(BaseUrl);
  }

  // to add new course by Admin
  addNewCourse(newCourse) {
    return axios.post(BaseUrl, newCourse);
  }

  // to delete course by id from Admin
  deleteCourse(courseId) {
    return axios.delete(BaseUrl + "/" + courseId);
  }

  // to get single course detail by StudentId
  getCourseDetailByStudentId(studentId) {
    return axios.get(BaseUrl + "/studentcourse/" + studentId);
  }

  // to get single course detail by MentorId
  getCourseDetailByMentorId(MentorId) {
    return axios.get(BaseUrl + "/mentorcourse/" + MentorId);
  }
}

export default new CourseService();
