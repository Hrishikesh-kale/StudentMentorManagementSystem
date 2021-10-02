import axios from "axios";

const BaseUrl = "http://localhost:8989/SMG-System-Backend-SpringBoot/admin";

class AdminService {
  // get admin by Admin Id
  getAdminDetailsByAdminId(adminId) {
    return axios.get(BaseUrl + "/" + adminId);
  }

  //add new admin
  addNewAdmin(newAdmin) {
    return axios.post(BaseUrl, newAdmin);
  }

  //to get List Of all admin to Manage
  getListOfAdmin() {
    return axios.get(BaseUrl);
  }

  //to delete Admin By AdminId
  deleteAdminByAdminId(adminId) {
    return axios.delete(BaseUrl + "/" + adminId);
  }
}

export default new AdminService();
