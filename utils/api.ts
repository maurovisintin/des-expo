

const BASE_API_URL = __DEV__ ? "http://localhost:3000" : "xxx"

export const getAllProblems = () =>
fetch(`${BASE_API_URL}/problems`).then((res) => res.json())