import { Request, Response } from 'express';

// Mock user learning data with detailed skill assessments
const userLearningData = [
  {
    user_id: 101,
    interests: ['web development', 'mobile apps', 'ui/ux design'],
    completed_courses: [
      {
        id: 1,
        name: 'Introduction to HTML/CSS',
        score: 85,
        completion_date: '2023-09-15',
      },
      {
        id: 2,
        name: 'JavaScript Fundamentals',
        score: 92,
        completion_date: '2023-10-01',
      },
    ],
    current_courses: [
      {
        id: 3,
        name: 'React Framework',
        progress: 65,
        start_date: '2023-10-10',
      },
    ],
    skill_levels: {
      'web development': 'intermediate',
      'mobile apps': 'beginner',
      'ui/ux design': 'beginner',
    },
    learning_preferences: {
      pace: 'medium',
      format: ['video', 'hands-on'],
      time_availability: 'evening',
    },
    career_goals: ['Frontend Developer', 'Full-Stack Developer'],
    collaboration_history: [1, 2],
  },
  {
    user_id: 201,
    interests: ['network security', 'system administration', 'cloud computing'],
    completed_courses: [
      {
        id: 10,
        name: 'Network Fundamentals',
        score: 78,
        completion_date: '2023-09-20',
      },
      {
        id: 11,
        name: 'Linux Administration',
        score: 88,
        completion_date: '2023-10-05',
      },
    ],
    current_courses: [
      {
        id: 12,
        name: 'Cybersecurity Essentials',
        progress: 40,
        start_date: '2023-10-12',
      },
    ],
    skill_levels: {
      'network security': 'intermediate',
      'system administration': 'advanced',
      'cloud computing': 'beginner',
    },
    learning_preferences: {
      pace: 'fast',
      format: ['reading', 'labs'],
      time_availability: 'weekend',
    },
    career_goals: ['Network Security Specialist', 'Cloud Architect'],
    collaboration_history: [],
  },
];

// Mock course recommendations with detailed information
const courseRecommendations = [
  {
    id: 101,
    name: 'Advanced React Patterns',
    description:
      'Master advanced patterns and techniques in React development including hooks, context, and performance optimization',
    category: 'web development',
    difficulty: 'advanced',
    duration: '6 weeks',
    skills: ['React', 'State Management', 'Performance Optimization'],
    prerequisites: ['React Fundamentals', 'JavaScript ES6'],
    learning_outcomes: [
      'Implement advanced React hooks',
      'Optimize component performance',
      'Manage complex application state',
    ],
    match_score: 92,
    reason:
      'Based on your interest in web development and completion of React Framework',
    instructor: 'Dr. Budi Santoso',
    rating: 4.8,
    enrollment_count: 1240,
    next_start_date: '2023-11-01',
  },
  {
    id: 102,
    name: 'Mobile App Development with Flutter',
    description:
      'Build cross-platform mobile applications using Flutter and Dart with hands-on projects',
    category: 'mobile apps',
    difficulty: 'intermediate',
    duration: '8 weeks',
    skills: ['Flutter', 'Dart', 'Mobile UI Design'],
    prerequisites: ['Programming Fundamentals'],
    learning_outcomes: [
      'Create responsive mobile interfaces',
      'Implement navigation and state management',
      'Deploy apps to app stores',
    ],
    match_score: 88,
    reason:
      'Matches your interest in mobile apps with your web development background',
    instructor: 'Siti Rahayu',
    rating: 4.7,
    enrollment_count: 980,
    next_start_date: '2023-11-15',
  },
  {
    id: 103,
    name: 'UI/UX Design for Developers',
    description:
      'Learn essential UI/UX principles specifically for developers to create user-friendly interfaces',
    category: 'ui/ux design',
    difficulty: 'beginner',
    duration: '4 weeks',
    skills: ['Design Principles', 'Prototyping', 'User Research'],
    prerequisites: ['Basic Design Concepts'],
    learning_outcomes: [
      'Apply design thinking principles',
      'Create wireframes and prototypes',
      'Conduct user testing',
    ],
    match_score: 85,
    reason: 'Complements your web development skills with design expertise',
    instructor: 'Ahmad Prasetyo',
    rating: 4.9,
    enrollment_count: 1560,
    next_start_date: '2023-10-30',
  },
];

