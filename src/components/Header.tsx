import logoImg from '../assets/logo.svg'

export function Header() {
  return <header className="flex gap-3 justify-center items-center h-28 bg-[#0D1D25]">
    <img src={logoImg} alt="Maanaim" />

    <h1 className="text-xl text-white w-[97px] font-bold">Sudeste no Maanaim</h1>
  </header>
}