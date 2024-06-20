
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://codeguru.isaac0yen.com',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const registerUser = async (formData) => {
  try {
    const response = await instance.post('/api/users/register', formData);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const loginUser = async (formData) => {
  try {
    const response = await instance.post('/api/users/login', formData);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const submitReview = async (formData) => {
  try {
    const response = await instance.post('/api/reviews', formData);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const getReviews = async () => {
  try {
    const response = await instance.get('/api/reviews');
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

const handleError = (error) => {
  if (error.response) {
    console.error('Server Error:', error.response.data);
    throw new Error(error.response.data.message || 'Server Error');
  } else if (error.request) {
    console.error('Network Error:', error.request);
    throw new Error('Network Error');
  } else {
    console.error('Request Error:', error.message);
    throw new Error('Request Error');
  }
};
