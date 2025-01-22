# Take Home API with Express, Prisma, and MySQL

This project implements a basic CRUD (Create, Read, Update, Delete) API for managing tasks using Express, Prisma, and MySQL.

## Features
- **Express:** A fast and minimalist web framework for Node.js.
- **Prisma:** An ORM (Object-Relational Mapping) for seamless database interactions.
- **MySQL:** A popular relational database used to store and manage tasks.

## Prerequisites
Before running this project, ensure you have the following installed on your machine:

- Node.js (v18 or higher)
- npm (Node Package Manager) or Yarn
- MySQL (configured and running)

## Getting Started

### 1. Clone the Repository
```bash
git clone <repository_url>
cd <repository_folder>
```

### 2. Install Dependencies
Run the following command to install all required dependencies:
```bash
npm install
```

### 3. Configure Database Connection
Create a `.env` file in the root directory of the project and add your database connection URL in the following format:

```env
DATABASE_URL="mysql://USER:PASSWORD@HOST:PORT/DATABASE"
```

Replace:
- `USER` with your MySQL username.
- `PASSWORD` with your MySQL password.
- `HOST` with your MySQL server's host.
- `PORT` with your MySQL server's port (default: `3306`).
- `DATABASE` with the name of your database.

### 4. Generate Prisma Client
Run the following command to generate the Prisma Client:
```bash
npx prisma generate
```

### 5. Run Database Migrations
Apply the database schema using the following command:
```bash
npx prisma migrate dev --name init
```

### 6. Start the Server
Run the server using the following command:
```bash
npm start
```
The API will be available at `http://localhost:3001`.

## API Endpoints

### Base URL
```
https://take-home-backend-production.up.railway.app
```

### Endpoints
#### Tasks
- **Create Task**: `POST /tasks`
  - Request Body:
    ```json
    {
      "title": "Task title",
      "completed": false,
      "color": "#ff0000"
    }
    ```
- **Read All Tasks**: `GET /tasks`
- **Read Task by ID**: `GET /tasks/:id`
- **Update Task**: `PATCH /tasks/:id`
  - Request Body:
    ```json
    {
      "title": "Task title 1",
      "completed": true,
      "color": "#ff0000"
    }
    ```
- **Delete Task**: `DELETE /tasks/:id`

## Project Structure
```
project-folder/
├── prisma/          # Prisma schema and migrations
├── src/
│   ├── tasksRepository.ts # Task repository implementation
│   └── tasksApi.ts  # Task api implementation
│   └── test/  
│        └── tasksApi.test.ts # Task api test implementation
├── .env             # Environment variables
├── package.json     # Project dependencies and scripts
└── tsconfig.json    # TypeScript configuration
└── server.ts # Main server file
```

## Notes
- Ensure your MySQL database is running and accessible before starting the API.
- Use tools like [Postman](https://www.postman.com/) or [Insomnia](https://insomnia.rest/) to test API endpoints.

## CI/CD with Railway
This project uses **Railway** for continuous integration and deployment of the backend.

- The API is deployed at: `https://take-home-backend-production.up.railway.app`
- Note: To access the tasks endpoint, append `/tasks/` to the URL. For example: `https://take-home-backend-production.up.railway.app/tasks/`

## License
This project is licensed under the MIT License. Feel free to use and modify it as needed.

## Contributions
Contributions are welcome! Please submit a pull request or open an issue to report bugs or suggest improvements.

