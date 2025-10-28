import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { action, meter_id, valor, chave } = req.query

  if (action !== 'pix' || chave !== process.env.GASS_SECRET_KEY) {
    return res.status(403).json({ error: 'Acesso negado' })
  }

  // Simulação de resposta Pix
  const fakePix = {
    qr_code: '00020101021226890014br.gov.bcb.pix2563...',
    qr_code_base64: 'data:image/png;base64,...',
    valor,
    meter_id,
  }

  res.status(200).json(fakePix)
}