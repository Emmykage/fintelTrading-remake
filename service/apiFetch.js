
import axios from 'axios';
import { baseUrl } from '../assets/api/baseUrl';
// import { useToast } from '@nuxtjs/toast'; // Import $toast plugin
// import { useRouter } from 'vue-router'; // Import router instance

export async function loginUser(user) {
  // const $toast = useToast(); // Initialize $toast plugin
  // const $router = useRouter(); // Initialize router instance
  try {
    const response = await axios.post(`${baseUrl}users`, {user});
    const data = response

    if (data?.errors) {
      this.$toastr.e(data.errors[0].message)
    } else {

      window.localStorage.setItem('auth', JSON.stringify(data?.data?.userLogin?.jwt))
      window.localStorage.setItem('user', JSON.stringify(data?.data?.userLogin?.user))
      $toastr.s('Login was successful')
      $router.push('/dashboard')
      // return response.data;

    }

  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}


export async function registerUser(data) {
  try {
    const response = await axios.post(baseUrl);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}


export async function login(data) {
  try {
    const response = await axios.get(baseUrl);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}
