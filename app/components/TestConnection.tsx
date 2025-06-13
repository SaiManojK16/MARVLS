'use client';

import { useState } from 'react';
import { authAPI, contactAPI } from '../services/api';

export default function TestConnection() {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const testRegister = async () => {
    try {
      setLoading(true);
      const response = await authAPI.register({
        name: 'Test User',
        email: 'test@example.com',
        password: 'password123'
      });
      setMessage(JSON.stringify(response, null, 2));
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const testContact = async () => {
    try {
      setLoading(true);
      const response = await contactAPI.submitContact({
        name: 'Test User',
        email: 'test@example.com',
        subject: 'Test Subject',
        message: 'This is a test message'
      });
      setMessage(JSON.stringify(response, null, 2));
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Test Backend Connection</h2>
      <div className="space-y-4">
        <button
          onClick={testRegister}
          disabled={loading}
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          Test Register
        </button>
        <button
          onClick={testContact}
          disabled={loading}
          className="bg-green-500 text-white px-4 py-2 rounded disabled:opacity-50 ml-4"
        >
          Test Contact
        </button>
        {message && (
          <pre className="mt-4 p-4 bg-gray-100 rounded">
            {message}
          </pre>
        )}
      </div>
    </div>
  );
} 