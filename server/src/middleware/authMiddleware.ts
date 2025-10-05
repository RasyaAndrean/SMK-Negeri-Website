import { NextFunction, Request, Response } from 'express';

// Mock user roles for demonstration
const userRoles: { [key: string]: string } = {
  '1': 'student',
  '2': 'teacher',
  '3': 'admin',
};

export const authenticate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // Get token from header
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({
        error: {
          code: 'UNAUTHORIZED',
          message: 'Access token is required',
        },
      });
    }

    const token = authHeader.split(' ')[1];

    // In a real application, we would verify the JWT token here
    // For demo purposes, we'll just check if it's a valid mock token
    if (!token.startsWith('mock-jwt-token-for-')) {
      return res.status(401).json({
        error: {
          code: 'INVALID_TOKEN',
          message: 'Invalid access token',
        },
      });
    }

    // Extract user ID from token
    const userId = parseInt(token.split('-')[3], 10);

    // Add user info to request object
    (req as any).user = {
      id: userId,
      role: userRoles[userId] || 'student',
    };

    next();
  } catch (error) {
    res.status(500).json({
      error: {
        code: 'SERVER_ERROR',
        message: 'An error occurred during authentication',
      },
    });
  }
};

export const authorize = (...allowedRoles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = (req as any).user;

      if (!user) {
        return res.status(401).json({
          error: {
            code: 'UNAUTHORIZED',
            message: 'Authentication required',
          },
        });
      }

      if (!allowedRoles.includes(user.role)) {
        return res.status(403).json({
          error: {
            code: 'FORBIDDEN',
            message: 'Insufficient permissions',
          },
        });
      }

      next();
    } catch (error) {
      res.status(500).json({
        error: {
          code: 'SERVER_ERROR',
          message: 'An error occurred during authorization',
        },
      });
    }
  };
};
