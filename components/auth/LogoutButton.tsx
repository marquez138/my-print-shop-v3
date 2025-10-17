'use client'
import { SignOutButton } from '@clerk/nextjs'

export default function LogoutButton() {
  return (
    <SignOutButton redirectUrl='/sign-in'>
      <button className='text-sm underline underline-offset-4'>Sign out</button>
    </SignOutButton>
  )
}
