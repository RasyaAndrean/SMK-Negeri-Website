import cors from 'cors';
import dotenv from 'dotenv';
import express, { Express, Request, Response } from 'express';

// Import routes
import adminRoutes from './routes/adminRoutes';
import aiRecommendationRoutes from './routes/aiRecommendationRoutes';
import announcementRoutes from './routes/announcementRoutes';
import arAnnotationRoutes from './routes/arAnnotationRoutes';
import authRoutes from './routes/authRoutes';
import collaborationRoutes from './routes/collaborationRoutes';
import eventRoutes from './routes/eventRoutes';
import majorRoutes from './routes/majorRoutes';
import newsRoutes from './routes/newsRoutes';
import ppdbRoutes from './routes/ppdbRoutes';
import realTimeCollaborationRoutes from './routes/realTimeCollaborationRoutes';
import studentRoutes from './routes/studentRoutes';
import teacherRoutes from './routes/teacherRoutes';

// Import middleware
import { authenticate, authorize } from './middleware/authMiddleware';

// Humorous error messages for a more engaging user experience
const humorousErrors = [
  'Oops! Our hamster-powered servers are taking a break. Please try again in a moment!',
  'Well, this is awkward... Our code monkeys are on strike. Please be patient!',
  'Houston, we have a problem! Our digital elves are working overtime to fix this.',
  'Warning: Coffee levels low. Developer productivity may be affected.',
  "Error 418: I'm a teapot. Short and stout. Tip me over and pour me out!",
  "Congratulations! You've found a bug! Please report it to our bug bounty program (payment in virtual cookies).",
];

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Public routes
app.use('/api/auth', authRoutes);
app.use('/api/majors', majorRoutes);
app.use('/api/news', newsRoutes);
app.use('/api/announcements', announcementRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/ppdb', ppdbRoutes);

// Protected routes
app.use('/api/student', authenticate, studentRoutes);
app.use('/api/teacher', authenticate, teacherRoutes);
app.use('/api/admin', authenticate, authorize('admin'), adminRoutes);
app.use('/api/collaborations', authenticate, collaborationRoutes);
app.use('/api/ar', authenticate, arAnnotationRoutes);
app.use('/api/recommendations', authenticate, aiRecommendationRoutes);
app.use('/api/rtc', authenticate, realTimeCollaborationRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send(`
    <div style="font-family: Arial, sans-serif; text-align: center; padding: 50px;">
      <h1>🌟 Welcome to SMK Negeri API Server! 🌟</h1>
      <p>Where education meets innovation and learning is always in session!</p>
      <div style="margin: 30px 0;">
        <pre style="display: inline-block; text-align: left; background: #f0f0f0; padding: 20px; border-radius: 10px;">
   ________________
  |                |
  |  🎓📚⚡🧠💻   |
  |                |
  |   SMK Negeri   |
  |   API Server   |
  |                |
  |  Serving up    |
  |  knowledge     |
  |  since 2023!   |
  |________________|
          ||
         (__)
        </pre>
      </div>
      <p>Ready to power your educational journey! 🚀</p>
      <p>API Status: <span style="color: green; font-weight: bold;">🟢 Operational</span></p>
    </div>
  `);
});

app.get('/api/health', (req: Request, res: Response) => {
  res.json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    message: 'All systems operational! 🚀',
    uptime: process.uptime(),
  });
});

// Humorous 404 handler
app.use((req: Request, res: Response) => {
  const randomError =
    humorousErrors[Math.floor(Math.random() * humorousErrors.length)];

  res.status(404).json({
    error: {
      code: 'NOT_FOUND',
      message: randomError,
      path: req.originalUrl,
      tip: "Don't worry, even the best developers get lost sometimes! 🗺️",
    },
  });
});

// Humorous error handler
app.use((err: any, req: Request, res: Response, next: any) => {
  console.error(err.stack);

  const randomError =
    humorousErrors[Math.floor(Math.random() * humorousErrors.length)];

  res.status(500).json({
    error: {
      code: 'INTERNAL_ERROR',
      message: randomError,
      tip: 'Our team of highly trained monkeys has been dispatched to fix this! 🐒🔧',
    },
  });
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
  console.log(`
    ╔══════════════════════════════════════════════════════════════╗
    ║                    SMK Negeri API Server                     ║
    ║                                                              ║
    ║  🚀 Server running on port ${port}                            ║
    ║  📚 Education API ready to serve knowledge                   ║
    ║  ⚡ Powered by Node.js, Express, and lots of coffee          ║
    ║                                                              ║
    ╚══════════════════════════════════════════════════════════════╝
  `);
});
