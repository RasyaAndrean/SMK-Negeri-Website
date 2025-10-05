import { Request, Response } from 'express';

// Mock collaboration data with detailed learning path information
const collaborations = [
  {
    id: 1,
    title: 'Web Development Project Collaboration',
    description:
      'Collaborative project for RPL students to build a full-stack web application',
    learning_path: {
      id: 101,
      name: 'Full-Stack Web Development',
      description:
        'Comprehensive path covering frontend, backend, and database development',
      duration: '12 weeks',
      skills: ['HTML/CSS', 'JavaScript', 'Node.js', 'React', 'PostgreSQL'],
      objectives: [
        'Build responsive web interfaces',
        'Create RESTful APIs',
        'Implement database design',
        'Deploy applications to cloud platforms',
      ],
      prerequisites: ['Basic Programming', 'HTML Fundamentals'],
      certification: 'Full-Stack Web Developer Certificate',
      industry_alignment: 'High demand in tech industry',
    },
    participants: [
      {
        id: 101,
        name: 'Andi Saputra',
        role: 'Frontend Developer',
        skills: ['React', 'CSS', 'JavaScript'],
      },
      {
        id: 102,
        name: 'Budi Prasetyo',
        role: 'Backend Developer',
        skills: ['Node.js', 'Express', 'MongoDB'],
      },
      {
        id: 103,
        name: 'Cinta Dewi',
        role: 'UI/UX Designer',
        skills: ['Figma', 'Adobe XD', 'User Research'],
      },
    ],
    status: 'active',
    created_at: '2023-10-15T10:30:00Z',
    updated_at: '2023-10-16T14:20:00Z',
    progress: 65,
    milestones: [
      {
        id: 1,
        name: 'Project Planning',
        completed: true,
        due_date: '2023-10-20',
      },
      {
        id: 2,
        name: 'Frontend Development',
        completed: true,
        due_date: '2023-11-05',
      },
      {
        id: 3,
        name: 'Backend Development',
        completed: false,
        due_date: '2023-11-20',
      },
      {
        id: 4,
        name: 'Testing & Deployment',
        completed: false,
        due_date: '2023-12-05',
      },
    ],
  },
  {
    id: 2,
    title: 'Network Infrastructure Design',
    description:
      'Designing a complete network infrastructure for a small business',
    learning_path: {
      id: 102,
      name: 'Network Infrastructure Planning',
      description:
        'Comprehensive path covering network design, implementation, and security',
      duration: '8 weeks',
      skills: [
        'Network Topology',
        'Cisco IOS',
        'Firewall Configuration',
        'VPN Setup',
      ],
      objectives: [
        'Design scalable network architectures',
        'Configure enterprise-grade routers and switches',
        'Implement network security protocols',
        'Troubleshoot network issues',
      ],
      prerequisites: ['Basic Networking', 'Computer Hardware'],
      certification: 'Cisco Certified Network Associate (CCNA)',
      industry_alignment: 'Essential for IT infrastructure roles',
    },
    participants: [
      {
        id: 201,
        name: 'Dedi Kurniawan',
        role: 'Network Architect',
        skills: ['Cisco', 'Network Design'],
      },
      {
        id: 202,
        name: 'Eka Putri',
        role: 'Security Specialist',
        skills: ['Firewall', 'Encryption'],
      },
    ],
    status: 'planning',
    created_at: '2023-10-10T09:15:00Z',
    updated_at: '2023-10-12T11:45:00Z',
    progress: 20,
    milestones: [
      {
        id: 1,
        name: 'Requirements Analysis',
        completed: true,
        due_date: '2023-10-15',
      },
      {
        id: 2,
        name: 'Network Design',
        completed: false,
        due_date: '2023-10-25',
      },
      {
        id: 3,
        name: 'Implementation Plan',
        completed: false,
        due_date: '2023-11-05',
      },
      {
        id: 4,
        name: 'Security Configuration',
        completed: false,
        due_date: '2023-11-15',
      },
    ],
  },
];

