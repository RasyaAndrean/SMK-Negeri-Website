import { Request, Response } from 'express';

// Mock student data
const students = [
  {
    id: 101,
    name: 'Andi Saputra',
    major: 'Rekayasa Perangkat Lunak',
    class: 'XI RPL 1',
    academic_year: '2023/2024',
  },
  {
    id: 102,
    name: 'Budi Santoso',
    major: 'Teknik Komputer dan Jaringan',
    class: 'XI TKJ 1',
    academic_year: '2023/2024',
  },
];

// Mock schedule data
const schedule = [
  {
    day: 'Monday',
    course: 'Web Programming',
    time: '08:00-09:30',
    room: 'Lab Komputer 1',
  },
  {
    day: 'Tuesday',
    course: 'Database Systems',
    time: '10:00-11:30',
    room: 'Lab Komputer 2',
  },
];

// Mock grades data
const grades = [
  {
    course: 'Web Programming',
    assignments: [
      {
        name: 'Project 1',
        score: 85,
        max_score: 100,
        date: '2023-09-15',
      },
    ],
    exams: [
      {
        name: 'Midterm Exam',
        score: 90,
        max_score: 100,
        date: '2023-10-01',
      },
    ],
    final_grade: 87.5,
  },
];

// Mock attendance data
const attendance = {
  summary: {
    present: 45,
    absent: 2,
    late: 1,
    percentage: 93.75,
  },
  details: [
    {
      date: '2023-10-01',
      course: 'Web Programming',
      status: 'present',
    },
    {
      date: '2023-10-02',
      course: 'Database Systems',
      status: 'present',
    },
  ],
};

export const getStudentDashboard = async (req: Request, res: Response) => {
  try {
    const studentId = parseInt(req.params.id, 10) || 101;

    const student = students.find(s => s.id === studentId);

    if (!student) {
      return res.status(404).json({
        error: {
          code: 'STUDENT_NOT_FOUND',
          message: 'Student not found',
        },
      });
    }

    res.json({
      student,
      schedule,
      recent_grades: grades,
      upcoming_events: [
        {
          title: 'Ujian Tengah Semester',
          date: '2023-10-20',
        },
      ],
    });
  } catch (error) {
    res.status(500).json({
      error: {
        code: 'SERVER_ERROR',
        message: 'An error occurred while fetching student dashboard',
      },
    });
  }
};

export const getStudentCourses = async (req: Request, res: Response) => {
  try {
    const studentId = parseInt(req.params.id, 10) || 101;

    const student = students.find(s => s.id === studentId);

    if (!student) {
      return res.status(404).json({
        error: {
          code: 'STUDENT_NOT_FOUND',
          message: 'Student not found',
        },
      });
    }

    // Mock course data
    const courses = [
      {
        id: 1,
        name: 'Web Programming',
        teacher: 'Budi Santoso, S.Kom',
        schedule: 'Monday, 08:00-09:30',
        room: 'Lab Komputer 1',
      },
      {
        id: 2,
        name: 'Database Systems',
        teacher: 'Siti Rahayu, S.Kom',
        schedule: 'Tuesday, 10:00-11:30',
        room: 'Lab Komputer 2',
      },
    ];

    res.json(courses);
  } catch (error) {
    res.status(500).json({
      error: {
        code: 'SERVER_ERROR',
        message: 'An error occurred while fetching student courses',
      },
    });
  }
};

export const getStudentGrades = async (req: Request, res: Response) => {
  try {
    const studentId = parseInt(req.params.id, 10) || 101;

    const student = students.find(s => s.id === studentId);

    if (!student) {
      return res.status(404).json({
        error: {
          code: 'STUDENT_NOT_FOUND',
          message: 'Student not found',
        },
      });
    }

    res.json(grades);
  } catch (error) {
    res.status(500).json({
      error: {
        code: 'SERVER_ERROR',
        message: 'An error occurred while fetching student grades',
      },
    });
  }
};

export const getStudentAttendance = async (req: Request, res: Response) => {
  try {
    const studentId = parseInt(req.params.id, 10) || 101;

    const student = students.find(s => s.id === studentId);

    if (!student) {
      return res.status(404).json({
        error: {
          code: 'STUDENT_NOT_FOUND',
          message: 'Student not found',
        },
      });
    }

    res.json(attendance);
  } catch (error) {
    res.status(500).json({
      error: {
        code: 'SERVER_ERROR',
        message: 'An error occurred while fetching student attendance',
      },
    });
  }
};