// Mock collaboration recommendations with learning path details
const collaborationRecommendations = [
  {
    id: 201,
    title: 'Full-Stack E-commerce Project',
    description:
      'Build a complete e-commerce platform with team collaboration using modern web technologies',
    learning_path: {
      id: 301,
      name: 'E-commerce Development',
      description:
        'Comprehensive learning path covering all aspects of e-commerce application development',
      duration: '10 weeks',
      skills: ['React', 'Node.js', 'PostgreSQL', 'Payment Integration'],
      objectives: [
        'Design scalable e-commerce architecture',
        'Implement secure payment processing',
        'Deploy to cloud platforms',
      ],
      prerequisites: ['Web Development Fundamentals'],
      certification: 'E-commerce Developer Certificate',
      industry_alignment: 'High demand in e-commerce sector',
    },
    participants_needed: 4,
    current_participants: 2,
    skills: ['React', 'Node.js', 'PostgreSQL', 'Payment Integration'],
    match_score: 95,
    reason: 'Aligns with your web development interests and current skills',
    start_date: '2023-11-05',
    end_date: '2024-01-15',
    difficulty: 'advanced',
    max_participants: 6,
  },
  {
    id: 202,
    title: 'Mobile Health App Challenge',
    description:
      'Develop a health tracking mobile application for a competition with real-world impact',
    learning_path: {
      id: 302,
      name: 'Health App Development',
      description:
        'Specialized learning path for developing health and wellness applications',
      duration: '12 weeks',
      skills: ['Flutter', 'Firebase', 'Health APIs', 'UI/UX Design'],
      objectives: [
        'Integrate with health data APIs',
        'Ensure data privacy compliance',
        'Create intuitive health interfaces',
      ],
      prerequisites: ['Mobile Development Basics'],
      certification: 'Health App Developer Certificate',
      industry_alignment: 'Growing field in digital health',
    },
    participants_needed: 5,
    current_participants: 3,
    skills: ['Flutter', 'Firebase', 'Health APIs', 'UI/UX Design'],
    match_score: 87,
    reason: 'Matches your interest in mobile apps with team-based learning',
    start_date: '2023-11-20',
    end_date: '2024-02-15',
    difficulty: 'intermediate',
    max_participants: 6,
  },
];

// Mock career path recommendations with detailed information
const careerPathRecommendations = [
  {
    id: 401,
    title: 'Frontend Developer',
    description:
      'Specialize in creating user interfaces for web applications using modern frameworks',
    average_salary: 'IDR 7,000,000 - 15,000,000/year',
    growth_potential: 'high',
    required_skills: ['HTML/CSS', 'JavaScript', 'React', 'UI/UX Design'],
    recommended_courses: [101, 103],
    match_score: 90,
    reason: 'Based on your strong performance in web development courses',
    job_outlook: 'Excellent - 25% growth projected',
    typical_employers: [
      'Tech startups',
      'Digital agencies',
      'E-commerce companies',
    ],
    career_progression: [
      'Junior Developer',
      'Developer',
      'Senior Developer',
      'Tech Lead',
    ],
    certifications: [
      'React Developer Certificate',
      'Frontend Developer Certification',
    ],
  },
  {
    id: 402,
    title: 'Full-Stack Developer',
    description:
      'Develop both frontend and backend components of web applications with database integration',
    average_salary: 'IDR 9,000,000 - 20,000,000/year',
    growth_potential: 'very high',
    required_skills: ['JavaScript', 'Node.js', 'React', 'Database Management'],
    recommended_courses: [101],
    match_score: 85,
    reason:
      'Builds on your current web development foundation with backend skills',
    job_outlook: 'Excellent - 30% growth projected',
    typical_employers: [
      'Software companies',
      'Financial institutions',
      'Tech giants',
    ],
    career_progression: [
      'Junior Developer',
      'Developer',
      'Senior Developer',
      'Architect',
    ],
    certifications: [
      'Full-Stack Developer Certificate',
      'Node.js Certification',
    ],
  },
];

