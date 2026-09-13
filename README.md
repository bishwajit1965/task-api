# Task API

A TypeScript-based REST API built with **Node.js, Express, MongoDB, and Mongoose**.

## 📌 Overview

`task-api` is a practical backend project designed to provide a realistic environment for learning and integrating modern software development and deployment technologies.

The project is intentionally kept small enough to understand while being realistic enough to practice backend development, automated testing, containerization, CI/CD, and container orchestration.

Rather than being developed as a large standalone product, `task-api` serves as a **continuous engineering laboratory** where technologies are introduced and integrated progressively.

---

## 🎯 Purpose

The primary purpose of `task-api` is to provide a single, continuously evolving codebase through which modern development and deployment technologies can be learned through practical implementation.

The project is used to understand not only individual technologies, but also **how they work together throughout the software development lifecycle**.

The learning and integration path is:

```text
TypeScript
    ↓
Testing
    ↓
Docker
    ↓
CI/CD
    ↓
Kubernetes
    ↓
Git
```

Each stage builds on the previous stages rather than being treated as an isolated exercise.

---

## 🧪 Project as an Engineering Laboratory

`task-api` is not intended to become a large production product.

Its primary role is to act as a manageable but realistic environment for:

* learning new technologies
* implementing them in a real application
* integrating different technologies
* experimenting with configurations
* intentionally encountering and diagnosing problems
* understanding failures and recovery
* gradually approaching production-oriented development practices

The project therefore emphasizes **hands-on engineering rather than isolated tutorials or toy examples**.

---

## 🛠️ Technology Stack

| Technology     | Purpose                                               |
| -------------- | ----------------------------------------------------- |
| **TypeScript** | Application development and type safety               |
| **Node.js**    | JavaScript runtime                                    |
| **Express**    | REST API and server development                       |
| **MongoDB**    | Database                                              |
| **Mongoose**   | MongoDB object modeling                               |
| **Vitest**     | Automated testing                                     |
| **Docker**     | Application and database containerization             |
| **CI/CD**      | Automated testing, building, and deployment           |
| **Kubernetes** | Container orchestration                               |
| **Git**        | Version control and professional development workflow |

---

## 🚀 Current Development Focus

The project is being developed progressively.

The current focus is **CI/CD**, building on the existing:

* TypeScript application
* Express REST API
* MongoDB database
* Mongoose integration
* Vitest test suite
* Docker image
* Docker containers
* Docker network

The objective is to gradually establish an automated development pipeline capable of:

```text
Code
  ↓
Automated Tests
  ↓
Build
  ↓
Docker Image
  ↓
Deployment
```

---

## 🧩 Current Environment

The application currently uses:

* a Node.js/TypeScript API container
* a MongoDB container
* a Docker bridge network connecting the application and database
* Vitest for automated tests

The containers are connected through a dedicated Docker network so that the API can communicate with MongoDB using the container's network name.

---

## 🧪 Testing

The project uses **Vitest** for automated testing.

The test suite currently includes both basic and integration-level tests, including database interaction.

Example:

```bash
npm test
```

The test environment includes MongoDB integration, allowing the project to verify application behavior against an actual database rather than relying exclusively on isolated unit tests.

---

## 🐳 Docker

Docker is used to containerize the application and database environment.

The Docker setup provides practical experience with:

* Docker images
* Docker containers
* Dockerfiles
* container networking
* application/database communication
* container lifecycle management

The application and MongoDB run as separate containers connected through a Docker network.

---

## 🔄 CI/CD

CI/CD will be progressively integrated into the project.

The CI stage will automate activities such as:

* installing dependencies
* running automated tests
* building the application
* validating the application before deployment

The CD stage will eventually automate application delivery and deployment.

The goal is to move from manually executing development operations toward a repeatable automated pipeline.

---

## ☸️ Kubernetes

Kubernetes will be introduced after the Docker and CI/CD stages are sufficiently understood.

It will be used to learn:

* container orchestration
* deployments
* services
* scaling
* configuration
* application networking
* container lifecycle management

The Kubernetes stage will build directly upon the containerized application created during the Docker stage.

---

## 🌿 Git

Git will be integrated after the main technology-learning stages are completed.

It will then be used to understand:

* version control
* branching
* merging
* remote repositories
* collaborative workflows
* professional development practices
* integration with CI/CD

The purpose is to understand Git both as a version-control system and as an essential component of a professional software development workflow.

---

## 📚 Learning Philosophy

The project follows a practical learning approach:

```text
Learn
  ↓
Execute
  ↓
Experiment
  ↓
Break
  ↓
Diagnose
  ↓
Recover
  ↓
Repeat
  ↓
Move On
```

The intention is to develop practical engineering ability rather than simply memorize commands or concepts.

---

## 🎯 Long-Term Goal

The long-term goal of `task-api` is to provide a complete, understandable example of how a modern backend application can evolve from a simple TypeScript API into a containerized, tested, automated, and orchestrated application.

By the end of the learning cycle, the project should demonstrate the relationship between:

```text
Application Development
        ↓
Testing
        ↓
Containerization
        ↓
Automation
        ↓
Deployment
        ↓
Orchestration
        ↓
Version Control
```

This makes `task-api` a practical foundation for understanding the **modern software development lifecycle from code to deployment**.
