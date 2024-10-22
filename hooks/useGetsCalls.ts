import { useUser } from "@clerk/nextjs"
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk"
import { useEffect, useState } from "react"

export const useGetCalls = () => {
    const [calls, setCalls] = useState<Call[]>([])
    const [isLoading, setisLoading] = useState(false)
    const client = useStreamVideoClient();  //  through this we acn fetch our calls
    const { user } = useUser(); // fecthing calls for specific user

    useEffect(() =>{
        const loadCalls = async ()=> {
            if(!client || !user?.id) return // exit out of the function

            setisLoading(true)// else setting the is laoding to true

            try{
                const { calls } = await client.queryCalls({
                    sort: [{ field: 'starts_at', direction: -1}],
                    filter_conditions:{
                        starts_at:{$exists: true},// filter them by weather the start at proprrty exist
                        $or:[
                            { created_by_user_id: user.id},//i we are the one who created it
                            { members: { $in: [user.id ]}},// or we are the member
                        ]
                    }
                })
                setCalls(calls)
            }catch (error){

            }finally{
              setisLoading(false)  
            }
        }

        loadCalls()
    }, [client, user?.id])

    const now = new Date();// if its after now its ended call and if its before now its upcoming call 
    const endedCalls = calls.filter(({ state: { startsAt,
        endedAt
    }}: Call)=> {
        return (startsAt && new Date (startsAt)<now || 
        !!endedAt
    )
    })
    const upcomingCalls = calls.filter(({state:{
        startsAt
    }}: Call) =>{
        return startsAt && new Date(startsAt) > now
    })

    return {
        endedCalls,
        upcomingCalls,
        callRecordings: calls,
        isLoading,
    }
}