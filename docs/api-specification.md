# SMK Negeri Website - API Specification

## Overview

This document defines the RESTful API endpoints for the SMK Negeri website backend system.

## Authentication

### POST /api/auth/login

User login endpoint

**Request Body:**

```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response:**

```json
{
  "token": "jwt_token_here",
  "user": {
    "id": 1,
    "username": "johndoe",
    "email": "user@example.com",
    "role": "student"
  }
}
```

### POST /api/auth/register

User registration endpoint

**Request Body:**

```json
{
  "username": "johndoe",
  "email": "user@example.com",
  "password": "password123",
  "role": "student"
}
```

**Response:**

```json
{
  "message": "User registered successfully",
  "user": {
    "id": 1,
    "username": "johndoe",
    "email": "user@example.com",
    "role": "student"
  }
}
```

### POST /api/auth/logout

User logout endpoint

**Response:**

```json
{
  "message": "Logged out successfully"
}
```

## Public Endpoints

### GET /api/majors

Retrieve list of all majors/programs

**Response:**

```json
[
  {
    "id": 1,
    "code": "RPL",
    "name": "Rekayasa Perangkat Lunak",
    "description": "Program for software development expertise",
    "image": "/images/majors/rpl.jpg"
  }
]
```

### GET /api/majors/{id}

Retrieve details of a specific major

**Response:**

```json
{
  "id": 1,
  "code": "RPL",
  "name": "Rekayasa Perangkat Lunak",
  "description": "Program for software development expertise",
  "image": "/images/majors/rpl.jpg",
  "head_teacher": {
    "id": 10,
    "name": "Dr. Budi Santoso",
    "expertise": "Software Engineering"
  },
  "courses": [
    {
      "id": 1,
      "name": "Web Programming",
      "credits": 4
    }
  ]
}
```

### GET /api/news

Retrieve list of published news articles

**Query Parameters:**

- page (default: 1)
- limit (default: 10)
- category

**Response:**

```json
{
  "data": [
    {
      "id": 1,
      "title": "Juara Lomba Web Development",
      "excerpt": "Tim RPL meraih juara pertama...",
      "featured_image": "/images/news/web-dev-champions.jpg",
      "published_at": "2023-10-15T08:00:00Z",
      "author": "Admin Sekolah"
    }
  ],
  "pagination": {
    "current_page": 1,
    "total_pages": 5,
    "total_items": 50,
    "items_per_page": 10
  }
}
```

### GET /api/news/{id}

Retrieve a specific news article

**Response:**

```json
{
  "id": 1,
  "title": "Juara Lomba Web Development",
  "content": "Berita lengkap tentang kemenangan tim...",
  "featured_image": "/images/news/web-dev-champions.jpg",
  "published_at": "2023-10-15T08:00:00Z",
  "author": "Admin Sekolah",
  "tags": ["prestasi", "rpl", "kompetisi"],
  "view_count": 1250
}
```

### GET /api/announcements

Retrieve list of active announcements

**Response:**

```json
[
  {
    "id": 1,
    "title": "Libur Bersama Hari Raya Nyepi",
    "content": "Diberitahukan kepada seluruh civitas akademika...",
    "target_audience": "all",
    "priority": "high",
    "valid_from": "2023-03-20T00:00:00Z",
    "valid_to": "2023-03-25T23:59:59Z"
  }
]
```

### GET /api/events

Retrieve upcoming events

**Query Parameters:**

- start_date
- end_date
- type

**Response:**

```json
[
  {
    "id": 1,
    "title": "Pekan Olahraga dan Seni",
    "description": "Acara tahunan untuk menampilkan bakat siswa",
    "start_date": "2023-11-01T07:00:00Z",
    "end_date": "2023-11-05T16:00:00Z",
    "location": "Halaman Sekolah",
    "type": "academic"
  }
]
```

## Student Portal Endpoints

### GET /api/student/dashboard

Retrieve student dashboard data

**Headers:**

- Authorization: Bearer {token}

**Response:**

```json
{
  "student": {
    "id": 101,
    "name": "Andi Saputra",
    "major": "Rekayasa Perangkat Lunak",
    "class": "XI RPL 1",
    "academic_year": "2023/2024"
  },
  "schedule": [
    {
      "day": "Monday",
      "course": "Web Programming",
      "time": "08:00-09:30",
      "room": "Lab Komputer 1"
    }
  ],
  "recent_grades": [
    {
      "course": "Matematika",
      "grade": 85,
      "date": "2023-10-10"
    }
  ],
  "upcoming_events": [
    {
      "title": "Ujian Tengah Semester",
      "date": "2023-10-20"
    }
  ]
}
```

### GET /api/student/courses

Retrieve student's enrolled courses

**Response:**

```json
[
  {
    "id": 1,
    "name": "Web Programming",
    "teacher": "Budi Santoso, S.Kom",
    "schedule": "Monday, 08:00-09:30",
    "room": "Lab Komputer 1"
  }
]
```

### GET /api/student/grades

Retrieve student's academic grades

**Response:**

```json
[
  {
    "course": "Web Programming",
    "assignments": [
      {
        "name": "Project 1",
        "score": 85,
        "max_score": 100,
        "date": "2023-09-15"
      }
    ],
    "exams": [
      {
        "name": "Midterm Exam",
        "score": 90,
        "max_score": 100,
        "date": "2023-10-01"
      }
    ],
    "final_grade": 87.5
  }
]
```

### GET /api/student/attendance

Retrieve student's attendance records

**Response:**

```json
{
  "summary": {
    "present": 45,
    "absent": 2,
    "late": 1,
    "percentage": 93.75
  },
  "details": [
    {
      "date": "2023-10-01",
      "course": "Web Programming",
      "status": "present"
    }
  ]
}
```

## Teacher Portal Endpoints

### GET /api/teacher/dashboard

Retrieve teacher dashboard data

**Response:**

```json
{
  "teacher": {
    "id": 201,
    "name": "Budi Santoso, S.Kom",
    "major": "Rekayasa Perangkat Lunak"
  },
  "classes": [
    {
      "id": 1,
      "name": "XI RPL 1",
      "student_count": 32
    }
  ],
  "schedule": [
    {
      "day": "Monday",
      "course": "Web Programming",
      "time": "08:00-09:30",
      "class": "XI RPL 1"
    }
  ]
}
```

### GET /api/teacher/classes

Retrieve teacher's classes

**Response:**

```json
[
  {
    "id": 1,
    "name": "XI RPL 1",
    "major": "Rekayasa Perangkat Lunak",
    "student_count": 32,
    "courses": [
      {
        "id": 1,
        "name": "Web Programming"
      }
    ]
  }
]
```

### GET /api/teacher/classes/{id}/students

Retrieve students in a specific class

**Response:**

```json
[
  {
    "id": 101,
    "name": "Andi Saputra",
    "nis": "1234567890",
    "email": "andi@example.com"
  }
]
```

### POST /api/teacher/grades

Submit student grades

**Request Body:**

```json
{
  "class_id": 1,
  "course_id": 1,
  "grades": [
    {
      "student_id": 101,
      "assignment_name": "Project 2",
      "score": 92,
      "max_score": 100
    }
  ]
}
```

**Response:**

```json
{
  "message": "Grades submitted successfully"
}
```

## Admin Panel Endpoints

### GET /api/admin/dashboard

Retrieve admin dashboard data

**Response:**

```json
{
  "statistics": {
    "total_students": 2500,
    "total_teachers": 150,
    "total_majors": 25,
    "new_applications": 120
  },
  "recent_activities": [
    {
      "action": "New PPDB application",
      "user": "Admin Sekolah",
      "timestamp": "2023-10-15T10:30:00Z"
    }
  ]
}
```

### GET /api/admin/users

Retrieve list of users

**Query Parameters:**

- role (student, teacher, admin)
- page
- limit

**Response:**

```json
{
  "data": [
    {
      "id": 101,
      "username": "andisaputra",
      "email": "andi@example.com",
      "role": "student",
      "created_at": "2023-01-15T08:00:00Z"
    }
  ],
  "pagination": {
    "current_page": 1,
    "total_pages": 25,
    "total_items": 250,
    "items_per_page": 10
  }
}
```

### POST /api/admin/users

Create a new user

**Request Body:**

```json
{
  "username": "newteacher",
  "email": "newteacher@example.com",
  "password": "securepassword",
  "role": "teacher",
  "profile": {
    "first_name": "John",
    "last_name": "Doe",
    "employee_id": "EMP001"
  }
}
```

**Response:**

```json
{
  "message": "User created successfully",
  "user": {
    "id": 301,
    "username": "newteacher",
    "email": "newteacher@example.com",
    "role": "teacher"
  }
}
```

### PUT /api/admin/users/{id}

Update user information

**Response:**

```json
{
  "message": "User updated successfully",
  "user": {
    "id": 301,
    "username": "newteacher",
    "email": "newteacher@example.com",
    "role": "teacher"
  }
}
```

### DELETE /api/admin/users/{id}

Delete a user

**Response:**

```json
{
  "message": "User deleted successfully"
}
```

## PPDB (Admission) Endpoints

### POST /api/ppdb/register

Submit a new PPDB application

**Request Body:**

```json
{
  "first_name": "Ali",
  "last_name": "Murtado",
  "birth_place": "Bandung",
  "birth_date": "2008-05-15",
  "gender": "male",
  "address": "Jl. Merdeka No. 123",
  "phone": "081234567890",
  "parent_name": "Budi Murtado",
  "parent_phone": "081234567891",
  "first_choice_major_id": 1,
  "second_choice_major_id": 2,
  "third_choice_major_id": 3
}
```

**Response:**

```json
{
  "message": "Application submitted successfully",
  "registration_number": "PPDB2024000123"
}
```

### GET /api/ppdb/status/{registration_number}

Check application status

**Response:**

```json
{
  "registration_number": "PPDB2024000123",
  "applicant_name": "Ali Murtado",
  "status": "verified",
  "result": "accepted",
  "assigned_major": "Rekayasa Perangkat Lunak",
  "next_steps": "Complete registration by 2024-03-15"
}
```

## Error Responses

All endpoints will return appropriate HTTP status codes:

- 200: Success
- 201: Created
- 400: Bad Request
- 401: Unauthorized
- 403: Forbidden
- 404: Not Found
- 500: Internal Server Error

**Error Response Format:**

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "The provided data is invalid",
    "details": [
      {
        "field": "email",
        "message": "Email is required"
      }
    ]
  }
}
```
