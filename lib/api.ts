const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001/api';

// Helper function to get auth headers
const getAuthHeaders = () => {
  const token = localStorage.getItem('token');
  return {
    'Content-Type': 'application/json',
    'Authorization': token ? `Bearer ${token}` : '',
  };
};

// Auth API calls
export const authAPI = {
  register: async (userData: { name: string; email: string; password: string; userType: string }) => {
    try {
      const response = await fetch(`${API_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(userData),
      });
      
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Registration failed');
      }
      
      // Store the token in localStorage
      if (data.data.token) {
        localStorage.setItem('token', data.data.token);
      }
      
      return data.data;
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    }
  },

  login: async (credentials: { email: string; password: string }) => {
    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(credentials),
      });
      
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      // Store the token in localStorage
      if (data.data.token) {
        localStorage.setItem('token', data.data.token);
      }
      
      return data.data;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  },

  getMe: async () => {
    try {
      const response = await fetch(`${API_URL}/auth/me`, {
        headers: getAuthHeaders(),
        credentials: 'include',
      });
      
      const data = await response.json();
      if (!response.ok) {
        // If unauthorized, clear the token
        if (response.status === 401) {
          localStorage.removeItem('token');
        }
        throw new Error(data.message || 'Failed to get user data');
      }
      
      return data.data;
    } catch (error) {
      console.error('Get me error:', error);
      throw error;
    }
  },

  logout: async () => {
    try {
      const response = await fetch(`${API_URL}/auth/logout`, {
        method: 'POST',
        headers: getAuthHeaders(),
        credentials: 'include',
      });
      
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Logout failed');
      }

      // Clear the token from localStorage
      localStorage.removeItem('token');
      
      return data;
    } catch (error) {
      console.error('Logout error:', error);
      throw error;
    }
  }
};

// Contact API calls
export const contactAPI = {
  submitContact: async (contactData: { name: string; email: string; subject: string; message: string }) => {
    try {
      const response = await fetch(`${API_URL}/contact`, {
        method: 'POST',
        headers: getAuthHeaders(),
        credentials: 'include',
        body: JSON.stringify(contactData),
      });
      
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Contact submission failed');
      }
      
      return data;
    } catch (error) {
      console.error('Contact submission error:', error);
      throw error;
    }
  },
}; 