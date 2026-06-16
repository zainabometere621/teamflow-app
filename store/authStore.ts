import { create } from "zustand";
import { setItem, getItem, removeItem } from "@/lib/db";

interface AuthState {
  // state
  currentUser: { name: string; email: string; role: string } | null;
  isLoggedIn: boolean;

  // action
  login: (email: string, password: string,  role: string) => boolean;
  register: (
    name: string,
    password: string,
    email: string,
    role: string,
  ) => void;
  logout: () => void;
}

// zustand store

export const useAuthStore = create<AuthState>((set) => ({
  currentUser: null,
  isLoggedIn: false,

  login: (email: string, password: string, role: string) => {
    const users: {
      name: string;
      email: string;
      password: string;
      role: string;
    }[] = getItem("users") || [];
    const user = users.find(
      (u: { name: string; email: string; password: string; role: string }) =>
        u.email === email && u.password === password && u.role === role,
    );
    if (user) {
      set({
        currentUser: { name: user.name, email: user.email, role: user.role },
        isLoggedIn: true,
      });
      return true;
    } else {
  return false;
    }
    
  },
  register: (name: string, password: string, email: string, role: string) => {
    const users = getItem("users") || [];
    const newUser = { name, email, password, role };
    setItem("users", [...users, newUser]);

    set({
      currentUser: { name: name, email: email, role: role },
      isLoggedIn: true,
    });
  },
  logout: () => set({ currentUser: null, isLoggedIn: false }),
}));
