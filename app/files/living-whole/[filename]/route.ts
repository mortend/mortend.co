import { NextRequest, NextResponse } from 'next/server'

const RELEASE_URL =
  'https://github.com/mortend/living-whole/releases/download/v1.0.0'

export function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ filename: string }> },
) {
  return params.then(({ filename }) => {
    const safeFilename = encodeURIComponent(filename)
    return NextResponse.redirect(`${RELEASE_URL}/${safeFilename}`, 307)
  })
}
