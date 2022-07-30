import api, {API_URL} from "./index";
import axios from "axios";

class GithubService {
  static async getUsersData () {
    return await api.get(`${API_URL}/users?per_page=12`);
  }

  static async searchUsers (username = '') {
    return await axios.get(`${API_URL}/search/users?q=${username}`);
  }

  static async getUserByName (username) {
    return await axios.get(`${API_URL}/users/${username}`)
  }

  static async getUserRepos (username, page = 1) {
    return await axios.get(`${API_URL}/users/${username}/repos?type=owner&per_page=5&page=${page}`)
  }
}

export default GithubService;