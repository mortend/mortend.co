export function GET() {
  return new Response(
    ['https://mortend.co/', 'https://mortend.co/books/living-whole'].join('\n'),
    {
      headers: { 'Content-Type': 'text/plain' },
    },
  )
}
