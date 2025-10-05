import { Request, Response } from 'express';

// Mock user data
const users = [
  {
    id: 101,
    username: 'andisaputra',
    email: 'andi@example.com',
    role: 'student',
    created_at: '2023-01-15T08:00:00Z',
  },
  {
    id: 201,
    username: 'budisantoso',
    email: 'budi@example.com',
    role: 'teacher',
    created_at: '2022-06-10T09:30:00Z',
  },
  {
    id: 301,
    username: 'admin1',
    email: 'admin1@example.com',
    role: 'admin',
    created_at: '2021-03-01T10:15:00Z',
  },
];

export const getAdminDashboard = async (req: Request, res: Response) => {
  try {
    // Mock statistics
    const statistics = {
      total_students: 2500,
      total_teachers: 150,
      total_majors: 25,
      new_applications: 120,
    };

    // Mock recent activities
    const recent_activities = [
      {
        action: 'New PPDB application',
        user: 'Admin Sekolah',
        timestamp: '2023-10-15T10:30:00Z',
      },
      {
        action: 'Grade submitted',
        user: 'Budi Santoso',
        timestamp: '2023-10-15T09:15:00Z',
      },
    ];

    res.json({
      statistics,
      recent_activities,
    });
  } catch (error) {
    res.status(500).json({
      error: {
        code: 'SERVER_ERROR',
        message: 'An error occurred while fetching admin dashboard',
      },
    });
  }
};

export const getUsers = async (req: Request, res: Response) => {
  try {
    // Extract query parameters
    const role = req.query.role as string;
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;

    let filteredUsers = [...users];

    // Filter by role if provided
    if (role) {
      filteredUsers = filteredUsers.filter(user => user.role === role);
    }

    // Paginate results
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedUsers = filteredUsers.slice(startIndex, endIndex);

    res.json({
      data: paginatedUsers,
      pagination: {
        current_page: page,
        total_pages: Math.ceil(filteredUsers.length / limit),
        total_items: filteredUsers.length,
        items_per_page: limit,
      },
    });
  } catch (error) {
    res.status(500).json({
      error: {
        code: 'SERVER_ERROR',
        message: 'An error occurred while fetching users',
      },
    });
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const { username, email, password, role, profile } = req.body;

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

    // Create new user
    const newUser = {
      id: users.length + 1,
      username,
      email,
      role,
      created_at: new Date().toISOString(),
    };

    users.push(newUser);

    res.status(201).json({
      message: 'User created successfully',
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
        message: 'An error occurred while creating user',
      },
    });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const userId = parseInt(req.params.id, 10);
    const { username, email, role } = req.body;

    // Find user
    const userIndex = users.findIndex(u => u.id === userId);
    if (userIndex === -1) {
      return res.status(404).json({
        error: {
          code: 'USER_NOT_FOUND',
          message: 'User not found',
        },
      });
    }

    // Update user
    users[userIndex] = {
      ...users[userIndex],
      username: username || users[userIndex].username,
      email: email || users[userIndex].email,
      role: role || users[userIndex].role,
    };

    res.json({
      message: 'User updated successfully',
      user: users[userIndex],
    });
  } catch (error) {
    res.status(500).json({
      error: {
        code: 'SERVER_ERROR',
        message: 'An error occurred while updating user',
      },
    });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const userId = parseInt(req.params.id, 10);

    // Find user
    const userIndex = users.findIndex(u => u.id === userId);
    if (userIndex === -1) {
      return res.status(404).json({
        error: {
          code: 'USER_NOT_FOUND',
          message: 'User not found',
        },
      });
    }

    // Remove user
    users.splice(userIndex, 1);

    res.json({
      message: 'User deleted successfully',
    });
  } catch (error) {
    res.status(500).json({
      error: {
        code: 'SERVER_ERROR',
        message: 'An error occurred while deleting user',
      },
    });
  }
};
