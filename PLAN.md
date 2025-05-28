# Event App Backend - Database & Models Plan

## My Responsibilities
I am responsible for:
1. MongoDB Atlas Integration
2. Database Models Creation and Management

## Project Requirements

### Database Requirements
1. MongoDB Atlas Setup
   - Database name: `event-app`
   - User authentication
   - Network access configuration
   - Connection string management

### Model Requirements

#### User Model
Required fields:
- Username (unique)
- Email (unique)
- Password (hashed)
- CreatedAt timestamp

#### Event Model
Required fields:
- Name
- Location
- Description (precis)
- DateTime
- CreatedBy (reference to User)
- CreatedAt timestamp

## Implementation Progress

### 1. MongoDB Atlas Setup
- ✅ Created database (`event-app`)
- ✅ Set up database user
- ✅ Configured network access
- ✅ Obtained connection string

### 2. Environment Configuration
- ✅ Created `.env` file
- ✅ Added `.env` to `.gitignore`
- ⏳ Need to populate `.env` with:
  ```
  MONGODB_URI=mongodb+srv://<username>:<password>@<cluster-url>/event-app?retryWrites=true&w=majority
  ```

### 3. Database Models
- ✅ Created User Model
- ✅ Created Event Model

## Next Steps
1. Install required dependencies:
   ```bash
   npm install mongoose dotenv
   ```

2. Test database connection:
   - Verify MongoDB Atlas connection
   - Test model creation
   - Ensure proper indexing on unique fields

## Notes
- All other backend functionality (routes, controllers, authentication) will be handled by other team members
- Focus is solely on database setup and model definitions
- Models should be designed to support the frontend requirements for:
  * User authentication
  * Event CRUD operations
  * Event filtering and searching 