import { Request, Response } from 'express';

// Mock data for announcements
const announcements = [
  {
    id: 1,
    title: 'Libur Bersama Hari Raya Nyepi',
    content:
      'Diberitahukan kepada seluruh civitas akademika bahwa sekolah akan libur bersama pada Hari Raya Nyepi tanggal 22 Maret 2024.',
    target_audience: 'all',
    priority: 'high',
    valid_from: '2024-03-20T00:00:00Z',
    valid_to: '2024-03-25T23:59:59Z',
  },
  {
    id: 2,
    title: 'Pembagian Raport Semester Genap',
    content:
      'Raport semester genap akan dibagikan pada tanggal 15 April 2024. Siswa diharapkan hadir untuk mengambil raport masing-masing.',
    target_audience: 'students',
    priority: 'medium',
    valid_from: '2024-04-01T00:00:00Z',
    valid_to: '2024-04-20T23:59:59Z',
  },
  {
    id: 3,
    title: 'Workshop Pengembangan Kurikulum',
    content:
      'Guru-guru diwajibkan mengikuti workshop pengembangan kurikulum pada hari Sabtu tanggal 30 Maret 2024 pukul 08.00-16.00.',
    target_audience: 'teachers',
    priority: 'high',
    valid_from: '2024-03-25T00:00:00Z',
    valid_to: '2024-03-31T23:59:59Z',
  },
];

export const getAllAnnouncements = async (req: Request, res: Response) => {
  try {
    // Filter active announcements
    const now = new Date().toISOString();
    const activeAnnouncements = announcements.filter(
      ann => ann.valid_from <= now && ann.valid_to >= now
    );

    res.json(activeAnnouncements);
  } catch (error) {
    res.status(500).json({
      error: {
        code: 'SERVER_ERROR',
        message: 'An error occurred while fetching announcements',
      },
    });
  }
};
