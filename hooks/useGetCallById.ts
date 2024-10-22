import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk"
import { useEffect, useState } from "react"

export const useGetCallById = (id: string | string[]) =>
{
    const [ call, setCall] = useState<Call>()
    const [ isCallLoading, setIsCallLoading ] = useState(true)

    const client = useStreamVideoClient();

    useEffect(() =>{
        if(!client) return; // if client does not exist we exit

        const loadCall = async () =>{
            const { calls } = await client.queryCalls({
                filter_conditions: {
                    id,
                }
            })

            if(calls.length > 0 ) setCall(calls[0])
                setIsCallLoading(false)
        }

        loadCall()
    }, [client, id])// we will reacall the useEffect if the client changes or the id we are trying to fetch changes

    return { call, isCallLoading, id}
}