import axios from "axios";

export default {
    getRandos: function() {
      var randoData = {};
      return randoData = axios.get("https://randomuser.me/api/?results=10");
    }
};