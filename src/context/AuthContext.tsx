import React, { createContext, useContext, useReducer, ReactNode, useEffect } from 'react';
import { User, AuthState } from '../types';

type AuthAction =
  | { type: 'LOGIN_START' }
  | { type: 'LOGIN_SUCCESS'; payload: User }
  | { type: 'LOGIN_FAILURE' }
  | { type: 'LOGOUT' }
  | { type: 'REGISTER_SUCCESS'; payload: User };

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  isLoading: false
};

function authReducer(state: AuthState, action: AuthAction): AuthState {
  switch (action.type) {
    case 'LOGIN_START':
      return { ...state, isLoading: true };
    
    case 'LOGIN_SUCCESS':
    case 'REGISTER_SUCCESS':
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        isLoading: false
      };
    
    case 'LOGIN_FAILURE':
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        isLoading: false
      };
    
    case 'LOGOUT':
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        isLoading: false
      };
    
    default:
      return state;
  }
}

const AuthContext = createContext<{
  state: AuthState;
  dispatch: React.Dispatch<AuthAction>;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
} | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Mock users database (in real app, this would be API calls)
  const mockUsers: User[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com', password: 'password123', role: 'user' },
    { id: 2, name: 'Admin User', email: 'admin@example.com', password: 'admin123', role: 'admin' }
  ];

  useEffect(() => {
    // Check for stored user session
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      dispatch({ type: 'LOGIN_SUCCESS', payload: user });
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    dispatch({ type: 'LOGIN_START' });
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const user = mockUsers.find(u => u.email === email && u.password === password);
    
    if (user) {
      const userWithoutPassword = { ...user };
      delete userWithoutPassword.password;
      
      localStorage.setItem('user', JSON.stringify(userWithoutPassword));
      dispatch({ type: 'LOGIN_SUCCESS', payload: userWithoutPassword });
      return true;
    } else {
      dispatch({ type: 'LOGIN_FAILURE' });
      return false;
    }
  };

  const register = async (name: string, email: string, password: string): Promise<boolean> => {
    dispatch({ type: 'LOGIN_START' });
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Check if user already exists
    const existingUser = mockUsers.find(u => u.email === email);
    if (existingUser) {
      dispatch({ type: 'LOGIN_FAILURE' });
      return false;
    }
    
    // Create new user
    const newUser: User = {
      id: mockUsers.length + 1,
      name,
      email,
      role: 'user'
    };
    
    mockUsers.push({ ...newUser, password });
    localStorage.setItem('user', JSON.stringify(newUser));
    dispatch({ type: 'REGISTER_SUCCESS', payload: newUser });
    return true;
  };

  const logout = () => {
    localStorage.removeItem('user');
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <AuthContext.Provider value={{ state, dispatch, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}