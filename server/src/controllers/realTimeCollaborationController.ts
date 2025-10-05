import { Request, Response } from 'express';
import realTimeCollaborationService from '../services/realTimeCollaborationService';

// Store active sessions in memory (in production, this would be in a database or Redis)
const activeSessions: { [key: string]: string } = {};

export const createSession = async (req: Request, res: Response) => {
  try {
    const { collaboration_id } = req.body;
    const userId = (req as any).user.id;
    const userName = (req as any).user.name || 'User';

    // Validate input
    if (!collaboration_id) {
      return res.status(400).json({
        error: {
          code: 'VALIDATION_ERROR',
          message: 'Collaboration ID is required',
        },
      });
    }

    // Create a new session
    const sessionId =
      realTimeCollaborationService.createSession(collaboration_id);

    // Store the session ID for this collaboration
    activeSessions[collaboration_id] = sessionId;

    // Join the session as the creator
    realTimeCollaborationService.joinSession(
      sessionId,
      userId,
      userName,
      'creator'
    );

    res.status(201).json({
      session_id: sessionId,
      message: 'Collaboration session created successfully',
    });
  } catch (error) {
    res.status(500).json({
      error: {
        code: 'SERVER_ERROR',
        message: 'An error occurred while creating collaboration session',
      },
    });
  }
};

export const joinSession = async (req: Request, res: Response) => {
  try {
    const { session_id } = req.params;
    const { role } = req.body;
    const userId = (req as any).user.id;
    const userName = (req as any).user.name || 'User';

    // Validate input
    if (!session_id) {
      return res.status(400).json({
        error: {
          code: 'VALIDATION_ERROR',
          message: 'Session ID is required',
        },
      });
    }

    // Join the session
    const success = realTimeCollaborationService.joinSession(
      session_id,
      userId,
      userName,
      role || 'participant'
    );

    if (!success) {
      return res.status(404).json({
        error: {
          code: 'SESSION_NOT_FOUND',
          message: 'Collaboration session not found',
        },
      });
    }

    res.json({
      message: 'Successfully joined collaboration session',
    });
  } catch (error) {
    res.status(500).json({
      error: {
        code: 'SERVER_ERROR',
        message: 'An error occurred while joining collaboration session',
      },
    });
  }
};

export const leaveSession = async (req: Request, res: Response) => {
  try {
    const { session_id } = req.params;
    const userId = (req as any).user.id;

    // Validate input
    if (!session_id) {
      return res.status(400).json({
        error: {
          code: 'VALIDATION_ERROR',
          message: 'Session ID is required',
        },
      });
    }

    // Leave the session
    const success = realTimeCollaborationService.leaveSession(
      session_id,
      userId
    );

    if (!success) {
      return res.status(404).json({
        error: {
          code: 'SESSION_NOT_FOUND',
          message: 'Collaboration session not found',
        },
      });
    }

    res.json({
      message: 'Successfully left collaboration session',
    });
  } catch (error) {
    res.status(500).json({
      error: {
        code: 'SERVER_ERROR',
        message: 'An error occurred while leaving collaboration session',
      },
    });
  }
};

export const sendMessage = async (req: Request, res: Response) => {
  try {
    const { session_id } = req.params;
    const { message } = req.body;
    const userId = (req as any).user.id;
    const userName = (req as any).user.name || 'User';

    // Validate input
    if (!session_id || !message) {
      return res.status(400).json({
        error: {
          code: 'VALIDATION_ERROR',
          message: 'Session ID and message are required',
        },
      });
    }

    // Send the message
    const success = realTimeCollaborationService.sendMessage(
      session_id,
      userId,
      userName,
      message
    );

    if (!success) {
      return res.status(404).json({
        error: {
          code: 'SESSION_NOT_FOUND',
          message: 'Collaboration session not found',
        },
      });
    }

    res.json({
      message: 'Message sent successfully',
    });
  } catch (error) {
    res.status(500).json({
      error: {
        code: 'SERVER_ERROR',
        message: 'An error occurred while sending message',
      },
    });
  }
};

export const getSessionInfo = async (req: Request, res: Response) => {
  try {
    const { session_id } = req.params;

    // Validate input
    if (!session_id) {
      return res.status(400).json({
        error: {
          code: 'VALIDATION_ERROR',
          message: 'Session ID is required',
        },
      });
    }

    // Get session information
    const sessionInfo = realTimeCollaborationService.getSessionInfo(session_id);

    if (!sessionInfo) {
      return res.status(404).json({
        error: {
          code: 'SESSION_NOT_FOUND',
          message: 'Collaboration session not found',
        },
      });
    }

    res.json(sessionInfo);
  } catch (error) {
    res.status(500).json({
      error: {
        code: 'SERVER_ERROR',
        message: 'An error occurred while fetching session information',
      },
    });
  }
};

export const getSessionEvents = async (req: Request, res: Response) => {
  try {
    const { session_id } = req.params;
    const { limit } = req.query;

    const limitNum = limit ? parseInt(limit as string) : 50;

    // Validate input
    if (!session_id) {
      return res.status(400).json({
        error: {
          code: 'VALIDATION_ERROR',
          message: 'Session ID is required',
        },
      });
    }

    // Get session events
    const events = realTimeCollaborationService.getSessionEvents(
      session_id,
      limitNum
    );

    res.json(events);
  } catch (error) {
    res.status(500).json({
      error: {
        code: 'SERVER_ERROR',
        message: 'An error occurred while fetching session events',
      },
    });
  }
};

export const shareFile = async (req: Request, res: Response) => {
  try {
    const { session_id } = req.params;
    const { file_name, file_url } = req.body;
    const userId = (req as any).user.id;
    const userName = (req as any).user.name || 'User';

    // Validate input
    if (!session_id || !file_name || !file_url) {
      return res.status(400).json({
        error: {
          code: 'VALIDATION_ERROR',
          message: 'Session ID, file name, and file URL are required',
        },
      });
    }

    // Share the file
    const success = realTimeCollaborationService.shareFile(
      session_id,
      userId,
      userName,
      file_name,
      file_url
    );

    if (!success) {
      return res.status(404).json({
        error: {
          code: 'SESSION_NOT_FOUND',
          message: 'Collaboration session not found',
        },
      });
    }

    res.json({
      message: 'File shared successfully',
    });
  } catch (error) {
    res.status(500).json({
      error: {
        code: 'SERVER_ERROR',
        message: 'An error occurred while sharing file',
      },
    });
  }
};

export const endSession = async (req: Request, res: Response) => {
  try {
    const { session_id } = req.params;

    // Validate input
    if (!session_id) {
      return res.status(400).json({
        error: {
          code: 'VALIDATION_ERROR',
          message: 'Session ID is required',
        },
      });
    }

    // End the session
    const success = realTimeCollaborationService.endSession(session_id);

    if (!success) {
      return res.status(404).json({
        error: {
          code: 'SESSION_NOT_FOUND',
          message: 'Collaboration session not found',
        },
      });
    }

    res.json({
      message: 'Collaboration session ended successfully',
    });
  } catch (error) {
    res.status(500).json({
      error: {
        code: 'SERVER_ERROR',
        message: 'An error occurred while ending collaboration session',
      },
    });
  }
};
