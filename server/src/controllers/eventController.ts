import { Request, Response } from 'express';

// Mock data for events
const events = [
  {
    id: 1,
    title: 'Pekan Olahraga dan Seni',
    description:
      'Acara tahunan untuk menampilkan bakat siswa dalam olahraga dan seni',
    start_date: '2024-05-01T07:00:00Z',
    end_date: '2024-05-05T16:00:00Z',
    location: 'Halaman Sekolah',
    type: 'academic',
  },
  {
    id: 2,
    title: 'Workshop Pengembangan Web',
    description:
      'Workshop intensif untuk meningkatkan keterampilan pengembangan web',
    start_date: '2024-04-15T09:00:00Z',
    end_date: '2024-04-15T16:00:00Z',
    location: 'Lab Komputer',
    type: 'workshop',
  },
  {
    id: 3,
    title: 'Ujian Tengah Semester',
    description: 'Pelaksanaan ujian tengah semester genap',
    start_date: '2024-04-20T07:00:00Z',
    end_date: '2024-04-27T12:00:00Z',
    location: 'Ruang Kelas',
    type: 'exam',
  },
];

export const getAllEvents = async (req: Request, res: Response) => {
  try {
    // Extract query parameters
    const startDate = req.query.start_date as string;
    const endDate = req.query.end_date as string;
    const type = req.query.type as string;

    let filteredEvents = [...events];

    // Filter by type if provided
    if (type) {
      filteredEvents = filteredEvents.filter(event => event.type === type);
    }

    // Filter by date range if provided
    if (startDate) {
      filteredEvents = filteredEvents.filter(
        event => event.start_date >= startDate
      );
    }

    if (endDate) {
      filteredEvents = filteredEvents.filter(
        event => event.end_date <= endDate
      );
    }

    res.json(filteredEvents);
  } catch (error) {
    res.status(500).json({
      error: {
        code: 'SERVER_ERROR',
        message: 'An error occurred while fetching events',
      },
    });
  }
};
