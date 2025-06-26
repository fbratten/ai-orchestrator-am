/**
 * AI Orchestrator Main Entry Point
 * Coordinates AI agents for AlgoMingle development workflow
 */

import dotenv from 'dotenv';
import { OrchestratorService } from './orchestrator/orchestratorService.js';
import { logger } from './utils/logger.js';

// Load environment variables
dotenv.config();

async function main() {
  logger.info('Starting AI Orchestrator for AlgoMingle...');
  
  try {
    const orchestrator = new OrchestratorService();
    await orchestrator.initialize();
    
    logger.info('AI Orchestrator initialized successfully');
    
    // Keep the service running
    process.on('SIGINT', async () => {
      logger.info('Shutting down AI Orchestrator...');
      await orchestrator.shutdown();
      process.exit(0);
    });
    
  } catch (error) {
    logger.error('Failed to start AI Orchestrator:', error);
    process.exit(1);
  }
}

main();
