# AI Orchestrator - AlgoMingle

AI-powered services for the AlgoMingle messaging platform, providing intelligent features and content moderation.

## Overview

This service provides:
- Content moderation and filtering
- Message suggestions and auto-completion
- Language translation
- Sentiment analysis
- Spam detection
- Integration with multiple AI providers (Anthropic, OpenAI)

## Tech Stack

- **Language**: JavaScript/TypeScript
- **Runtime**: Node.js 18+
- **Framework**: Express.js
- **AI Integration**: OpenAI GPT, LangChain
- **GitHub Integration**: GitHub API, Octokit
- **Database**: PostgreSQL
- **Caching**: Redis
- **Testing**: Jest

## Project Structure

```
ai-orchestrator-am/
├── src/
│   ├── orchestrator/   # Main orchestration logic
│   ├── developer/      # Developer AI services
│   ├── reviewer/       # Code review AI services
│   ├── api/           # Express routes
│   ├── services/      # Business logic
│   ├── models/        # Data models
│   └── utils/        # Utility functions
├── tests/            # Test suites
├── docker/           # Docker configurations
└── package.json      # Dependencies
```

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL 14+
- Redis 6+
- API keys for AI services (OpenAI)
- GitHub personal access token

### Installation

```bash
# Clone the repository
git clone https://github.com/fbratten/ai-orchestrator-am.git
cd ai-orchestrator-am

# Install dependencies
npm install
# or
yarn install

# Set up environment variables
cp .env.example .env
# Edit .env with your API keys and configuration
```

### Development

```bash
# Run database migrations
npm run migrate

# Start the development server
npm run dev
# or
yarn dev

# Run tests
npm test
# or
yarn test

# Run with Docker
docker-compose up
```

## API Documentation

Once running, access the API documentation at:
- API Docs: `http://localhost:8080/api-docs`

## AI Orchestration

This service includes a 3-tier AI system:
- **Developer AI**: Generates code based on prompts
- **Reviewer AI**: Reviews and validates generated code
- **Orchestrator**: Manages the workflow between AIs

```bash
# Run orchestration workflow
npm run orchestrate
```

## Related Repositories

This is part of the AlgoMingle multi-repository project:
- [algorand-contracts-am](https://github.com/fbratten/algorand-contracts-am) - Smart contracts
- [algomingle](https://github.com/fbratten/algomingle) - Frontend application
- [devops-automation-am](https://github.com/fbratten/devops-automation-am) - CI/CD automation
- [development-playbook-am](https://github.com/fbratten/development-playbook-am) - Documentation

---

## 🚧 Project Status

This repository is part of an active development project and is **not currently accepting external contributions**.

- ✅ Feel free to **explore, fork, and learn** from the code
- 💬 **Questions?** Please use the [Discussions](../../discussions) tab
- ⭐ **Like the project?** Give it a star!
- 📧 **Private inquiries:** jack.bratten@adaptivearts.ai

For more information, see [CONTRIBUTING.md](CONTRIBUTING.md).
