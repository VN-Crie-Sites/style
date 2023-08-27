import { FloatingWhatsApp } from 'react-floating-whatsapp'
import avatar from '../../public/img/whats.jpeg'

export function WhatsApp() {
  const dateNow = new Date()
  const hours = dateNow.getHours()

  const messageStatus = []

  if (hours < 18 && hours > 9) {
    messageStatus.push(
      'Online',
      `Ola, seja bem vindo!!! \nSomos a Style - Moda Praia. \n\nComo podemos te ajudar?`,
    )
  } else {
    messageStatus.push(
      'Offline',
      `Ola, seja bem vindo!!! \nSomos a Style - Moda Praia. \n\nNo momento não estamos disponiveis. Fique atento ao nosso horário de funcionamento: \n\nSeg à Dom: 08:00h às 18:00h!`,
    )
  }

  return (
    <FloatingWhatsApp
      phoneNumber="12988819822"
      accountName="Style - Moda Praia"
      chatMessage={messageStatus[1]}
      darkMode
      placeholder="Escreva uma mensagem ..."
      allowClickAway
      allowEsc
      avatar={avatar}
      statusMessage={messageStatus[0]}
      chatboxHeight={450}
    />
  )
}
