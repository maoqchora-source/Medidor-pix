import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    console.log('Webhook recebido:', req.body)

    // Aqui você pode tratar os dados recebidos do Mercado Pago
    res.status(200).end()
  } else {
    res.status(405).json({ error: 'Método não permitido' })
  }
}