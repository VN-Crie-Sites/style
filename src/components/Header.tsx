import { Center } from "./Center";
import Wallpaper from "../../public/img/wallpaper.jpeg";

export function Header() {
  return (
    <header className="h-[80vh] bg-zinc-800 flex items-center justify-center relative">
      <div className="absolute top-0 h-[80vh] left-0 right-0 flex items-center justify-center">
        <img src={Wallpaper} alt="" className="w-full h-full" />
      </div>
      <div className=" absolute top-0 h-[80vh] left-0 right-0 flex items-center justify-center bg-black/60 z-10">
        <Center>
          <div className="w-full h-[80vh] flex items-center justify-center md:justify-start text-white">
            <div className="w-[80%] md:w-[60%] text-center md:text-left font-semibold flex flex-col gap-4bg-[#b82a7c]">
              <p className="text-2xl lg:text-3xl">
                Bem-vindo à Style - Moda Praia <br/>
                Sua Janela para o Verão!
              </p>

              <h2 className="w-[500px]">Explore um universo de estilo, conforto e elegância à beira-mar com a Style. Nossa loja de moda praia é o seu destino definitivo para descobrir as últimas tendências em trajes de banho, acessórios e roupas descontraídas para tornar os seus dias sob o sol ainda mais memoráveis. Aqui, não vendemos apenas moda praia - vendemos a promessa de dias cheios de sol, areia e mar.</h2>
            </div>
          </div>
        </Center>
      </div>
      <div className="bg-zinc-800/80 fixed left-0 right-0 top-0 py-4 flex justify-start items-center text-white z-20">
        <Center>
          <div className="w-full px-4 flex justify-between items-center">
            <div className="font-bold text-xl">Style - Moda Praia</div>
            <a href="https://api.whatsapp.com/send?phone=5512988819822" target="_blank"
                  rel="noopener noreferrer">
              <div className="bg-[#ff7f4f] hover:bg-[#ff6a4b] transition-all rounded p-2">
                Fale conosco
              </div>
            </a>
          </div>
        </Center>
      </div>
    </header>
  );
}
