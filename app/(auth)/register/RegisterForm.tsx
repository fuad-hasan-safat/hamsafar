import { RegisterSchema, RegisterSchemaType } from '@/libs/schemas/RegisterSchema';
import { Card, CardBody, CardHeader } from '@heroui/react'
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { RiLockUnlockLine } from 'react-icons/ri'


const stepSchemas = [
    RegisterSchema,
];

export default function RegisterForm() {
    const [activeStep, setActiveStep] = useState(0);

    const currentValidationSchema =
        stepSchemas[activeStep];


    const registerFormMethods =
        useForm<RegisterSchemaType>({
            resolver: zodResolver(
                currentValidationSchema
            ),
            mode: "onTouched",
        });


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
                <FormProvider {...registerFormMethods}>

                </FormProvider>
            </CardBody>
        </Card>
    )
}
