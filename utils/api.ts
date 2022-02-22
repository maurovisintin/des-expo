

const BASE_API_URL = __DEV__ ? "http://localhost:3000" : "https://limitless-mesa-37288.herokuapp.com"

export const getAllProblems = () =>
fetch(`${BASE_API_URL}/api/problems`).then((res) => res.json())