"use client"
import { useState } from 'react'
import NavbarMobile from './navbar-mobile'
import HeaderNavigation from './header-navigation'

const MainNavbar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectSection, setSelectSection] = useState<string>('');

    return (
    <div className="bg-white">
        <NavbarMobile isOpen={isOpen} selectSection={selectSection} setSelectSection={setSelectSection} setIsOpen={setIsOpen} />
        <HeaderNavigation setIsOpen={setIsOpen} />
    </div>
    )
}


export default MainNavbar;