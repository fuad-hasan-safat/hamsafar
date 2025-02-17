import { Card, CardBody, CardHeader } from '@heroui/react'
import React from 'react'
import { FormProvider } from 'react-hook-form'
import { RiLockUnlockLine } from 'react-icons/ri'

export default function RegisterForm() {
    return (
        <Card className='w-3/5 mx-auto mt-[110px]'>
            <CardHeader className='flex flex-col justify-center items-center'>
                <div className='flex flex-col gap-2 items-center text-default'>
                    <div className='flex flex-row items-center gap-3'>
                        <RiLockUnlockLine size={30} />
                        <h2 className='text-3xl font-semibold'>Register</h2>
                    </div>
                    <p className="text-neutral-500">
                        Welcome to NextMatch
                    </p>
                </div>
            </CardHeader>
            <CardBody>
                <FormProvider >

                </FormProvider>
            </CardBody>
        </Card>
    )
}
