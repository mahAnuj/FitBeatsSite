# FitBeats - Women's Fitness Studio Website

## Overview

FitBeats is a full-stack web application for a women's fitness studio. It features a modern, responsive design built with React and TypeScript, showcasing fitness programs and facilitating client inquiries through a contact form system.

## User Preferences

```
Preferred communication style: Simple, everyday language.
```

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **UI Framework**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Validation**: Zod schemas shared between client and server
- **Development**: In-memory storage fallback for development

## Key Components

### Frontend Components
- **Navigation**: Sticky header with smooth scrolling navigation
- **Hero Section**: Landing area with call-to-action buttons
- **About Section**: Founder introduction and credentials
- **Services Section**: Fitness program offerings with visual cards
- **Gallery Section**: Studio and class photos in responsive grid
- **Testimonials**: Customer reviews with star ratings
- **Contact Form**: Inquiry submission with validation
- **Footer**: Social links and studio information

### Backend Routes
- `POST /api/inquiries` - Submit new client inquiries
- `GET /api/inquiries` - Retrieve all inquiries (admin functionality)

### Database Schema
- **Users table**: Authentication ready (id, username, password)
- **Inquiries table**: Contact form submissions (id, name, email, phone, program, message, createdAt)

## Data Flow

1. **Client Inquiry Process**:
   - User fills contact form on frontend
   - Form data validated with Zod schema
   - React Hook Form handles client-side validation
   - TanStack Query manages API request
   - Express server validates and stores inquiry
   - Success/error feedback via toast notifications

2. **Content Delivery**:
   - Static content served through React components
   - Images loaded from Unsplash CDN
   - Responsive design adapts to mobile/desktop
   - Smooth scrolling navigation between sections

## External Dependencies

### UI and Styling
- **Radix UI**: Accessible component primitives
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library
- **Class Variance Authority**: Component variant management

### Development Tools
- **Vite**: Development server and build tool
- **TypeScript**: Type safety across the stack
- **ESBuild**: Fast bundling for production
- **PostCSS**: CSS processing with Autoprefixer

### Database and Validation
- **Drizzle ORM**: Type-safe database queries
- **Neon Database**: Serverless PostgreSQL hosting
- **Zod**: Runtime schema validation
- **date-fns**: Date manipulation utilities

## Deployment Strategy

### Build Process
- Frontend built with Vite to `dist/public`
- Backend bundled with ESBuild to `dist/index.js`
- Shared schema types available across client/server
- Environment variables for database configuration

### Development Environment
- Hot module replacement via Vite
- TypeScript compilation checking
- Database migrations via Drizzle Kit
- Memory storage fallback for local development

### Production Considerations
- Static asset serving through Express
- Database connection via environment variables
- Error handling middleware for API routes
- CORS and security headers (to be implemented)

The application follows a monorepo structure with clear separation between client, server, and shared code, making it maintainable and scalable for a fitness studio's digital presence.