// app/sign-up/[[...sign-up]]/page.tsx
'use client'

import { SignUp } from '@clerk/nextjs'

export default function SignUpPage() {
  return (
    <div className='mx-auto max-w-md p-6'>
      <SignUp
        /* avoid legacy prop warnings by using the new prop */
        fallbackRedirectUrl='/dashboard/designs'
      />
    </div>
  )
}
