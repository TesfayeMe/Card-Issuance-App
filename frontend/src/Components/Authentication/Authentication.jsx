const API_BASE_URL = import.meta.env.VITE_API_BASE_URL; 
const Authentication = async (userToken)=>{
    const checkUser = await fetch(`${API_BASE_URL}/auth/check-user`,{
        method: 'get',
        headers: {
            'Content-Type': 'Application/json',
            'user-access-token': userToken
        }
    })
    const result = await checkUser.json();
    // console.log(result)
return result
}
export default Authentication;