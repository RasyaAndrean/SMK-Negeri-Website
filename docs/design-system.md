# SMK Negeri Website - Design System

## Overview

This document defines the design system for the SMK Negeri website, including color palette, typography, spacing, and component guidelines.

## Color Palette

### Primary Colors

- **Primary Blue**: #1E40AF (Education, Trust)
- **Secondary Green**: #059669 (Growth, Success)
- **Accent Orange**: #F59E0B (Energy, Innovation)

### Neutral Colors

- **Dark Gray**: #1F2937 (Text)
- **Medium Gray**: #6B7280 (Secondary Text)
- **Light Gray**: #F3F4F6 (Background)
- **White**: #FFFFFF

### Semantic Colors

- **Success**: #10B981
- **Warning**: #F59E0B
- **Error**: #EF4444
- **Info**: #3B82F6

### Gradient Options

- **Primary Gradient**: Blue to Cyan
- **Accent Gradient**: Orange to Yellow

## Typography

### Font Families

- **Primary**: Poppins (Headings, UI)

  - Weights: 400, 500, 600, 700, 800
  - Use: Headers, Navigation, Buttons

- **Secondary**: Inter (Body Text)

  - Weights: 400, 500, 600
  - Use: Paragraphs, Lists, Forms

- **Monospace**: Fira Code (Code Snippets)
  - Use: Technical Content, Code Examples

### Font Sizes

- **Display**: 3.75rem (60px) - Hero Titles
- **H1**: 2.5rem (40px)
- **H2**: 2rem (32px)
- **H3**: 1.5rem (24px)
- **H4**: 1.25rem (20px)
- **H5**: 1.125rem (18px)
- **Body Large**: 1.125rem (18px)
- **Body**: 1rem (16px)
- **Body Small**: 0.875rem (14px)
- **Caption**: 0.75rem (12px)

### Line Heights

- **Tight**: 1.25
- **Normal**: 1.5
- **Relaxed**: 1.75
- **Loose**: 2

## Spacing System

### Spacing Scale (Tailwind-based)

- 0: 0px
- 1: 0.25rem (4px)
- 2: 0.5rem (8px)
- 3: 0.75rem (12px)
- 4: 1rem (16px)
- 5: 1.25rem (20px)
- 6: 1.5rem (24px)
- 8: 2rem (32px)
- 10: 2.5rem (40px)
- 12: 3rem (48px)
- 16: 4rem (64px)
- 20: 5rem (80px)

### Component Spacing

- **Section Padding**: 80px (Desktop), 48px (Mobile)
- **Card Padding**: 24px
- **Button Padding**: 12px 24px
- **Input Padding**: 12px 16px

## Grid System

### Container

- **Max Width**: 1280px (xl)
- **Padding**: 1rem (Mobile), 2rem (Desktop)
- **Centered**

### Grid Columns

- **12-column grid system**
- **Gap**: 24px (Desktop), 16px (Mobile)

### Breakpoints

- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 1024px (md, lg)
- **Desktop**: > 1024px (xl, 2xl)
- **Wide**: > 1536px (2xl)

## Component Library

### Buttons

#### Primary Button

- Background: Primary Blue
- Text: White
- Padding: 12px 32px
- Border Radius: 8px
- Font Weight: 600
- Hover: Darker Blue
- Active: Scale 0.95
- Disabled: Gray, Opacity 0.5

#### Secondary Button

- Background: Transparent
- Border: 2px Primary Blue
- Text: Primary Blue
- Hover: Background Primary Blue

#### Text Button

- No Background
- Text: Primary Blue
- Hover: Underline

#### Icon Button

- Square/Circle
- Size: 40px x 40px
- Icon: 20px

#### Button Sizes

- **Small**: 10px 20px, Text 14px
- **Medium**: 12px 32px, Text 16px
- **Large**: 16px 48px, Text 18px
- **XL**: 20px 64px, Text 20px

### Cards

#### Standard Card

- Background: White
- Border: 1px #E5E7EB
- Border Radius: 12px
- Padding: 24px
- Shadow: 0 2px 8px rgba(0,0,0,0.08)
- Hover: Shadow 0 4px 16px rgba(0,0,0,0.12)

#### Featured Card

- Gradient Border
- Larger Shadow
- Badge/Ribbon (if featured)

#### Image Card

- Image on Top
- Content Below
- Aspect Ratio: 16:9 or 4:3
- Overlay on Hover

#### Stats Card

- Icon (Top-left)
- Large Number (Center)
- Label (Bottom)
- Background Gradient

### Forms

#### Input Fields

- Border: 1px #D1D5DB
- Border Radius: 8px
- Padding: 12px 16px
- Font Size: 16px
- Focus: Blue Border, Shadow
- Error: Red Border
- Success: Green Border

#### Textarea

- Min Height: 120px
- Resizable: Vertical
- Same styling as Input

