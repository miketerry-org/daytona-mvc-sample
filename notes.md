# Multi-Tenant Task Management App (MVC) - Example Setup

This document outlines a **pretend multi-tenant Task Management MVC app** suitable for development/testing with four environments: `development`, `testing`, `staging`, and `production`. Each tenant has its **own SQLite database**.

---

## 1. Database Schema (Per Tenant)

### `users`

| Column     | Type                              | Notes                       |
| ---------- | --------------------------------- | --------------------------- |
| id         | INTEGER PRIMARY KEY AUTOINCREMENT | Unique user ID              |
| name       | TEXT                              | User full name              |
| email      | TEXT UNIQUE                       | User email                  |
| role       | TEXT                              | e.g., 'admin', 'member'     |
| created_at | DATETIME                          | Default `CURRENT_TIMESTAMP` |

### `projects`

| Column      | Type                              | Notes                       |
| ----------- | --------------------------------- | --------------------------- |
| id          | INTEGER PRIMARY KEY AUTOINCREMENT | Project ID                  |
| name        | TEXT                              | Project name                |
| description | TEXT                              | Optional description        |
| owner_id    | INTEGER                           | FK to `users.id`            |
| created_at  | DATETIME                          | Default `CURRENT_TIMESTAMP` |

### `tasks`

| Column      | Type                              | Notes                               |
| ----------- | --------------------------------- | ----------------------------------- |
| id          | INTEGER PRIMARY KEY AUTOINCREMENT | Task ID                             |
| project_id  | INTEGER                           | FK to `projects.id`                 |
| assigned_to | INTEGER                           | FK to `users.id`                    |
| title       | TEXT                              | Task title                          |
| description | TEXT                              | Optional description                |
| status      | TEXT                              | e.g., 'todo', 'in-progress', 'done' |
| due_date    | DATETIME                          | Optional                            |
| created_at  | DATETIME                          | Default `CURRENT_TIMESTAMP`         |

### `comments`

| Column     | Type                              | Notes                       |
| ---------- | --------------------------------- | --------------------------- |
| id         | INTEGER PRIMARY KEY AUTOINCREMENT | Comment ID                  |
| task_id    | INTEGER                           | FK to `tasks.id`            |
| author_id  | INTEGER                           | FK to `users.id`            |
| content    | TEXT                              | Comment text                |
| created_at | DATETIME                          | Default `CURRENT_TIMESTAMP` |
