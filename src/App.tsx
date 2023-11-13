import './styles/global.css'

import { ForkKnife } from '@phosphor-icons/react'
import { Header } from './components/Header'
import { MenuItem } from './components/MenuItem'

import items from '../items.json'
import { Footer } from './components/Footer'

export function App() {
  return <div className="h-screen">
    <Header />

    <main className="mx-9 mt-16">
      <div className="bg-[#001119] gap-3 px-3 py-6 flex flex-col items-center rounded-xl border border-[#192227]">
        <h2 className="text-xl font-bold">Cardápio do Sudeste</h2>

        <span className="text-[#FBA94C] font-petemoss text-4xl">Feira das Regiões</span>

        <p className="text-sm text-center">Explore o sabor autêntico do sudeste brasileiro em cada mordida, uma viagem gastronômica única que combina tradição e inovação!</p>
      </div>

      <section className="mt-6">
        <div className="flex justify-center items-center p-5 gap-2 rounded bg-gradient-to-b from-[#091E26] to-[#00131C]">
          <ForkKnife size={24} />

          <span className="font-semibold">São Paulo e Rio de Janeiro</span>
        </div>

        <div className="mt-6">
          {items.filter(item => item.origin === 'rjsp').map(item => {
            return <MenuItem description={item.description} name={item.name} price={item.price} imageSource={item.image} />
          })}
        </div>
      </section>

      <section className="mt-6">
        <div className="flex justify-center items-center p-5 gap-2 rounded bg-gradient-to-b from-[#091E26] to-[#00131C]">
          <ForkKnife size={24} />

          <span className="font-semibold">Minas Gerais</span>
        </div>

        <div className="mt-6">
          {items.filter(item => item.origin === 'mg').map(item => {
            return <MenuItem description={item.description} name={item.name} price={item.price} imageSource={item.image} />
          })}
        </div>
      </section>

      <section className="mt-6">
        <div className="flex justify-center items-center p-5 gap-2 rounded bg-gradient-to-b from-[#091E26] to-[#00131C]">
          <ForkKnife size={24} />

          <span className="font-semibold">Espírito Santo</span>
        </div>

        <div className="mt-6">
          {items.filter(item => item.origin === 'es').map(item => {
            return <MenuItem description={item.description} name={item.name} price={item.price} imageSource={item.image} />
          })}
        </div>
      </section>
    </main>
    <Footer />
  </div>
}