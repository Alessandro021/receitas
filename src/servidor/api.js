import axios from "axios"

//json-server --watch -d 180 --host 192.168.1.104 db.json

const api = axios.create({
    baseURL: 'https://api-receitas.vercel.app'
})

export default api;