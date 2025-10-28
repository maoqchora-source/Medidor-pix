import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { meter_id, valor } = req.query

  try {
    const response = await axios.post(
      'https://api.mercadopago.com/checkout/preferences',
      {
        items: [
          {
            title: `Recarga para medidor ${meter_id}`,
            quantity: 1,
            unit_price: Number(valor)
          }
        ],
        payment_methods: {
          default_payment_method_id: 'pix'
        },
        back_urls: {
          success: 'https://seusite.com/pix-sucesso',
          failure: 'https://seusite.com/pix-erro',
          pending: 'https://seusite.com/pix-pendente'
        },
        auto_return: 'approved'
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.MERCADO_PAGO_ACCESS_TOKEN}`
        }
      }
    )

    res.status(200).json(response.data)
  } catch (error: any) {
    console.error('Erro ao criar preferência:', error.response?.data || error.message)
    res.status(500).json({ error: 'Erro ao criar preferência de pagamento' })
  }
}