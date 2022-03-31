import { setupServer } from 'msw/node';
import { handler } from './handler';

// This configures a request mocking server with the given request handlers.
export const server = setupServer(...handler);
