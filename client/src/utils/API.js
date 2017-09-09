import axios from "axios";

export default {
  get: function() {
    return axios.get("/api/");
  },
  delete: function(_id) {
    return axios.delete(`/api/${_id}`);
  },
  save: function(body) {
    return axios.post("/api/", { body });
  },
  getTest: function() {
    return axios.get("http://localhost:3001/test");
  }
};