// Mock collaboration messages
const collaborationMessages = [
  {
    id: 1,
    collaboration_id: 1,
    user_id: 101,
    user_name: 'Andi Saputra',
    message:
      "I've completed the frontend layout for the dashboard. What do you think?",
    timestamp: '2023-10-16T14:20:00Z',
    attachments: ['/files/dashboard-layout.png'],
    reactions: [
      { emoji: '👍', count: 2, users: [102, 103] },
      { emoji: '👏', count: 1, users: [103] },
    ],
  },
  {
    id: 2,
    collaboration_id: 1,
    user_id: 102,
    user_name: 'Budi Prasetyo',
    message:
      "Looks great! I'll start working on the API endpoints for user management.",
    timestamp: '2023-10-16T14:35:00Z',
    attachments: [],
    reactions: [{ emoji: '🔥', count: 1, users: [101] }],
  },
];

export const getAllCollaborations = async (req: Request, res: Response) => {
  try {
    res.json(collaborations);
  } catch (error) {
    res.status(500).json({
      error: {
        code: 'SERVER_ERROR',
        message: 'An error occurred while fetching collaborations',
      },
    });
  }
};

export const getCollaborationById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const collaborationId = parseInt(id, 10);

    const collaboration = collaborations.find(c => c.id === collaborationId);

    if (!collaboration) {
      return res.status(404).json({
        error: {
          code: 'COLLABORATION_NOT_FOUND',
          message: 'Collaboration not found',
        },
      });
    }

    res.json(collaboration);
  } catch (error) {
    res.status(500).json({
      error: {
        code: 'SERVER_ERROR',
        message: 'An error occurred while fetching collaboration',
      },
    });
  }
};

export const createCollaboration = async (req: Request, res: Response) => {
  try {
    const { title, description, learning_path_id } = req.body;
    const userId = (req as any).user.id;

    // Validate input
    if (!title || !description || !learning_path_id) {
      return res.status(400).json({
        error: {
          code: 'VALIDATION_ERROR',
          message: 'Title, description, and learning path ID are required',
        },
      });
    }

    // Create new collaboration
    const newCollaboration = {
      id: collaborations.length + 1,
      title,
      description,
      learning_path: {
        id: learning_path_id,
        name: 'Learning Path ' + learning_path_id,
        description: 'Description for learning path ' + learning_path_id,
        duration: '8 weeks',
        skills: ['Skill 1', 'Skill 2', 'Skill 3'],
        objectives: [
          'Learning objective 1',
          'Learning objective 2',
          'Learning objective 3',
        ],
        prerequisites: ['Prerequisite 1'],
        certification: 'Certificate for Path ' + learning_path_id,
        industry_alignment: 'Industry relevance information',
      },
      participants: [
        {
          id: userId,
          name: 'Current User',
          role: 'Initiator',
          skills: ['General Skills'],
        },
      ],
      status: 'planning',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      progress: 0,
      milestones: [
        {
          id: 1,
          name: 'Project Initiation',
          completed: false,
          due_date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
            .toISOString()
            .split('T')[0],
        },
        {
          id: 2,
          name: 'Planning Phase',
          completed: false,
          due_date: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000)
            .toISOString()
            .split('T')[0],
        },
      ],
    };

    collaborations.push(newCollaboration);

    res.status(201).json(newCollaboration);
  } catch (error) {
    res.status(500).json({
      error: {
        code: 'SERVER_ERROR',
        message: 'An error occurred while creating collaboration',
      },
    });
  }
};

export const getCollaborationMessages = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const collaborationId = parseInt(id, 10);

    // Check if collaboration exists
    const collaboration = collaborations.find(c => c.id === collaborationId);

    if (!collaboration) {
      return res.status(404).json({
        error: {
          code: 'COLLABORATION_NOT_FOUND',
          message: 'Collaboration not found',
        },
      });
    }

    // Filter messages for this collaboration
    const messages = collaborationMessages.filter(
      m => m.collaboration_id === collaborationId
    );

    res.json(messages);
  } catch (error) {
    res.status(500).json({
      error: {
        code: 'SERVER_ERROR',
        message: 'An error occurred while fetching collaboration messages',
      },
    });
  }
};

