import React, {useState, useRef} from 'react'
import BurgerIcon from './BurgerIcon'
import useOnClickOutside from '../utilities/hooks/useOnClickOutside'
import BurgerMenu from './BurgerMenu'


function Burger() {
  const [open, setOpen] = useState<boolean>(false)

  const burgerRef = useRef<HTMLDivElement>(null)

  useOnClickOutside(burgerRef, () => setOpen(false))

  return (
    <div ref={burgerRef}>
      <BurgerIcon open={open} setOpen={setOpen} />
      <BurgerMenu open={open} />
    </div>
  )
}


export default Burger
