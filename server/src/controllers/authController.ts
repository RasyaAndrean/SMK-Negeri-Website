import { Request, Response } from 'express';

// Mock user data for demonstration
const users = [
  {
    id: 1,
    username: 'student1',
    email: 'student1@example.com',
    password: 'password123', // In real app, this should be hashed
    role: 'student',
  },
  {
    id: 2,
    username: 'teacher1',
    email: 'teacher1@example.com',
    password: 'password123',
    role: 'teacher',
  },
  {
    id: 3,
    username: 'admin1',
    email: 'admin1@example.com',
    password: 'password123',
    role: 'admin',
  },
];

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res.status(400).json({
        error: {
          code: 'VALIDATION_ERROR',
          message: 'Email and password are required',
        },
      });
    }

    // Find user (in real app, this would be a database query)
    const user = users.find(u => u.email === email && u.password === password);

    if (!user) {
      return res.status(401).json({
        error: {
          code: 'INVALID_CREDENTIALS',
          message: 'Invalid email or password',
        },
      });
    }

    // In a real app, generate JWT token here
    const token = `mock-jwt-token-for-${user.id}`;

    res.json({
      token,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    res.status(500).json({
      error: {
        code: 'SERVER_ERROR',
        message: 'An error occurred during login',
      },
    });
  }
};

export const register = async (req: Request, res: Response) => {
  try {
    const { username, email, password, role } = req.body;

    // Validate input
    if (!username || !email || !password || !role) {
      return res.status(400).json({
        error: {
          code: 'VALIDATION_ERROR',
          message: 'Username, email, password, and role are required',
        },
      });
    }

    // Check if user already exists
    const existingUser = users.find(u => u.email === email);
    if (existingUser) {
      return res.status(409).json({
        error: {
          code: 'USER_EXISTS',
          message: 'User with this email already exists',
        },
      });
    }

    // Create new user (in real app, this would save to database)
    const newUser = {
      id: users.length + 1,
      username,
      email,
      password, // In real app, this should be hashed
      role,
    };

    users.push(newUser);

    res.status(201).json({
      message: 'User registered successfully',
      user: {
        id: newUser.id,
        username: newUser.username,
        email: newUser.email,
        role: newUser.role,
      },
    });
  } catch (error) {
    res.status(500).json({
      error: {
        code: 'SERVER_ERROR',
        message: 'An error occurred during registration',
      },
    });
  }
};

export const logout = async (req: Request, res: Response) => {
  try {
    // In a real app, invalidate the JWT token here
    res.json({
      message: 'Logged out successfully',
    });
  } catch (error) {
    res.status(500).json({
      error: {
        code: 'SERVER_ERROR',
        message: 'An error occurred during logout',
      },
    });
  }
};