export const getUserRecommendations = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.id;

    // Find user learning data
    const userData = userLearningData.find(u => u.user_id === userId);

    if (!userData) {
      // Return default recommendations for new users
      return res.json({
        courses: courseRecommendations.slice(0, 2),
        collaborations: collaborationRecommendations.slice(0, 1),
        career_paths: careerPathRecommendations.slice(0, 1),
      });
    }

    // In a real implementation, this would use ML algorithms to generate personalized recommendations
    // For now, we'll return mock recommendations based on user interests

    // Filter recommendations based on user interests and skill levels
    const relevantCourses = courseRecommendations.filter(course =>
      userData.interests.some(interest =>
        course.category.toLowerCase().includes(interest.toLowerCase())
      )
    );

    const relevantCollaborations = collaborationRecommendations.filter(collab =>
      userData.interests.some(interest =>
        collab.skills.some(skill =>
          skill.toLowerCase().includes(interest.toLowerCase())
        )
      )
    );

    const relevantCareers = careerPathRecommendations.filter(career =>
      userData.interests.some(interest =>
        career.required_skills.some(skill =>
          skill.toLowerCase().includes(interest.toLowerCase())
        )
      )
    );

    res.json({
      courses:
        relevantCourses.length > 0
          ? relevantCourses
          : courseRecommendations.slice(0, 2),
      collaborations:
        relevantCollaborations.length > 0
          ? relevantCollaborations
          : collaborationRecommendations.slice(0, 1),
      career_paths:
        relevantCareers.length > 0
          ? relevantCareers
          : careerPathRecommendations.slice(0, 1),
    });
  } catch (error) {
    res.status(500).json({
      error: {
        code: 'SERVER_ERROR',
        message: 'An error occurred while fetching recommendations',
      },
    });
  }
};

export const getCourseRecommendations = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.id;
    const { category, limit } = req.query;

    const limitNum = limit ? parseInt(limit as string) : 5;

    // Find user learning data
    const userData = userLearningData.find(u => u.user_id === userId);

    let recommendations = courseRecommendations;

    // Filter by category if provided
    if (category) {
      recommendations = recommendations.filter(course =>
        course.category
          .toLowerCase()
          .includes((category as string).toLowerCase())
      );
    }

    // If we have user data, personalize the recommendations
    if (userData) {
      recommendations = recommendations.filter(course =>
        userData.interests.some(interest =>
          course.category.toLowerCase().includes(interest.toLowerCase())
        )
      );
    }

    // Sort by match score and limit results
    recommendations.sort((a, b) => b.match_score - a.match_score);
    recommendations = recommendations.slice(0, limitNum);

    res.json(recommendations);
  } catch (error) {
    res.status(500).json({
      error: {
        code: 'SERVER_ERROR',
        message: 'An error occurred while fetching course recommendations',
      },
    });
  }
};

export const getCollaborationRecommendations = async (
  req: Request,
  res: Response
) => {
  try {
    const userId = (req as any).user.id;
    const { skill, limit } = req.query;

    const limitNum = limit ? parseInt(limit as string) : 5;

    // Find user learning data
    const userData = userLearningData.find(u => u.user_id === userId);

    let recommendations = collaborationRecommendations;

    // Filter by skill if provided
    if (skill) {
      recommendations = recommendations.filter(collab =>
        collab.skills.some(s =>
          s.toLowerCase().includes((skill as string).toLowerCase())
        )
      );
    }

    // If we have user data, personalize the recommendations
    if (userData) {
      recommendations = recommendations.filter(collab =>
        userData.interests.some(interest =>
          collab.skills.some(s =>
            s.toLowerCase().includes(interest.toLowerCase())
          )
        )
      );
    }

    // Sort by match score and limit results
    recommendations.sort((a, b) => b.match_score - a.match_score);
    recommendations = recommendations.slice(0, limitNum);

    res.json(recommendations);
  } catch (error) {
    res.status(500).json({
      error: {
        code: 'SERVER_ERROR',
        message:
          'An error occurred while fetching collaboration recommendations',
      },
    });
  }
};

export const getCareerPathRecommendations = async (
  req: Request,
  res: Response
) => {
  try {
    const userId = (req as any).user.id;
    const { industry, limit } = req.query;

    const limitNum = limit ? parseInt(limit as string) : 5;

    // Find user learning data
    const userData = userLearningData.find(u => u.user_id === userId);

    let recommendations = careerPathRecommendations;

    // Filter by industry if provided
    if (industry) {
      recommendations = recommendations.filter(career =>
        career.title.toLowerCase().includes((industry as string).toLowerCase())
      );
    }

    // If we have user data, personalize the recommendations
    if (userData) {
      recommendations = recommendations.filter(career =>
        userData.interests.some(interest =>
          career.required_skills.some(skill =>
            skill.toLowerCase().includes(interest.toLowerCase())
          )
        )
      );
    }

    // Sort by match score and limit results
    recommendations.sort((a, b) => b.match_score - a.match_score);
    recommendations = recommendations.slice(0, limitNum);

    res.json(recommendations);
  } catch (error) {
    res.status(500).json({
      error: {
        code: 'SERVER_ERROR',
        message: 'An error occurred while fetching career path recommendations',
      },
    });
  }
};

