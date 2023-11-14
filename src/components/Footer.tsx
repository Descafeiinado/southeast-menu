import logoImg from '../assets/logo.svg'

export function Footer() {
  return <footer className="flex mt-8 h-20 w-full items-center p-7 bg-[#0D1D25] justify-between">
    <img src={logoImg} alt="Maanaim" />

    <p>
      Feito com <span className="text-[#EE0000]">♥</span> por <b><a href="https://github.com/Descafeiinado" target="_blank" rel="noreferrer">Júlio</a></b> e <b><a href="https://github.com/okiwiziin" target="_blank" rel="noreferrer">Otávio</a></b>
    </p>

    <span>© 2023 - Todos os direitos reservados.</span>
  </footer>
}