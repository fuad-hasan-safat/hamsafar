import { Button, Card, CardBody, CardHeader, Input } from '@heroui/react'
import React from 'react'
import { GiPadlockOpen } from 'react-icons/gi'

export default function LoginForm() {
    return (
        <div>
            <Card className='w-2/5 mx-auto my-auto mt-[25px] shadow-md shadow-sky-400 bg-white '>
                <CardHeader className='flex flex-col justify-center items-center'>
                    <div className='flex flex-col gap-2 items-center text-default'>
                        <div className='flex flex-row items-center gap-3'>
                            <GiPadlockOpen size={40} color='blue' />
                            <h2 className='text-3xl font-semibold text-blue-600'>Log In</h2>
                        </div>
                        <p className='text-yellow-500'>Welecome  back to HAM SAFAR</p>
                    </div>
                </CardHeader>
                <CardBody>
                    <form>
                        <div className='space-y-4'>
                            <Input
                                defaultValue=''
                                label="Email"
                                variant='bordered'
                                type="email"
                            />
                            <Input
                                defaultValue=''
                                label="Password"
                                variant='bordered'
                                type="password"
                            />
                            <Button
                                fullWidth
                                color='primary'
                                type='submit'
                            >
                                Log In
                            </Button>
                        </div>
                    </form>
                </CardBody>
            </Card>
        </div>
    )
}
