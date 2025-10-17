// app/layout.tsx
import './globals.css'
import { ClerkProvider, UserButton } from '@clerk/nextjs'
import Link from 'next/link'

export const metadata = {
  title: 'My Print Shop',
  description: 'Custom tees made simple',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className='min-h-dvh antialiased text-gray-900'>
          <header className='border-b'>
            <div className='mx-auto max-w-6xl px-4 py-3 flex items-center justify-between'>
              <Link href='/' className='font-semibold'>
                My Print Shop
              </Link>
              <nav className='flex items-center gap-4'>
                <Link href='/dashboard/designs' className='text-sm'>
                  My Designs
                </Link>
                <UserButton
                  /* new API avoids legacy warnings */
                  signInUrl='/sign-in'
                  userProfileUrl='/user'
                  afterSignOutUrl='/sign-in'
                />
              </nav>
            </div>
          </header>
          <main className='mx-auto max-w-6xl px-4 py-8'>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  )
}
