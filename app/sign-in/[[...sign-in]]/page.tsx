// app/sign-in/[[...sign-in]]/page.tsx
'use client'

import { SignIn } from '@clerk/nextjs'

export default function SignInPage() {
  return (
    <div className='mx-auto max-w-md p-6'>
      <SignIn
        /* avoid legacy prop warnings by using the new prop */
        fallbackRedirectUrl='/dashboard/designs'
      />
    </div>
  )
}
