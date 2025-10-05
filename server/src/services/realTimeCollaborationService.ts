// Mock implementation of real-time collaboration service
// In a real implementation, this would use WebSockets or Socket.io

interface CollaborationSession {
  id: string;
  collaborationId: number;
  participants: {
    id: number;
    name: string;
    role: string;
    connected: boolean;
  }[];
  active: boolean;
  createdAt: Date;
}

interface CollaborationEvent {
  type: string;
  userId: number;
  userName: string;
  timestamp: Date;
  data: any;
}

class RealTimeCollaborationService {
  private sessions: Map<string, CollaborationSession> = new Map();
  private events: Map<string, CollaborationEvent[]> = new Map();

  // Create a new collaboration session
  createSession(collaborationId: number): string {
    const sessionId = `session_${Date.now()}_${Math.floor(
      Math.random() * 10000
    )}`;

    const session: CollaborationSession = {
      id: sessionId,
      collaborationId,
      participants: [],
      active: true,
      createdAt: new Date(),
    };

    this.sessions.set(sessionId, session);
    this.events.set(sessionId, []);

    return sessionId;
  }

  // Join a collaboration session
  joinSession(
    sessionId: string,
    userId: number,
    userName: string,
    role: string
  ): boolean {
    const session = this.sessions.get(sessionId);

    if (!session) {
      return false;
    }

    // Check if user is already in the session
    const existingParticipant = session.participants.find(p => p.id === userId);

    if (existingParticipant) {
      existingParticipant.connected = true;
    } else {
      session.participants.push({
        id: userId,
        name: userName,
        role,
        connected: true,
      });
    }

    // Log join event
    this.logEvent(sessionId, {
      type: 'user_joined',
      userId,
      userName,
      timestamp: new Date(),
      data: { role },
    });

    return true;
  }

  // Leave a collaboration session
  leaveSession(sessionId: string, userId: number): boolean {
    const session = this.sessions.get(sessionId);

    if (!session) {
      return false;
    }

    const participant = session.participants.find(p => p.id === userId);

    if (participant) {
      participant.connected = false;

      // Log leave event
      this.logEvent(sessionId, {
        type: 'user_left',
        userId,
        userName: participant.name,
        timestamp: new Date(),
        data: {},
      });

      return true;
    }

    return false;
  }

  // Send a message in the collaboration session
  sendMessage(
    sessionId: string,
    userId: number,
    userName: string,
    message: string
  ): boolean {
    const session = this.sessions.get(sessionId);

    if (!session) {
      return false;
    }

    // Log message event
    this.logEvent(sessionId, {
      type: 'message',
      userId,
      userName,
      timestamp: new Date(),
      data: { message },
    });

    return true;
  }

  // Update user status in the collaboration session
  updateUserStatus(sessionId: string, userId: number, status: string): boolean {
    const session = this.sessions.get(sessionId);

    if (!session) {
      return false;
    }

    const participant = session.participants.find(p => p.id === userId);

    if (participant) {
      // Log status update event
      this.logEvent(sessionId, {
        type: 'status_update',
        userId,
        userName: participant.name,
        timestamp: new Date(),
        data: { status },
      });

      return true;
    }

    return false;
  }

  // Share a file in the collaboration session
  shareFile(
    sessionId: string,
    userId: number,
    userName: string,
    fileName: string,
    fileUrl: string
  ): boolean {
    const session = this.sessions.get(sessionId);

    if (!session) {
      return false;
    }

    // Log file share event
    this.logEvent(sessionId, {
      type: 'file_shared',
      userId,
      userName,
      timestamp: new Date(),
      data: { fileName, fileUrl },
    });

    return true;
  }

  // Get session information
  getSessionInfo(sessionId: string): CollaborationSession | null {
    return this.sessions.get(sessionId) || null;
  }

  // Get recent events for a session
  getSessionEvents(
    sessionId: string,
    limit: number = 50
  ): CollaborationEvent[] {
    const events = this.events.get(sessionId);

    if (!events) {
      return [];
    }

    // Return the most recent events
    return events.slice(-limit);
  }

  // Log an event
  private logEvent(sessionId: string, event: CollaborationEvent): void {
    const events = this.events.get(sessionId);

    if (events) {
      events.push(event);

      // Keep only the last 1000 events to prevent memory issues
      if (events.length > 1000) {
        events.shift();
      }
    }
  }

  // End a collaboration session
  endSession(sessionId: string): boolean {
    const session = this.sessions.get(sessionId);

    if (!session) {
      return false;
    }

    session.active = false;

    // Log session end event
    this.logEvent(sessionId, {
      type: 'session_ended',
      userId: 0, // System event
      userName: 'System',
      timestamp: new Date(),
      data: {},
    });

    return true;
  }

  // Get all active sessions
  getActiveSessions(): CollaborationSession[] {
    const activeSessions: CollaborationSession[] = [];

    this.sessions.forEach(session => {
      if (session.active) {
        activeSessions.push(session);
      }
    });

    return activeSessions;
  }
}

// Export a singleton instance
export default new RealTimeCollaborationService();