export const provideFeedback = async (req: Request, res: Response) => {
  try {
    const { recommendation_id, feedback_type, comment } = req.body;
    const userId = (req as any).user.id;

    // Validate input
    if (!recommendation_id || !feedback_type) {
      return res.status(400).json({
        error: {
          code: 'VALIDATION_ERROR',
          message: 'Recommendation ID and feedback type are required',
        },
      });
    }

    // In a real implementation, this would save the feedback to improve recommendation algorithms
    // For now, we'll just log it and return a success message

    console.log(
      `User ${userId} provided ${feedback_type} feedback for recommendation ${recommendation_id}: ${
        comment || 'No comment'
      }`
    );

    res.json({
      message:
        'Feedback received successfully. Thank you for helping us improve recommendations!',
    });
  } catch (error) {
    res.status(500).json({
      error: {
        code: 'SERVER_ERROR',
        message: 'An error occurred while processing feedback',
      },
    });
  }
};

export const getPersonalizedLearningPath = async (
  req: Request,
  res: Response
) => {
  try {
    const userId = (req as any).user.id;

    // Find user learning data
    const userData = userLearningData.find(u => u.user_id === userId);

    if (!userData) {
      return res.status(404).json({
        error: {
          code: 'USER_NOT_FOUND',
          message: 'User learning data not found',
        },
      });
    }

    // Create a personalized learning path based on user data
    const learningPath = {
      user_id: userId,
      title: `Personalized Learning Path for ${userData.interests[0]}`,
      description: `Customized learning journey based on your interests in ${userData.interests.join(
        ', '
      )}`,
      duration: '16 weeks',
      stages: [
        {
          stage: 1,
          title: 'Foundation Building',
          description: 'Strengthen core skills in your areas of interest',
          courses: courseRecommendations
            .filter(
              c =>
                userData.interests.some(i => c.category.includes(i)) &&
                c.difficulty === 'beginner'
            )
            .slice(0, 2),
          duration: '4 weeks',
          objectives: [
            'Master fundamental concepts',
            'Complete hands-on projects',
            'Build a portfolio showcase',
          ],
        },
        {
          stage: 2,
          title: 'Skill Enhancement',
          description: 'Advance your skills with intermediate courses',
          courses: courseRecommendations
            .filter(
              c =>
                userData.interests.some(i => c.category.includes(i)) &&
                c.difficulty === 'intermediate'
            )
            .slice(0, 2),
          duration: '6 weeks',
          objectives: [
            'Apply advanced techniques',
            'Work on complex projects',
            'Collaborate with peers',
          ],
        },
        {
          stage: 3,
          title: 'Practical Application',
          description: 'Apply your skills in real-world projects',
          collaborations: collaborationRecommendations
            .filter(c =>
              userData.interests.some(i => c.skills.some(s => s.includes(i)))
            )
            .slice(0, 1),
          duration: '4 weeks',
          objectives: [
            'Work in team environments',
            'Solve real problems',
            'Present solutions to stakeholders',
          ],
        },
        {
          stage: 4,
          title: 'Career Preparation',
          description: 'Prepare for your target career path',
          career_paths: careerPathRecommendations
            .filter(c =>
              userData.interests.some(i =>
                c.required_skills.some(s => s.includes(i))
              )
            )
            .slice(0, 1),
          duration: '2 weeks',
          objectives: [
            'Refine your resume',
            'Practice interview skills',
            'Network with professionals',
          ],
        },
      ],
      total_duration: '16 weeks',
      start_date: new Date().toISOString().split('T')[0],
      estimated_completion: new Date(Date.now() + 16 * 7 * 24 * 60 * 60 * 1000)
        .toISOString()
        .split('T')[0],
    };

    res.json(learningPath);
  } catch (error) {
    res.status(500).json({
      error: {
        code: 'SERVER_ERROR',
        message:
          'An error occurred while generating personalized learning path',
      },
    });
  }
};
