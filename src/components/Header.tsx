import Image from 'next/image'
import React from 'react'
import pirates from "../assets/images/pirates.svg"
import logo from "../assets/images/logo.svg"
import Button from './common/Button'
import Link from 'next/link'

const Header = () => {
  return (
    <header className='p-3 sm:p-5 lg:px-10 lg:p-10 '>
        <div className='flex items-center justify-between'>
        <Link href={"/"} className='w-[9rem]'><Image src={logo} alt='Pirates' /></Link>
        <div className='hidden md:block'>
        <Image src={pirates} alt='Pirates' />
        </div>
        <Button>Connect Wallet</Button>
        </div>
    </header>
  )
}

export default Header