export const addCollaborationMessage = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { message, attachments } = req.body;
    const userId = (req as any).user.id;
    const userName = (req as any).user.name || 'User';

    const collaborationId = parseInt(id, 10);

    // Check if collaboration exists
    const collaboration = collaborations.find(c => c.id === collaborationId);

    if (!collaboration) {
      return res.status(404).json({
        error: {
          code: 'COLLABORATION_NOT_FOUND',
          message: 'Collaboration not found',
        },
      });
    }

    // Validate input
    if (!message) {
      return res.status(400).json({
        error: {
          code: 'VALIDATION_ERROR',
          message: 'Message is required',
        },
      });
    }

    // Create new message
    const newMessage = {
      id: collaborationMessages.length + 1,
      collaboration_id: collaborationId,
      user_id: userId,
      user_name: userName,
      message,
      timestamp: new Date().toISOString(),
      attachments: attachments || [],
      reactions: [],
    };

    collaborationMessages.push(newMessage);

    res.status(201).json(newMessage);
  } catch (error) {
    res.status(500).json({
      error: {
        code: 'SERVER_ERROR',
        message: 'An error occurred while adding collaboration message',
      },
    });
  }
};

export const joinCollaboration = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { role } = req.body;
    const userId = (req as any).user.id;
    const userName = (req as any).user.name || 'User';

    const collaborationId = parseInt(id, 10);

    // Find collaboration
    const collaborationIndex = collaborations.findIndex(
      c => c.id === collaborationId
    );

    if (collaborationIndex === -1) {
      return res.status(404).json({
        error: {
          code: 'COLLABORATION_NOT_FOUND',
          message: 'Collaboration not found',
        },
      });
    }

    // Check if user is already a participant
    const isParticipant = collaborations[collaborationIndex].participants.some(
      p => p.id === userId
    );

    if (isParticipant) {
      return res.status(400).json({
        error: {
          code: 'ALREADY_PARTICIPANT',
          message: 'User is already a participant in this collaboration',
        },
      });
    }

    // Add user to participants
    collaborations[collaborationIndex].participants.push({
      id: userId,
      name: userName,
      role: role || 'Participant',
      skills: ['General Skills'],
    });

    // Update timestamp
    collaborations[collaborationIndex].updated_at = new Date().toISOString();

    res.json({
      message: 'Successfully joined collaboration',
      collaboration: collaborations[collaborationIndex],
    });
  } catch (error) {
    res.status(500).json({
      error: {
        code: 'SERVER_ERROR',
        message: 'An error occurred while joining collaboration',
      },
    });
  }
};

export const updateCollaborationProgress = async (
  req: Request,
  res: Response
) => {
  try {
    const { id } = req.params;
    const { progress, milestone_id } = req.body;
    const userId = (req as any).user.id;

    const collaborationId = parseInt(id, 10);

    // Find collaboration
    const collaborationIndex = collaborations.findIndex(
      c => c.id === collaborationId
    );

    if (collaborationIndex === -1) {
      return res.status(404).json({
        error: {
          code: 'COLLABORATION_NOT_FOUND',
          message: 'Collaboration not found',
        },
      });
    }

    // Check if user is a participant
    const isParticipant = collaborations[collaborationIndex].participants.some(
      p => p.id === userId
    );

    if (!isParticipant) {
      return res.status(403).json({
        error: {
          code: 'FORBIDDEN',
          message: 'Only participants can update collaboration progress',
        },
      });
    }

    // Update progress if provided
    if (progress !== undefined) {
      collaborations[collaborationIndex].progress = progress;
    }

    // Update milestone if provided
    if (milestone_id) {
      const milestone = collaborations[collaborationIndex].milestones.find(
        m => m.id === milestone_id
      );

      if (milestone) {
        milestone.completed = true;
      }
    }

    // Update timestamp
    collaborations[collaborationIndex].updated_at = new Date().toISOString();

    res.json({
      message: 'Collaboration progress updated successfully',
      collaboration: collaborations[collaborationIndex],
    });
  } catch (error) {
    res.status(500).json({
      error: {
        code: 'SERVER_ERROR',
        message: 'An error occurred while updating collaboration progress',
      },
    });
  }
};
