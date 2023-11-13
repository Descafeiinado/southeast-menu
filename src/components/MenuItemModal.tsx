import * as Dialog from "@radix-ui/react-dialog"

import { X } from "@phosphor-icons/react"

interface MenuItemModalProps {
  setIsOpen: (isOpen: boolean) => void

  name: string
  price: number
  imageSource: string
  description: string
}

export function MenuItemModal({ setIsOpen, name, price, imageSource, description }: MenuItemModalProps) {
  return <Dialog.Portal>
    <Dialog.Overlay className="bg-black/60 inset-0 fixed" />

    <Dialog.Content className="flex flex-col gap-3 fixed bg-[#0D1D25] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[280px] shadow-lg outline-none shadow-black/25">
      <div className="flex justify-between items-center">
        <Dialog.Title className="text-2xl font-semibold">
          {name}
        </Dialog.Title>

        <button type="button" title="Fechar" onClick={() => setIsOpen(false)}>
          <X size={24} />
        </button>
      </div>

      <span className="text-[#82F3FF]">R$ {price}</span>

      <img src={imageSource} className="rounded" alt="" />

      <p className="text-sm">{description}</p>
    </Dialog.Content>
  </Dialog.Portal>
}