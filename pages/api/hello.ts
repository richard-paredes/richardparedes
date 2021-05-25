import { NextApiHandler } from 'next'
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export const helloAPI: NextApiHandler<{ name: string }> = (req, res) => {
  return res.status(200).json({ name: 'John Doe' })
}
