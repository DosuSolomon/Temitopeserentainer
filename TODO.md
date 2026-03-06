# TODO: Connect to Local PostgreSQL Database

## Steps Completed:
1. [x] Create Prisma schema for Song and SongRequest entities
2. [x] Create Express server with API endpoints
3. [x] Update frontend API client to use local backend

## Steps Remaining:
4. [ ] Configure database connection in server/.env
5. [ ] Install server dependencies: cd server && npm install
6. [ ] Generate Prisma client: npm run db:generate
7. [ ] Push schema to database: npm run db:push
8. [ ] Start the backend server: npm run dev (in server folder)
9. [ ] Start the frontend: npm run dev (in root folder)

## Database Configuration
- Copy server/.env.example to server/.env
- Update DATABASE_URL with your PostgreSQL credentials
- Format: postgresql://username:password@localhost:5432/database_name

## API Endpoints (running on port 3001):
- GET    /api/songs        - List all songs
- POST   /api/songs        - Create a new song
- DELETE /api/songs/:id    - Delete a song
- GET    /api/requests     - List all requests (optional ?status=pending)
- POST   /api/requests     - Create a new request
- PATCH  /api/requests/:id - Update request status


