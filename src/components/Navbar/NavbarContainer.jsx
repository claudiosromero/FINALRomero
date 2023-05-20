import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Navbar } from './Navbar'


export const NavbarContainer = () => {
    const { cart } = useContext(CartContext)


    return (
        <div>
            <Navbar cart={cart} />
        </div>
    )
};