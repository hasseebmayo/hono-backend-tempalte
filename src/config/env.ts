import * as z from 'zod'

// Create zod schema for env variables
const envSchema = z.object({
  PORT_NO: z.coerce.number(),
})

export async function parseENV() {
  try {
    envSchema.parse(Bun.env)
  } catch (err) {
    console.error('Invalid Env variables Configuration::::', err)
    process.exit(1)
  }
}

declare module 'bun' {
  interface Env extends z.TypeOf<typeof envSchema> {}
}
