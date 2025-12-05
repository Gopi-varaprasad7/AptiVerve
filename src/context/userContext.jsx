import { createContext, useContext, useState } from 'react';
import { toast } from 'react-hot-toast';

const UserContext = createContext();

const base_url = 'http://localhost:3001/api';

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('adminToken') || '');

  const authHeaders = () => ({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  });

  // ---------- AI EXPLANATION API ----------
  const postSolvedQuestions = async ({
    userId,
    qid,
    question,
    category,
    correct,
  }) => {
    try {
      const res = await fetch(`${base_url}/user/solved`, {
        method: 'POST',
        headers: authHeaders(),
        body: JSON.stringify({ userId, qid, question, category, correct }),
      });

      return await res.json();
    } catch (e) {
      console.error(e);
      toast.error('Error updating solved');
    }
  };

  const explain = async (question) => {
    try {
      const res = await fetch(`${base_url}/user/explain`, {
        method: 'POST',
        headers: authHeaders(),
        body: JSON.stringify({ question }),
      });

      const data = await res.json();
      return data.explanation;
    } catch (e) {
      console.error(e);
      toast.error('Error fetching explanation');
    }
  };

  const getUser = async (userId) => {
    try {
      const res = await fetch(`${base_url}/user?userId=${userId}`, {
        method: 'GET',
        headers: authHeaders(),
      });

      const data = await res.json();
      return data.user;
    } catch (e) {
      console.error(e);
      toast.error('Error fetching user data');
    }
  };

  return (
    <UserContext.Provider
      value={{
        postSolvedQuestions,
        explain,
        getUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
