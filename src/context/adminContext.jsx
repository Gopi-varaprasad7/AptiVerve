import { createContext, useContext, useState } from "react";
import { toast } from "react-hot-toast";

// Create Context
const AdminContext = createContext();

// API Base URL
const BASE_URL = "http://localhost:3001/api";

// Provider Component
export const AdminProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("adminToken") || "");

  // ---------------------------
  // LOGIN ADMIN
  // ---------------------------
  const loginAdmin = async (email, password) => {
    try {
      const res = await fetch(`${BASE_URL}/admin/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message);
        throw new Error(data.message);
      }

      setAdmin(data.admin);
      setToken(data.token);
      localStorage.setItem("adminToken", data.token);

      toast.success("Admin Logged in Successfully");
      return data;
    } catch (err) {
      toast.error(err.message);
      throw err;
    }
  };

  // Auth headers for protected routes
  const authHeaders = () => ({
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  });

  // ---------------------------
  // CREATE QUESTION
  // ---------------------------
  const createQuestion = async (questionData) => {
    try {
      const res = await fetch(`${BASE_URL}/admin/create/question`, {
        method: "POST",
        headers: authHeaders(),
        body: JSON.stringify(questionData),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message);
        throw new Error(data.message);
      }

      toast.success("Question Created Successfully");
      return data;
    } catch (err) {
      toast.error(err.message);
      throw err;
    }
  };

  // ---------------------------
  // EDIT QUESTION
  // ---------------------------
  const editQuestion = async (id, questionData) => {
    try {
      const res = await fetch(`${BASE_URL}/admin/edit/question/${id}`, {
        method: "PUT",
        headers: authHeaders(),
        body: JSON.stringify(questionData),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message);
        throw new Error(data.message);
      }

      toast.success("Question Updated Successfully");
      return data;
    } catch (err) {
      toast.error(err.message);
      throw err;
    }
  };

  // ---------------------------
  // DELETE QUESTION
  // ---------------------------
  const deleteQuestion = async (id) => {
    try {
      const res = await fetch(`${BASE_URL}/admin/delete/question/${id}`, {
        method: "DELETE",
        headers: authHeaders(),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message);
        throw new Error(data.message);
      }

      toast.success("Question Deleted Successfully");
      return data;
    } catch (err) {
      toast.error(err.message);
      throw err;
    }
  };

  // ---------------------------
  // GET ALL USERS
  // ---------------------------
  const getAllUsers = async () => {
    try {
      const res = await fetch(`${BASE_URL}/admin/users`, {
        method: "GET",
        headers: authHeaders(),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message);
        throw new Error(data.message);
      }

      toast.success("Fetched All Users");
      return data;
    } catch (err) {
      toast.error(err.message);
      throw err;
    }
  };

  // ---------------------------
  // GET USER BY ID
  // ---------------------------
  const getUser = async (id) => {
    try {
      const res = await fetch(`${BASE_URL}/admin/user/${id}`, {
        method: "GET",
        headers: authHeaders(),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message);
        throw new Error(data.message);
      }

      toast.success("Fetched User Details");
      return data;
    } catch (err) {
      toast.error(err.message);
      throw err;
    }
  };

  // ---------------------------
  // DELETE USER
  // ---------------------------
  const deleteUser = async (id) => {
    try {
      const res = await fetch(`${BASE_URL}/admin/user/delete/${id}`, {
        method: "DELETE",
        headers: authHeaders(),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message);
        throw new Error(data.message);
      }

      toast.success("User Deleted Successfully");
      return data;
    } catch (err) {
      toast.error(err.message);
      throw err;
    }
  };

  return (
    <AdminContext.Provider
      value={{
        admin,
        token,
        loginAdmin,
        createQuestion,
        editQuestion,
        deleteQuestion,
        getAllUsers,
        getUser,
        deleteUser,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

// Custom Hook
// eslint-disable-next-line react-refresh/only-export-components
export const useAdmin = () => useContext(AdminContext);
