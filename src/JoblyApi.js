import axios from 'axios';

class JoblyApi {
    static async request(endpoint, paramsOrData = {}, verb = "get") {
      const token = window.localStorage.getItem('_token');
        
      paramsOrData._token = token;
      // console.debug("API Call:", endpoint, paramsOrData, verb);
  
      try {
        return (await axios({
          method: verb,
          url: `http://localhost:3001/${endpoint}`,
          [verb === "get" ? "params" : "data"]: paramsOrData})).data;
          // axios sends query string data via the "params" key,
          // and request body data via the "data" key,
          // so the key we need depends on the HTTP verb
      }
  
      catch(err) {
        console.error("API Error:", err.response);
        let message = err.response.data.message;
        throw Array.isArray(message) ? message : [message];
      }
    }

    static async getCompany(handle) {
      let res = await this.request(`companies/${handle}`);
      return res.company;
    }
    
    static async getUser(username) {
      let res = await this.request(`users/${username}`);
      return res.user;
    }

    static async login(username,password){
      let res = await this.request('login',{username, password},"post");
      return res.token;
    }

    static async signup(username, password, first_name,last_name,email){
      let res = await this.request('users',{username, password, first_name, last_name, email},"post");
      
      return res.token;
    }

    static async editProfile(username, password, first_name, last_name, email=undefined, photo_url=undefined){
      console.log("username from editprofile joblyapie", username)
      console.log("editProfile JOBLYAPI",{ password, first_name, last_name, email, photo_url})
      let res = await this.request(`users/${username}`,{ password, first_name, last_name, email, photo_url},"patch");
      
      return res.user;
    }

    static async applyToJob(id, username){
      let res = await this.request(`jobs/${id}/apply`,username,"post");
      return res.message;
    }
  }

export default JoblyApi;