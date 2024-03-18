import axios from "axios";

export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key:"fb7d1c5ee4ef4fe6af8dfa885cdb04bf",
    }
})