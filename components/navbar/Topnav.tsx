"use client"
import { Button, Navbar, NavbarBrand, NavbarContent } from '@heroui/react'
import Link from 'next/link'
import React from 'react'
import { GiLoveLetter, GiSelfLove } from 'react-icons/gi'
import NavLink from './NavLink'

export default function Topnav() {
    return (
        <Navbar
            maxWidth='full'
            className='bg-blue-800'
            classNames={{
                item: [
                    'text-white',
                    'text-lg',
                    'uppercase',
                    'data-[active=true]: text-white',
                ]
            }}
        >
            <NavbarBrand as={Link} href="/">
                <GiLoveLetter
                    size={40}
                    className="text-red-400"
                />
                <div className='font-bold text-3xl flex'>
                    <span className='text-white'>Hamsafar</span>
                </div>
            </NavbarBrand>

            <NavbarContent
                justify='center'
            
            >
                <NavLink href='/members' label='Matches' />
                <NavLink href='/lists' label='Lists' />
                <NavLink href='/messages' label='Messages' />
            </NavbarContent>

            <NavbarContent
            justify='end'
            className='text-white'
            >
                <Button
                as={Link}
                href='/login'
                variant='bordered'
                >
                    Login
                </Button>

                <Button
                 as={Link}
                 href='/register'
                 variant='bordered'
                >
                    Register
                </Button>
            </NavbarContent>
        </Navbar>
    )
}
