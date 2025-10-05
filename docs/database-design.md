# SMK Negeri Website - Database Design

## Overview

This document outlines the database schema for the SMK Negeri website, covering all entities and relationships required to support the features described in the requirements.

## Entity Relationship Diagram

```mermaid
erDiagram
    USERS {
        int id PK
        string username
        string email
        string password_hash
        string role
        string first_name
        string last_name
        string phone
        string profile_image
        datetime created_at
        datetime updated_at
    }

    STUDENTS {
        int id PK
        int user_id FK
        string nis
        string nisn
        string birth_place
        date birth_date
        string gender
        string address
        string city
        string province
        string postal_code
        string phone
        string parent_name
        string parent_phone
        int class_id FK
        int major_id FK
        datetime enrollment_date
        string status
    }

    TEACHERS {
        int id PK
        int user_id FK
        string employee_id
        string nip
        string birth_place
        date birth_date
        string gender
        string address
        string phone
        string education
        string expertise
        datetime hire_date
        string status
    }

    MAJORS {
        int id PK
        string code
        string name
        string description
        string image
        int head_teacher_id FK
        datetime created_at
        datetime updated_at
    }

    CLASSES {
        int id PK
        string name
        int major_id FK
        int teacher_id FK
        int academic_year_id FK
        int semester
        int student_count
    }

    COURSES {
        int id PK
        string code
        string name
        string description
        int major_id FK
        int credits
        string category
        datetime created_at
        datetime updated_at
    }

    NEWS {
        int id PK
        int author_id FK
        string title
        string slug
        text content
        string excerpt
        string featured_image
        string status
        int view_count
        datetime published_at
        datetime created_at
        datetime updated_at
    }

    ANNOUNCEMENTS {
        int id PK
        int author_id FK
        string title
        text content
        string target_audience
        datetime valid_from
        datetime valid_to
        string priority
        datetime created_at
        datetime updated_at
    }

    EVENTS {
        int id PK
        string title
        text description
        datetime start_date
        datetime end_date
        string location
        string type
        string status
        datetime created_at
        datetime updated_at
    }

    ALUMNI {
        int id PK
        int user_id FK
        string graduation_year
        int major_id FK
        string current_job
        string company
        string linkedin_url
        string facebook_url
        datetime registered_at
        string status
    }

    PPDB_APPLICATIONS {
        int id PK
        string registration_number
        string first_name
        string last_name
        string birth_place
        date birth_date
        string gender
        string address
        string phone
        string parent_name
        string parent_phone
        int first_choice_major_id FK
        int second_choice_major_id FK
        int third_choice_major_id FK
        string documents
        string status
        datetime submitted_at
        datetime updated_at
    }

    PARTNERS {
        int id PK
        string name
        string logo
        string industry_type
        string address
        string contact_person
        string phone
        string email
        string website
        string collaboration_type
        datetime partnership_start
        datetime partnership_end
        string status
    }

    ACADEMIC_YEARS {
        int id PK
        string name
        date start_date
        date end_date
        boolean is_active
        datetime created_at
    }

    EXTRACURRICULARS {
        int id PK
        string name
        string description
        string schedule
        string location
        int advisor_id FK
        int student_count
        string status
        datetime created_at
    }

    ACHIEVEMENTS {
        int id PK
        string title
        text description
        string achievement_type
        string level
        date date
        string organizer
        string document
        int student_id FK
        int teacher_id FK
        datetime created_at
    }

    USERS ||--|| STUDENTS : has
    USERS ||--|| TEACHERS : has
    USERS ||--|| ALUMNI : has
    STUDENTS ||--|| MAJORS : belongs_to
    STUDENTS ||--|| CLASSES : belongs_to
    TEACHERS ||--|| MAJORS : heads
    MAJORS ||--o{ CLASSES : has
    MAJORS ||--o{ COURSES : has
    CLASSES ||--o{ STUDENTS : contains
    COURSES ||--o{ CLASSES : taught_in
    USERS ||--o{ NEWS : authors
    USERS ||--o{ ANNOUNCEMENTS : creates
    ALUMNI ||--|| MAJORS : graduated_from
    MAJORS ||--o{ PPDB_APPLICATIONS : first_choice
    MAJORS ||--o{ PPDB_APPLICATIONS : second_choice
    MAJORS ||--o{ PPDB_APPLICATIONS : third_choice
    TEACHERS ||--o{ EXTRACURRICULARS : advises
```

## Detailed Table Structures

### Users Table

Stores all user accounts for the system with role-based access control.

### Students Table

Contains detailed information about enrolled students including academic and personal data.

### Teachers Table

Stores information about teaching staff including qualifications and expertise.

### Majors Table

Lists all vocational programs offered by the school with descriptions and images.

### Classes Table

Represents academic classes organized by major, year, and semester.

### Courses Table

Contains curriculum information for all courses offered in each major.

### News Table

Stores published articles and news items with metadata for SEO and categorization.

### Announcements Table

Holds important announcements with target audience and validity periods.

### Events Table

Tracks school events, activities, and calendar items.

### Alumni Table

Maintains information about graduates including career paths and contact details.

### PPDB Applications Table

Manages student admission applications with document tracking.

### Partners Table

Catalogs industry partnerships and collaborations with contact information.

### Academic Years Table

Defines academic periods for organizing curriculum and scheduling.

### Extracurriculars Table

Lists student activities and clubs with scheduling information.

### Achievements Table

Records student accomplishments in academics, sports, arts, and other areas.

## Indexing Strategy

- Primary keys on all tables
- Foreign key indexes for relationship navigation
- Composite indexes for frequently queried combinations
- Full-text search indexes for content fields
- Unique constraints on email, username, and identification numbers

## Security Considerations

- Password hashing with bcrypt or similar
- Role-based access control implementation
- Data encryption for sensitive information
- Audit trails for data modifications
- Regular backups and disaster recovery
