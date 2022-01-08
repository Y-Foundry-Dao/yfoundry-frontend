import React, {useState, useRef} from 'react'
import BurgerIcon from './BurgerIcon'
import useOnClickOutside from '../utilities/hooks/useOnClickOutside'

function BurgerMenu() {
  const [open, setOpen] = useState<boolean>(false)

  const burgerRef = useRef<HTMLDivElement>(null)

  useOnClickOutside(burgerRef, () => setOpen(false))

  return (
    <div ref={burgerRef}>
      <BurgerIcon open={open} setOpen={setOpen} />
    </div>
  )
}

export default BurgerMenu
