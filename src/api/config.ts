// Fail-loud: a missing env must never silently fall back to localhost
// (the old pattern at client.ts:11 shipped a localhost URL to every user).
const url = import.meta.env.VITE_API_URL
if (!url) {
  throw new Error('VITE_API_URL is required — set it in .env.local (see .env.example)')
}
export const API_URL: string = url
export const USE_MOCK: boolean = import.meta.env.VITE_USE_MOCK === 'true'
