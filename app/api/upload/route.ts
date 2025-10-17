// app/api/upload/route.ts
export const runtime = 'nodejs'

import { NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs/server'
import { cloudinary } from '@/lib/cloudinary'

export async function POST(req: Request) {
  const { userId } = await auth()
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const form = await req.formData()
    const file = form.get('file')
    if (!file || !(file instanceof Blob)) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 })
    }

    const buffer = await file.arrayBuffer()
    const base64 = Buffer.from(buffer).toString('base64')
    const dataUri = `data:${file.type};base64,${base64}`

    const result = await cloudinary.uploader.upload(dataUri, {
      // for dev: use an UNSIGNED preset you created in Cloudinary Console
      upload_preset: process.env.CLOUDINARY_UPLOAD_PRESET, // e.g. "unsigned_preset"
      folder: 'designs', // optional
    })

    return NextResponse.json({
      secure_url: result.secure_url,
      public_id: result.public_id,
    })
  } catch (err) {
    console.error('[POST /api/upload] error:', err)
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 })
  }
}
