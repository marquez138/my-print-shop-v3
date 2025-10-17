import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const publicRoutes = createRouteMatcher(['/sign-in(.*)', '/sign-up(.*)'])

export default clerkMiddleware((auth, req) => {
  // If the requested route is not in publicRoutes, enforce auth
  if (!publicRoutes(req)) {
    auth.protect()
  }
})

export const config = {
  matcher: [
    // ignore static files and Next internals
    '/((?!_next|.*\\..*).*)',
    '/(api)(.*)',
  ],
}
