import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ name: 'John Doe' })
  const { email } = req.body
  const FORM_ID = process.env.CONVERTKIT_FORM_ID
  const API_KEY = process.env.CONVERTKIT_API_KEY
  const API_URL = 'https://api.convertkit.com/v3/'
  const data = { email, api_key: API_KEY }

  return res.status(201).json({ FORM_ID, API_KEY, API_URL, data })

  // const response = await fetch(`${API_URL}forms/${FORM_ID}/subscribe`, {
  //   body: JSON.stringify(data),
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   method: 'POST',
  // })

  // return response
}
