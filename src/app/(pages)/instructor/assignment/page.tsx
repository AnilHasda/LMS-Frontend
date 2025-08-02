import useFetchData from "@/app/hooks/FetchData";
import { Clapperboard } from "lucide-react";
import { useEffect } from "react";
import { ClipLoader } from "react-spinners";
const Assignment=()=>{
    const { getData, result, responseError, loading } = useFetchData();

    useEffect(()=>{
(async ()=>{
await getData("/assignments");
})();
    },[])

if(responseError){
    return (
        <div className="text-red-500">
            <Clapperboard className="inline mr-2" />
            {responseError || "An error occurred while fetching assignments."}
        </div>
    );
}

return(
    <div className="">
{
    loading ? (
<ClipLoader size={30}/>
    ): 
        result?.data?.length>0 ? :
    
}
    </div>
)
}
export default Assignment;