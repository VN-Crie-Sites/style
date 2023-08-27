import { MapPinLine, WhatsappLogo } from 'phosphor-react'
import { cardsContentPlace, cardsContentService } from '../assets/cardsContent'
import { Biquinis } from '../modalContent/biquinis'
import { Protetor } from '../modalContent/protetor'
import { Oculos } from '../modalContent/oculos'
import { Bermudas } from '../modalContent/bermudas'
import { Cooler } from '../modalContent/cooler'
import { Brinquedos } from '../modalContent/brinquedos'
import { ButtonModal } from './ButtonModal'
import { Card } from './Card'
import { CardPlace } from './CardPlace'
import { Center } from './Center'
import { useForm } from 'react-hook-form'
import emailjs from 'emailjs-com'

interface FormProps {
  name: string
  email: string
  subject: string
  message: string
}

export function Content() {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<FormProps>({
    mode: 'onBlur',
    defaultValues: {
      email: '',
      message: '',
      name: '',
      subject: '',
    },
  })

  return (
    <main className="">
      <div id="services" className="min-h-screen flex py-20">
        <Center>
          <h1 className="font-bold text-4xl text-center leading-tight md:flex md:flex-col">
            Nossos Serviços {' '}
          </h1>
          <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 justify-self-auto grid-cols-1 gap-4">
            {cardsContentService.map((card) => {
              return (
                <Card
                  key={card.id}
                  title={card.title}
                  about={card.about}
                  image={card.imageSource}
                >
                  <ButtonModal
                    title={card.title}
                    button={'Entre em contato'}
                  >
                    {card.id === 0 ? (
                      <Biquinis />
                    ) : card.id === 1 ? (
                      <Bermudas />
                    ) : card.id === 2 ? (
                      <Brinquedos />
                    ) : card.id === 3 ? (
                      <Cooler />
                    ) : card.id === 4 ? (
                      <Protetor />
                    ) : (
                      <Oculos />
                    )}
                  </ButtonModal>
                </Card>
              )
            })}
          </div>
        </Center>
      </div>
      <div className="min-h-[40vh] flex ">
        <Center>
          <div className="w-full grid md:grid-cols-5 lg:grid-cols-5 grid-cols-1 gap-8 pb-20">
            {cardsContentPlace.map((card, i) => {
              return (
                <>
                  <CardPlace
                    key={card.id}
                    title={card.title}
                    image={card.imageSource}
                  />
                </>
              )
            })}
          </div>
        </Center>
      </div>
      <div className="min-h-[60vh] flex bg-black/10">
        <Center>
          <div className="flex gap-1 py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <h1 className="font-bold md:text-6xl text-4xl text-center leading-tight self-center">
                Quem somos?
              </h1>
              <div className="flex flex-col gap-4 text-justify">
                <p>
                  A <span className="font-semibold">Style - Moda Praia</span>, é o seu destino de moda praia que 
                  vai além das tendências e mergulha na arte de viver sob o sol radiante. Fundada com paixão e uma 
                  visão clara, nossa loja é muito mais do que um local para adquirir trajes de banho e acessórios; é 
                  um refúgio para aqueles que buscam expressar a sua individualidade à beira-mar.
                </p>
                <p>
                  Somos mais do que moda; somos uma experiência, um lugar onde o estilo se encontra com a alegria do 
                  verão. Nossa coleção é cuidadosamente selecionada para oferecer uma variedade de opções que refletem 
                  diferentes personalidades e gostos, de estampas vibrantes a tons sutis, de cortes modernos a clássicos 
                  atemporais. Acreditamos que a moda praia é uma forma de expressão, e nossa missão é ajudar você a encontrar 
                  as peças que falam por si mesmas.
                </p>
                <p>Além da moda, nos dedicamos a proporcionar momentos especiais à beira-mar. Nossa seleção de brinquedos de 
                  praia, coolers, cadeiras e acessórios oferece um toque de diversão e conveniência aos seus dias ensolarados. 
                  Acreditamos que a praia é um lugar para relaxar, se divertir e criar memórias duradouras, e nossos produtos 
                  são projetados para serem seus companheiros ideais nessa jornada.</p>
                <h2 className="font-semibold text-lg">
                  Onde Estamos Localizados?
                </h2>
                <div className="flex items-center gap-4">
                  <MapPinLine size={32} />
                  <a
                    className="underline"
                    target="_blank"
                    href="https://www.google.com.br/maps/place/Style+Moda+Praia/@-23.6379555,-45.4241059,17z/data=!3m1!4b1!4m6!3m5!1s0x94cd6361aea7c8d7:0x123607a3978b1177!8m2!3d-23.6379604!4d-45.421531!16s%2Fg%2F11hzlzgshp?entry=ttu"
                    rel="noreferrer"
                  >
                      Av. Geraldo Nogueira da Silva, 1330 - Loja 2 - Indaiá, Caraguatatuba - SP, 11665-000
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Center>
      </div>
    </main>
  )
}
