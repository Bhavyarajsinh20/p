import useData from "./useData";

interface Platform{
    id:number;
    name:string;
    slug:string;
}

const usePlanforms = () => useData<Platform>('/platforms/lists/parents');

export default usePlanforms;