import axios from "axios";

const BaseUrl = "http://localhost:8989/SMG-System-Backend-SpringBoot/students";

class StudentService {
  registerNewStudent(courseId, newStudent) {
    return axios.post(BaseUrl + "/" + courseId, newStudent);
  }

  //Get All Studentlist
  getStudentList(){
    return axios.get(BaseUrl);
}

  //get Single mentor information using studentId
  getStudentByStudentId(studentId) {
    return axios.get(BaseUrl + "/" + studentId);
  }

  //get Address of student by StudentId
  getAddressByStudentId(studentId) {
    return axios.get(BaseUrl + "/address/" + studentId);
  }

  //get Assigned Mentor of student by StudentId
  getAssignedMentorByStudentId(studentId) {
    return axios.get(BaseUrl + "/mentor/" + studentId);
  }
  // get Mentors'Address details of selected Student from StudentId
  getAssignedMentorsAddressByStudentId(studentId) {
    return axios.get(BaseUrl + "/mentor/address/" + studentId);
  }

  //delete StudentBy StudentId
  deleteStudentByStudentId(studentId) {
    return axios.delete(BaseUrl + "/" + studentId);
  }

  //delete StudentBy StudentId
  getAutomaticMentor(studentId) {
    return axios.get(BaseUrl + "/assignMentor/" + studentId);
  }

  //Update Exsting Student Information
  updateStudentByStudentId(studentId, updatedStudent) {
    return axios.put(BaseUrl + "/" + studentId, updatedStudent);
  }

  //update student marks
  updateMarks(studentId, newMarks){
    return axios.put(BaseUrl + "/marks/" + studentId + "/" + newMarks);
  }
}

export default new StudentService();
