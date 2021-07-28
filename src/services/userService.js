import http from "../services/http";

const apiURL = "/users"



// export function register({name, mobileNumber, email, password}){
//     http.post(apiUrl,{name, phone: mobileNumber, email, password })
// }


// const { name, mobileNumber, email, password } = _.pick(this.state.data, [
//     "name",
//     "mobileNumber",
//     "email",
//     "password",
//   ]);

//   const response = await axios.post("http://localhost:3100/api/users", {
//     name,
//     phone: mobileNumber,
//     email,
//     password,
//   });

// "http://localhost:3100/api/users"


export function register({ name, mobileNumber, email, password }){
    const response = http.post(apiURL, {
        name,
        phone: mobileNumber,
        email,
        password,
    });

    return response
}