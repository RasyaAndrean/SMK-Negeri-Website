import { Request, Response } from 'express';

// Mock data for majors
const majors = [
  {
    id: 1,
    code: 'RPL',
    name: 'Rekayasa Perangkat Lunak',
    description:
      'Program for software development expertise focusing on web and mobile applications',
    image: '/images/majors/rpl.jpg',
  },
  {
    id: 2,
    code: 'TKJ',
    name: 'Teknik Komputer dan Jaringan',
    description:
      'Program focused on computer hardware, networking, and system administration',
    image: '/images/majors/tkj.jpg',
  },
  {
    id: 3,
    code: 'MM',
    name: 'Multimedia',
    description:
      'Program for digital media creation including graphic design, video editing, and animation',
    image: '/images/majors/mm.jpg',
  },
  {
    id: 4,
    code: 'OTKP',
    name: 'Otomatisasi dan Tata Kelola Perkantoran',
    description:
      'Program focused on office administration and business process automation',
    image: '/images/majors/otkp.jpg',
  },
  {
    id: 5,
    code: 'BDP',
    name: 'Bisnis Daring dan Pemasaran',
    description:
      'Program for digital marketing and e-commerce business management',
    image: '/images/majors/bdp.jpg',
  },
];

export const getAllMajors = async (req: Request, res: Response) => {
  try {
    res.json(majors);
  } catch (error) {
    res.status(500).json({
      error: {
        code: 'SERVER_ERROR',
        message: 'An error occurred while fetching majors',
      },
    });
  }
};

export const getMajorById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const majorId = parseInt(id, 10);

    const major = majors.find(m => m.id === majorId);

    if (!major) {
      return res.status(404).json({
        error: {
          code: 'MAJOR_NOT_FOUND',
          message: 'Major not found',
        },
      });
    }

    // Mock head teacher data
    const headTeacher = {
      id: 10,
      name: 'Dr. Budi Santoso',
      expertise: 'Software Engineering',
    };

    // Mock courses data
    const courses = [
      {
        id: 1,
        name: 'Web Programming',
        credits: 4,
      },
      {
        id: 2,
        name: 'Database Systems',
        credits: 3,
      },
    ];

    res.json({
      ...major,
      head_teacher: headTeacher,
      courses,
    });
  } catch (error) {
    res.status(500).json({
      error: {
        code: 'SERVER_ERROR',
        message: 'An error occurred while fetching major details',
      },
    });
  }
};
