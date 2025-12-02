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
    qid,
    question,
    category,
    isCorrect,
  }) => {
    try {
      const res = await fetch(`${base_url}/user/solved`, {
        method: 'POST',
        headers: authHeaders(),
        body: JSON.stringify({ qid, question, category, isCorrect }),
      });

      return await res.json();
    } catch (e) {
      console.error(e);
      toast.error('Error updating solved');
    }
  };

  return (
    <UserContext.Provider
      value={{
        postSolvedQuestions,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
