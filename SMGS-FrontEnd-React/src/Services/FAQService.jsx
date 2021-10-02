import axios from "axios";

const BaseUrl = "http://localhost:8989/SMG-System-Backend-SpringBoot/queries";

class FAQService {
  getAllQueris() {
    return axios.get(BaseUrl);
  }
}

export default new FAQService();
