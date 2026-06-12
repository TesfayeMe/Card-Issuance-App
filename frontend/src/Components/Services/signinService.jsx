const API_BASE_URL = import.meta.env.VITE_API_BASE_URL; 
const signinService = async (userData) => {
  console.log('Signing in with:', userData);
  console.log('API Base URL:', API_BASE_URL);

//   try {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    });
return response;
} 

export { signinService };