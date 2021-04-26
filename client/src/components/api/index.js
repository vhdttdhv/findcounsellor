import axios from "axios";

const APIurl = axios.create({ baseURL: "http://localhost:5000" });

// this will check if the user's logged in before sending api req
// interceptors is similar to middleware in backend
APIurl.interceptors.request.use((req) => {
  if (localStorage.getItem("userInfo")) {
    const userToken = localStorage.getItem("userInfo").token;
    req.headers.authorization = `Bearer ${userToken}`;
  }
  return req;
});

export const fetchUpcomingAppointment = () => APIurl.get("/counsellors");
export const fetchCounsellors = () => APIurl.get("counsellors");

export const signIn = (formData) => APIurl.post("/user/signin", formData);
export const signUp = (formData) => APIurl.post("/user/signup", formData);
