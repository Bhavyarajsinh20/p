import axios from "axios";

export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key:"29d6e2f5bb234acca073683501088a5b",
    }
})