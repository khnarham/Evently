import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const protectedRoute = createRouteMatcher([
        '/events/:id',
        '/api/webhook/clerk',
        '/api/webhook/stripe',
        '/api/uploadthing',
        '/api/webhook/clerk',
        '/api/webhook/stripe',
        '/api/uploadthing'

]);

export default clerkMiddleware((auth, req) => {
    if (protectedRoute(req)) auth().protect();
  });

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};