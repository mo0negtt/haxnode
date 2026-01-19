# HaxNode - Visual Node Editor for Haxball Scripts

## Overview

HaxNode is a web-based visual programming tool that allows users to configure Haxball game scripts through a drag-and-drop node editor interface. Users can create, connect, and customize nodes representing different configuration categories (host settings, admin access, game rules, visuals, social features, bot settings, and location) to generate ready-to-use JavaScript scripts for Haxball rooms.

The application follows a modern full-stack architecture with a React frontend using React Flow for the node editor canvas, and an Express backend with PostgreSQL for storing saved configurations.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight client-side routing)
- **Node Editor**: @xyflow/react (React Flow) for the visual node canvas with drag-and-drop functionality
- **Code Editor**: Monaco Editor (@monaco-editor/react) for displaying generated JavaScript preview
- **State Management**: TanStack React Query for server state, React useState for local component state
- **Styling**: Tailwind CSS with shadcn/ui component library (New York style variant)
- **Build Tool**: Vite with custom plugins for Replit integration

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript with tsx for development execution
- **API Design**: RESTful JSON API with Zod validation for request/response schemas
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Session Management**: Express sessions with connect-pg-simple for PostgreSQL session storage

### Data Flow
1. Users drag nodes from the sidebar onto the React Flow canvas
2. Node values are stored in component state and synchronized across the editor
3. A script generator compiles all node values into a JavaScript file based on a template
4. Configurations can be saved to PostgreSQL via the REST API
5. Generated scripts can be downloaded as .js files using file-saver

### Project Structure
```
├── client/           # Frontend React application
│   └── src/
│       ├── components/   # UI components including nodes/
│       ├── hooks/        # Custom React hooks
│       ├── lib/          # Utilities (queryClient, utils)
│       └── pages/        # Route pages (HomePage, EditorPage)
├── server/           # Backend Express application
│   ├── index.ts      # Server entry point
│   ├── routes.ts     # API route definitions
│   ├── storage.ts    # Database storage layer
│   └── db.ts         # Database connection
├── shared/           # Shared code between client/server
│   ├── schema.ts     # Drizzle database schema
│   └── routes.ts     # API route contracts with Zod
└── attached_assets/  # Reference Haxball script templates
```

### Node Types
The visual editor supports seven node categories:
- **ConfigHost**: Room name, visibility, max players, password
- **Admin**: Admin key, VIP/reserve key
- **GameRules**: Map selection, time/score limits, game modes
- **Visuals**: Player size, team jersey configurations
- **Social**: Welcome messages, colors, Discord webhooks
- **Bot**: Bot visibility and name settings
- **Location**: Geographic region selection with automatic coordinates

## External Dependencies

### Database
- **PostgreSQL**: Primary data store for saved configurations
- **Drizzle ORM**: Type-safe database queries and migrations
- **connect-pg-simple**: Session storage in PostgreSQL

### Key NPM Packages
- **@xyflow/react**: Visual node editor framework
- **@monaco-editor/react**: Code preview editor
- **@tanstack/react-query**: Async state management
- **file-saver**: Client-side file download functionality
- **zod**: Runtime type validation for API contracts
- **drizzle-zod**: Integration between Drizzle schemas and Zod

### UI Component Libraries
- **@radix-ui/***: Headless UI primitives (dialog, dropdown, select, etc.)
- **shadcn/ui**: Pre-styled component collection using Radix
- **lucide-react**: Icon library
- **class-variance-authority**: Component variant management
- **tailwind-merge**: Tailwind class conflict resolution

### Environment Requirements
- `DATABASE_URL`: PostgreSQL connection string (required)
- Node.js ES modules enabled (`"type": "module"` in package.json)

### Build Commands
- `npm run dev`: Development server with hot reload
- `npm run build`: Production build (Vite + esbuild)
- `npm run db:push`: Push database schema changes