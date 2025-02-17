"use client"
import { Button, Card, CardBody, CardHeader, Input } from '@heroui/react'
import React from 'react'
import { GiPadlockOpen } from 'react-icons/gi'
import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { LoginSchema ,
    LoginSchemaType
} from '@/libs/schemas/LohinSchemas'

export default function LoginForm() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isValid },
    } = useForm<LoginSchemaType>({
        resolver: zodResolver(LoginSchema),
        mode: "onChange",
    })
    const onSubmit = (data: LoginSchemaType) => console.log(data)

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
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='space-y-4'>
                            <Input
                                defaultValue=''
                                label="Email"
                                variant='bordered'
                                type="email"
                                {...register("email")}
                                isInvalid={!!errors.email}
                                errorMessage={
                                    errors.email?.message as string
                                }
                            />
                            <Input
                                defaultValue=''
                                label="Password"
                                variant='bordered'
                                type="password"
                                {...register("password")}
                                isInvalid={!!errors.password}
                                errorMessage={
                                 errors.password?.message as string
                                }
                            />
                            <Button
                                fullWidth
                                color='primary'
                                type='submit'
                                disabled={!isValid}
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
