import {
  FacebookLogo,
  InstagramLogo,
  MapPinLine,
  Phone,
  WhatsappLogo,
} from "phosphor-react";
import { Center } from "./Center";

export function Footer() {
  return (
    <>
      <div className="flex bg-zinc-800 py-20 text-zinc-400 px-4">
        <Center>
          <div className="w-full flex items-center justify-center min-h-[30vh]">
            <div className="w-full grid md:grid-cols-4 lg:grid-cols-4 grid-cols-1 items-stretch justify-between md:gap-4 gap-10">
              <div className="flex flex-col gap-4">
                <p className="text-left">
                  Deixe a Style - Moda Praia ser a sua escolha de moda praia, onde o estilo encontra a alegria do verão.
                </p>
                <span className="flex gap-4">
                  <FacebookLogo size={28} />
                  <InstagramLogo size={28} />
                </span>
              </div>

              <div className="flex flex-col gap-4">
                <h2 className="font-semibold text-white text-xl">
                  Informações
                </h2>
                <div className="flex flex-col gap-2 underline">
                  <a
                    href="https://www.google.com.br/maps/place/Style+Moda+Praia/@-23.6379555,-45.4241059,17z/data=!3m1!4b1!4m6!3m5!1s0x94cd6361aea7c8d7:0x123607a3978b1177!8m2!3d-23.6379604!4d-45.421531!16s%2Fg%2F11hzlzgshp?entry=ttu"
                    className="flex items-start gap-2"
                    target="_blank"
                  >
                    <MapPinLine size={22} />
                      Av. Geraldo Nogueira da Silva, 1330 - Loja 2 - Indaiá, Caraguatatuba - SP, 11665-000
                  </a>
                  <a href="https://api.whatsapp.com/send?phone=5512988819822" target="_blank" className="flex items-start gap-2">
                    <Phone size={22} />
                    Tel: +55 (12) 98881-9822
                  </a>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <h2 className="font-semibold text-white text-xl">Serviços</h2>
                <div className="flex flex-col gap-2 underline">
                  <a href="#services">Biquinis e Saidas de Praia</a>
                  <a href="#services">Bermudas e sungas</a>
                  <a href="#services">Brinquedos</a>
                  <a href="#services">Cooler e Cadeiras</a>
                  <a href="#services">Protetor Solar</a>
                  <a href="#services">Óculos, Bonés e chápeus</a>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <h2 className="font-semibold text-white text-xl">
                  Redes sociais
                </h2>
                <div className="flex flex-col gap-2 underline">
                  
                  <a
                    className="flex gap-2 items-center"
                    href="https://www.instagram.com/style_moda_praia/?hl=pt"
                    target="_blank"
                  >
                    <span>
                    <InstagramLogo size={20} />
                    </span>
                    @Instagram
                  </a>
                  <a
                    className="flex gap-2 items-center"
                    href="https://api.whatsapp.com/send?phone=5512988819822"
                    target="_blank"
                  >
                    <span>
                      <WhatsappLogo size={20} />
                    </span>
                    @WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Center>
      </div>
      <footer className="flex justify-start bg-zinc-900 px-4">
        <Center>
          <div className="h-[8vh] w-full flex items-center text-zinc-400 text-sm md:text-base">
            Style - Moda Praia &copy; 2023
          </div>
        </Center>
      </footer>
    </>
  );
}
