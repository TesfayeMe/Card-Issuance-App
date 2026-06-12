const API_BASE_URL = import.meta.env.VITE_API_BASE_URL; 
const signupService = async (signupData)=>{
const response  = await fetch(`${API_BASE_URL}/users/update/profile`,{
    method: 'put',
    headers: {
        'Content-Type': 'Application/json'
    },
    body: JSON.stringify(signupData)
})
return response;
}
export default signupService;