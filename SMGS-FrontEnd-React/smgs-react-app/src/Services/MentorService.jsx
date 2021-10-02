import axios from "axios";

const BaseUrl = "http://localhost:8989/SMG-System-Backend-SpringBoot/mentor";

class MentorService {
  registerNewMentor(courseId, newMentor) {
    return axios.post(BaseUrl + "/" + courseId, newMentor);
  }

  getAllMentors() {
    return axios.get(BaseUrl);
  }

  //to delete mentor by mentorId
  deleteMentorByMentorId(mentorId) {
    return axios.delete(BaseUrl + "/" + mentorId);
  }

  //get Single mentor information using mentorId
  getMentorByMentorId(mentorId) {
    return axios.get(BaseUrl + "/" + mentorId);
  }

  //get Address Details of mentor using mentorId
  getAddressByMentorId(mentorId) {
    return axios.get(BaseUrl + "/address/" + mentorId);
  }

  //get All Student Assigned To Mentor By MentorId
  getAssignedStudentListByMentorId(mentorId) {
    return axios.get(BaseUrl + "/assignedStudents/" + mentorId);
  }

  //Update Exsting Mentor Information
  updateMentorByMentorId(mentorId, updatedMentor) {
    return axios.put(BaseUrl + "/" + mentorId, updatedMentor);
  }
}

export default new MentorService();
