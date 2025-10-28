import { useEffect, useState } from 'react'

export default function PagamentoPix() {
  const [qrCode, setQrCode] = useState<string | null>(null)

  useEffect(() => {
    const gerarPix = async () => {
      const res = await fetch('/api/pix?action=pix&meter_id=123&valor=10&chave=MEDIDOR_PIX_563024BiMi')
      const data = await res.json()
      setQrCode(data.qr_code_base64)
    }

    gerarPix()
  }, [])

  return (
    <div>
      <h1>Pagamento via Pix</h1>
      {qrCode ? (
        <img src={qrCode} alt="QR Code Pix" />
      ) : (
        <p>Gerando QR Code...</p>
      )}
    </div>
  )
}