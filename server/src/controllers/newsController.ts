import { Request, Response } from 'express';

// Mock data for news articles
const newsArticles = [
  {
    id: 1,
    title: 'Juara Lomba Web Development',
    excerpt:
      'Tim RPL meraih juara pertama dalam kompetisi web development tingkat nasional',
    content:
      'Berita lengkap tentang kemenangan tim RPL dalam kompetisi web development yang diadakan oleh Kemendikbud. Tim berhasil mengalahkan 150 tim lainnya dari seluruh Indonesia.',
    featured_image: '/images/news/web-dev-champions.jpg',
    published_at: '2023-10-15T08:00:00Z',
    author: 'Admin Sekolah',
    tags: ['prestasi', 'rpl', 'kompetisi'],
    view_count: 1250,
  },
  {
    id: 2,
    title: 'Workshop Digital Marketing',
    excerpt:
      'SMK Negeri mengadakan workshop digital marketing bersama praktisi industri',
    content:
      'Workshop yang diikuti oleh 100 siswa dari berbagai jurusan membahas strategi pemasaran digital terkini.',
    featured_image: '/images/news/digital-marketing-workshop.jpg',
    published_at: '2023-10-10T10:30:00Z',
    author: 'Marketing Team',
    tags: ['workshop', 'bdp', 'marketing'],
    view_count: 875,
  },
  {
    id: 3,
    title: 'Kunjungan Industri ke Google',
    excerpt: 'Siswa jurusan RPL dan MM berkunjung ke kantor Google Indonesia',
    content:
      'Kunjungan industri yang memberikan pengalaman langsung kepada siswa tentang lingkungan kerja di perusahaan teknologi terkemuka.',
    featured_image: '/images/news/google-visit.jpg',
    published_at: '2023-10-05T14:15:00Z',
    author: 'Humas Sekolah',
    tags: ['kunjungan', 'industri', 'rpl', 'mm'],
    view_count: 2100,
  },
];

export const getAllNews = async (req: Request, res: Response) => {
  try {
    // Extract query parameters
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const category = req.query.category as string;

    // For demo purposes, we'll just paginate the data
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedNews = newsArticles.slice(startIndex, endIndex);

    res.json({
      data: paginatedNews,
      pagination: {
        current_page: page,
        total_pages: Math.ceil(newsArticles.length / limit),
        total_items: newsArticles.length,
        items_per_page: limit,
      },
    });
  } catch (error) {
    res.status(500).json({
      error: {
        code: 'SERVER_ERROR',
        message: 'An error occurred while fetching news articles',
      },
    });
  }
};

export const getNewsById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const newsId = parseInt(id, 10);

    const article = newsArticles.find(n => n.id === newsId);

    if (!article) {
      return res.status(404).json({
        error: {
          code: 'NEWS_NOT_FOUND',
          message: 'News article not found',
        },
      });
    }

    res.json(article);
  } catch (error) {
    res.status(500).json({
      error: {
        code: 'SERVER_ERROR',
        message: 'An error occurred while fetching news article',
      },
    });
  }
};
