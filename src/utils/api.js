import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export const chatAPI = {
  sendMessage: (message, chatHistory = []) => 
    api.post('/chat', { message, chatHistory }),
  getHistory: () => api.get('/chat/history'),
  clearHistory: () => api.delete('/chat/history'),
};

export const aiAPI = {
  generateText: (prompt) => api.post('/generate-text', { prompt }),
  textToSpeech: (text) => api.post('/text-to-speech', { text }),
  generateTextAdvanced: (prompt, options = {}) => 
    api.post('/generate-text', { 
      prompt, 
      max_tokens: options.maxTokens || 300,
      temperature: options.temperature || 0.7 
    }),
};

export const emailAPI = {
  sendFeedback: (feedbackData) => api.post('/email/feedback', feedbackData),
  sendSupportRequest: (supportData) => api.post('/email/support', supportData),
};

export const translationAPI = {
  translate: (text, targetLang) => api.post('/translate', { text, targetLang }),
  translateBatch: (texts, targetLang) => 
    api.post('/translate/batch', { texts, targetLang }),
};

export const authAPI = {
  login: (data) => api.post('/auth/login', data),
  register: (data) => api.post('/auth/register', data),
  logout: () => api.post('/auth/logout'),
  getProfile: () => api.get('/auth/profile'),
  updateProfile: (data) => api.put('/auth/profile', data),
};

export const systemAPI = {
  health: () => api.get('/health'),
  status: () => api.get('/status'),
  version: () => api.get('/version'),
};

export const handleApiError = (error) => {
  const message = error.response?.data?.message || error.message || 'An unexpected error occurred';
  console.error('API Error:', message);
  return { success: false, error: message };
};

export const handleApiResponse = (response) => {
  return response.data;
};

export const uploadFile = (file, endpoint = '/upload') => {
  const formData = new FormData();
  formData.append('file', file);
  
  return api.post(endpoint, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export default api;
