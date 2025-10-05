import { Request, Response } from 'express';

// Mock PPDB applications
let ppdbApplications: any[] = [
  {
    id: 1,
    registration_number: 'PPDB2024000123',
    first_name: 'Ali',
    last_name: 'Murtado',
    birth_place: 'Bandung',
    birth_date: '2008-05-15',
    gender: 'male',
    address: 'Jl. Merdeka No. 123',
    phone: '081234567890',
    parent_name: 'Budi Murtado',
    parent_phone: '081234567891',
    first_choice_major_id: 1,
    second_choice_major_id: 2,
    third_choice_major_id: 3,
    status: 'verified',
    submitted_at: '2023-10-15T10:30:00Z',
  },
];

export const submitApplication = async (req: Request, res: Response) => {
  try {
    const {
      first_name,
      last_name,
      birth_place,
      birth_date,
      gender,
      address,
      phone,
      parent_name,
      parent_phone,
      first_choice_major_id,
      second_choice_major_id,
      third_choice_major_id,
    } = req.body;

    // Validate input
    if (
      !first_name ||
      !last_name ||
      !birth_place ||
      !birth_date ||
      !gender ||
      !address ||
      !phone ||
      !parent_name ||
      !parent_phone ||
      !first_choice_major_id
    ) {
      return res.status(400).json({
        error: {
          code: 'VALIDATION_ERROR',
          message: 'Required fields are missing',
        },
      });
    }

    // Generate registration number
    const registrationNumber = `PPDB${new Date().getFullYear()}${String(
      ppdbApplications.length + 1
    ).padStart(6, '0')}`;

    // Create new application
    const newApplication = {
      id: ppdbApplications.length + 1,
      registration_number: registrationNumber,
      first_name,
      last_name,
      birth_place,
      birth_date,
      gender,
      address,
      phone,
      parent_name,
      parent_phone,
      first_choice_major_id,
      second_choice_major_id: second_choice_major_id || null,
      third_choice_major_id: third_choice_major_id || null,
      status: 'submitted',
      submitted_at: new Date().toISOString(),
    };

    ppdbApplications.push(newApplication);

    res.status(201).json({
      message: 'Application submitted successfully',
      registration_number: registrationNumber,
    });
  } catch (error) {
    res.status(500).json({
      error: {
        code: 'SERVER_ERROR',
        message: 'An error occurred while submitting application',
      },
    });
  }
};

export const getApplicationStatus = async (req: Request, res: Response) => {
  try {
    const { registration_number } = req.params;

    const application = ppdbApplications.find(
      app => app.registration_number === registration_number
    );

    if (!application) {
      return res.status(404).json({
        error: {
          code: 'APPLICATION_NOT_FOUND',
          message: 'Application not found',
        },
      });
    }

    res.json({
      registration_number: application.registration_number,
      applicant_name: `${application.first_name} ${application.last_name}`,
      status: application.status,
      result: application.status === 'verified' ? 'accepted' : 'pending',
      assigned_major:
        application.status === 'verified' ? 'Rekayasa Perangkat Lunak' : null,
      next_steps:
        application.status === 'verified'
          ? 'Complete registration by 2024-03-15'
          : 'Application under review',
    });
  } catch (error) {
    res.status(500).json({
      error: {
        code: 'SERVER_ERROR',
        message: 'An error occurred while fetching application status',
      },
    });
  }
};

export const getAllApplications = async (req: Request, res: Response) => {
  try {
    // Extract query parameters
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const status = req.query.status as string;

    let filteredApplications = [...ppdbApplications];

    // Filter by status if provided
    if (status) {
      filteredApplications = filteredApplications.filter(
        app => app.status === status
      );
    }

    // Paginate results
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedApplications = filteredApplications.slice(
      startIndex,
      endIndex
    );

    res.json({
      data: paginatedApplications,
      pagination: {
        current_page: page,
        total_pages: Math.ceil(filteredApplications.length / limit),
        total_items: filteredApplications.length,
        items_per_page: limit,
      },
    });
  } catch (error) {
    res.status(500).json({
      error: {
        code: 'SERVER_ERROR',
        message: 'An error occurred while fetching applications',
      },
    });
  }
};
