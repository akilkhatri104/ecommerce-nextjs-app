import Logo from '@/components/Logo'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'
import React from 'react'
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"


function page() {
    return (
        <div className='container'>
            <main className='bg-primary text-secondary flex justify-center items-center border-2 border-accent rounded-2xl p-5 gap-3 flex-col mx-auto w-1/2'>
                <Logo />
                <h1>Signup for your new account!</h1>
                <form className='flex flex-col gap-4'>
                    <div className='flex flex-row'>
                        <div className='mr-2'>
                            <Label htmlFor='firstName' className='mb-1'>First Name</Label>
                            <Input id='firstName' placeholder='Enter your first name' required />
                        </div>
                        <div>
                            <Label htmlFor='lastName' className='mb-1'>Last Name</Label>
                            <Input id='lastName' placeholder='Enter your last name' />
                        </div>
                    </div>

                    <RadioGroup id='type' className='flex accent-accent-foreground' defaultValue='buyer'>
                        <Label htmlFor='type'>Account Type</Label>
                        <div className='flex space-x-2'>
                            <RadioGroupItem value='seller' id='seller' className='bg-white'/>
                            <Label htmlFor='seller'>Seller</Label>
                        </div>
                        <div className='flex space-x-2'>
                            <RadioGroupItem value='buyer' className='bg-white' id='buyer' />
                            <Label htmlFor='buyer'>Buyer</Label>
                        </div>
                    </RadioGroup>

                    <div>
                        <Label htmlFor='email' className='mb-1'>Email</Label>
                        <Input id='email' placeholder='Enter your email' type='email' required />
                    </div>

                    <div>
                        <Label htmlFor='username' className='mb-1'>Username</Label>
                        <Input id='username' placeholder='Enter your username' required />
                    </div>

                    <div>
                        <Label htmlFor='password' className='mb-1'>Password</Label>
                        <Input id='password' placeholder='Enter your password' required type='password' />
                    </div>
                    <Button type='submit' variant={'secondary'}>Signup</Button>
                </form>
                <h1>Already have an account? Login <Link href='/login' className='text-blue-300'>here</Link></h1>
            </main>
        </div>
    )
}

export default page