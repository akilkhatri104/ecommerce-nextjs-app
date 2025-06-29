
import React from 'react'
import Logo from './Logo'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { LogInIcon, SearchIcon, ShoppingCartIcon, UserRoundPlusIcon } from 'lucide-react'
import { DropdownMenu } from '@radix-ui/react-dropdown-menu'

const NavigationBar = () => {
  return (
    <div className='sticky top-0'>
      <nav className='flex justify-between  text-secondary bg-foreground pt-2'>
        <div>
          <Logo />
        </div>
        <div className='hidden md:flex md:w-1/2'>
          <form className='flex w-full'>
            <Input className='rounded-r-0 bg-background' placeholder='Search for a product' />
            <Button variant={'secondary'} type='submit'>
              <SearchIcon className='font-bold' />
              Search</Button>
          </form>
        </div>
        <div className=''>
          <DropdownMenu>

          </DropdownMenu>
          <Button className='mr-2' variant={'secondary'}>
            <UserRoundPlusIcon />
            Signup</Button>
          <Button className='mr-2' variant={'secondary'}>
            <LogInIcon />
            Login</Button>
          <Button className='mr-2' variant={'secondary'}>
            <ShoppingCartIcon />
            Cart</Button>
        </div>
      </nav>
      <div className='md:hidden flex px-2 py-1 bg-foreground text-secondary'>
        <form className='flex w-full'>
          <Input className='border-r-0 bg-background' placeholder='search for a product' />
          <Button type='submit'>
            <SearchIcon className='font-bold' />
          </Button>
        </form>
      </div>
    </div>
  )
}

export default NavigationBar