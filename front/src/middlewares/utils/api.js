import axios from "axios";
// on peut pré-configurer une instance d'axios
// ici on passe le baseUrl, ainsi quand on utilisera "api"
// on aura pas besoin de préciser cette valeur de baseUrl
const api = axios.create({
  baseURL: "https://coding--dojo.herokuapp.com/api/v1.0/",
  timeout: 2500,
});

export default api;
