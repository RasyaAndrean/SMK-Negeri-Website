import { Request, Response } from 'express';

// Mock teacher data
const teachers = [
  {
    id: 201,
    name: 'Budi Santoso, S.Kom',
    major: 'Rekayasa Perangkat Lunak',
  },
  {
    id: 202,
    name: 'Siti Rahayu, S.Kom',
    major: 'Teknik Komputer dan Jaringan',
  },
];

// Mock classes data
const classes = [
  {
    id: 1,
    name: 'XI RPL 1',
    major: 'Rekayasa Perangkat Lunak',
    student_count: 32,
  },
  {
    id: 2,
    name: 'XI TKJ 1',
    major: 'Teknik Komputer dan Jaringan',
    student_count: 28,
  },
];

export const getTeacherDashboard = async (req: Request, res: Response) => {
  try {
    const teacherId = parseInt(req.params.id, 10) || 201;

    const teacher = teachers.find(t => t.id === teacherId);

    if (!teacher) {
      return res.status(404).json({
        error: {
          code: 'TEACHER_NOT_FOUND',
          message: 'Teacher not found',
        },
      });
    }

    res.json({
      teacher,
      classes,
      schedule: [
        {
          day: 'Monday',
          course: 'Web Programming',
          time: '08:00-09:30',
          class: 'XI RPL 1',
        },
      ],
    });
  } catch (error) {
    res.status(500).json({
      error: {
        code: 'SERVER_ERROR',
        message: 'An error occurred while fetching teacher dashboard',
      },
    });
  }
};

export const getTeacherClasses = async (req: Request, res: Response) => {
  try {
    const teacherId = parseInt(req.params.id, 10) || 201;

    const teacher = teachers.find(t => t.id === teacherId);

    if (!teacher) {
      return res.status(404).json({
        error: {
          code: 'TEACHER_NOT_FOUND',
          message: 'Teacher not found',
        },
      });
    }

    res.json(classes);
  } catch (error) {
    res.status(500).json({
      error: {
        code: 'SERVER_ERROR',
        message: 'An error occurred while fetching teacher classes',
      },
    });
  }
};

export const getClassStudents = async (req: Request, res: Response) => {
  try {
    const classId = parseInt(req.params.id, 10);

    // Mock student data for a class
    const students = [
      {
        id: 101,
        name: 'Andi Saputra',
        nis: '1234567890',
        email: 'andi@example.com',
      },
      {
        id: 102,
        name: 'Budi Prasetyo',
        nis: '1234567891',
        email: 'budi@example.com',
      },
    ];

    res.json(students);
  } catch (error) {
    res.status(500).json({
      error: {
        code: 'SERVER_ERROR',
        message: 'An error occurred while fetching class students',
      },
    });
  }
};

export const submitGrades = async (req: Request, res: Response) => {
  try {
    const { class_id, course_id, grades } = req.body;

    // Validate input
    if (!class_id || !course_id || !grades) {
      return res.status(400).json({
        error: {
          code: 'VALIDATION_ERROR',
          message: 'Class ID, Course ID, and grades are required',
        },
      });
    }

    // In a real application, we would save these grades to the database
    // For now, we'll just return a success message

    res.json({
      message: 'Grades submitted successfully',
    });
  } catch (error) {
    res.status(500).json({
      error: {
        code: 'SERVER_ERROR',
        message: 'An error occurred while submitting grades',
      },
    });
  }
};
