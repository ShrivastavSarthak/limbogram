export const setCurrent = (data)=>{
    return{
        type: "FETCH_CURRENT_USER",
        payload: data
    }
}