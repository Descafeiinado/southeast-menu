import logoImg from '../assets/logo.svg'

export function Footer() {
  return <footer className="flex mt-8 h-20 w-full items-center p-7 bg-[#0D1D25] justify-between">
    <img src={logoImg} alt="Maanaim" />

    <span>© 2023 - Todos os direitos reservados.</span>
  </footer>
}