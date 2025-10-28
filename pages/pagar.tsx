import { useEffect } from 'react'

export default function Pagar() {
  useEffect(() => {
    const iniciarPagamento = async () => {
      const res = await fetch('/api/pix-checkout?meter_id=123&valor=10')
      const data = await res.json()
      if (data.init_point) {
        window.location.href = data.init_point // redireciona para o Mercado Pago
      } else {
        alert('Erro ao iniciar pagamento')
      }
    }

    iniciarPagamento()
  }, [])

  return <p>Redirecionando para o pagamento Pix...</p>
}