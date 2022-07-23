import axios from "axios";

// JWT Token is subject to change, depending on the user. I can revisit this at a later time to implement persistence across pages
const jwtKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyY2JiZmU4OTBlNmJhZmJhYWY1NGM1NiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1Nzc1MTY4NCwiZXhwIjoxNjYwMzQzNjg0fQ.OAhnN89J1CNEBhebxYEdJV6TWK7IWL5J5qYftMnnrWo";
const BASE_URL = "http://localhost:5000/api";
const TOKEN = jwtKey;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
