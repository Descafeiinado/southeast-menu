import { ArrowRight } from "@phosphor-icons/react"
import * as Dialog from "@radix-ui/react-dialog"
import { useState } from "react"
import { MenuItemModal } from "./MenuItemModal"

interface MenuItemProps {
  name: string
  price: number
  imageSource: string
  description: string
}

export function MenuItem(props: MenuItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className="flex justify-between items-center p-7 bg-[#00070A] h-44 border border-[#0D161B] rounded-xl">
        <div className="flex justify-center gap-2 flex-col" onClick={() => setIsOpen(true)}>
          <strong className="font-semibold">{props.name}</strong>

          <span className="text-[#82F3FF]">R$ {props.price}</span>
        </div>

        <div className="relative" onClick={() => setIsOpen(true)}>
          <img className="rounded" src={props.imageSource} alt="" width={170} height={120} />

          <button type="button" title="Informações" onClick={() => setIsOpen(true)}>
            <ArrowRight size={24} className="text-white absolute bottom-1/2 right-3" />
          </button>
        </div>

        <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
          <MenuItemModal setIsOpen={setIsOpen} {...props} />
        </Dialog.Root>
      </div>
    </>)
}