#### Select/Dropdown

- Custom Styling
- Arrow Icon
- Dropdown Animation

#### Checkbox/Radio

- Custom Styled
- Large Clickable Area
- Smooth Transition

#### File Upload

- Drag & Drop Zone
- Browse Button
- Preview Thumbnail
- Progress Bar

### Navigation

#### Header/Navbar

- Height: 80px (Desktop), 64px (Mobile)
- Background: White
- Shadow: 0 2px 4px rgba(0,0,0,0.06)
- Sticky on Scroll
- Transition: Smooth

#### Menu Items

- Hover: Underline Animation
- Active: Bold, Colored
- Dropdown: Smooth Slide

#### Mobile Menu

- Hamburger Icon (3 lines)
- Slide-in from Right
- Full-screen Overlay
- Close Animation

#### Breadcrumbs

- Home / Category / Page
- Separator: › or /
- Last Item: Not Clickable

### Modals/Popups

#### Modal

- Centered
- Max Width: 600px
- Background: White
- Border Radius: 16px
- Overlay: Dark rgba(0,0,0,0.5)
- Close Button (X)
- Smooth Fade-in
- ESC to Close

#### Popup/Tooltip

- Small Size
- Arrow Pointer
- Auto Position
- Fade in/out

## Icons & Imagery

### Icon System

**Icon Library**: Lucide React / Heroicons

- Size: 16px, 20px, 24px, 32px
- Stroke Width: 2px
- Color: Inherit or Custom
- Hover: Scale or Color Change

**Icon Usage**:

- Navigation Icons
- Feature Icons
- Social Media Icons
- Status Icons (Success, Error, Warning)
- Action Icons (Edit, Delete, View)

### Image Guidelines

#### Photography

- Style: Authentic, Bright, Engaging
- Subjects: Students, Activities, Facilities
- Quality: High Resolution (min 1920px width)
- Format: WebP (with JPG fallback)

#### Illustrations

- Style: Modern, Friendly
- Use: Empty States, 404, Onboarding
- Color: Match Brand Palette

#### Aspect Ratios

- Hero: 21:9 or 16:9
- Featured Card: 16:9
- Thumbnail: 4:3
- Profile: 1:1 (Square)
- Banner: 3:1

#### Image Optimization

- Compression: TinyPNG/ImageOptim
- Lazy Loading: Yes
- Responsive Images: srcset
- Alt Text: Descriptive

## Animation & Transitions

### Animation Principles

#### Duration

- Quick: 150ms (Hover, Click)
- Normal: 300ms (Most Transitions)
- Slow: 500ms (Page Transitions)
- Very Slow: 800ms (Special Effects)

#### Easing

- ease-in: Start Slow
- ease-out: End Slow (Most Common)
- ease-in-out: Both
- cubic-bezier: Custom

#### Common Animations

- Fade In/Out
- Slide In (Top, Bottom, Left, Right)
- Scale (Zoom In/Out)
- Rotate
- Bounce
- Shake (Error States)

#### Hover Effects

- Button: Scale 1.05, Shadow
- Card: Lift (translateY), Shadow
- Link: Underline Slide
- Image: Zoom 1.1, Overlay
- Icon: Rotate or Change Color

## Accessibility

### WCAG Compliance

- **Contrast Ratios**: Minimum 4.5:1 for normal text
- **Keyboard Navigation**: Full site navigation via keyboard
- **Screen Reader Support**: Proper ARIA labels and semantic HTML
- **Focus Indicators**: Visible focus states for interactive elements

### Text Size Adjuster

- A- A A+ controls for text scaling
- Responsive to browser zoom settings

### High Contrast Mode

- Alternative color scheme for better visibility
- Toggle switch in user preferences

## Responsive Design

### Mobile First Approach

- Base styles for mobile devices
- Progressive enhancement for larger screens
- Touch-friendly interface elements

### Breakpoint Strategy

- Mobile: Single column layout
- Tablet: Multi-column layouts with adjusted spacing
- Desktop: Full-width layouts with maximum content width
- Wide: Extended layouts for large screens

### Touch Targets

- Minimum 44px for interactive elements
- Adequate spacing between touch targets
- Gestures support where appropriate

## Dark Mode

### Implementation

- Toggle switch in header/user menu
- System preference detection
- Local storage for user preference
- Smooth transition between modes

### Color Adjustments

- Inverted color scheme for dark mode
- Reduced brightness for images
- Special handling for charts and data visualizations

## Performance Considerations

### Loading States

- Skeleton screens for content loading
- Progress indicators for longer operations
- Optimistic UI updates where appropriate

### Lazy Loading

- Images and media below the fold
- Components that are not immediately visible
- Third-party scripts and widgets

### Code Splitting

- Route-based code splitting
- Component-based lazy loading
- Dynamic imports for heavy features
