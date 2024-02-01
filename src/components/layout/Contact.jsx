import React from 'react'
import Container from '../Container'
import Heading from '../Heading'
import Flex from '../Flex'
import Paragraph from '../Paragraph'
import Button from '../Button'
import { FiPhone } from "react-icons/fi"
import { SiGmail } from "react-icons/si"
import { IoLocationSharp } from "react-icons/io5"

const Contact = () => {
  return (
    <section id='Contact' className='py-[80px]'>
        <Container>
            <Heading text='Contact Me' className='text-6xl pb-14 text-center' as='h2'/>
            <Flex className='justify-between gap-x-16'>
                <div className='w-[30%]'>
                    <div className='flex bg-bgColor p-5 rounded-lg items-center'>
                        <FiPhone className='text-[25px]'/>
                        <Paragraph className='font-bold pl-2.5' text='01724010025'/>
                    </div>
                    <div className='flex bg-bgColor p-5 rounded-lg items-center my-10'>
                        <SiGmail className='text-[25px]'/>
                        <Paragraph className='font-bold pl-2.5' text='shangida240@gmail.com'/>
                    </div>
                    <div className='flex bg-bgColor p-5 rounded-lg items-center'>
                        <IoLocationSharp className='text-[25px]'/>
                        <Paragraph className='font-bold pl-2.5' text='Bogura, Bangladesh'/>
                    </div>
                </div>

                <div className='w-[70%]'>
                    <Flex className='justify-between'>
                        <div className='w-1/2'>
                            <Paragraph text='First Name'/>
                            <input type="text" className='bg-bgColor mt-2.5 w-[90%] h-[45px] outline-primaryColor  rounded-lg' />
                        </div>
                        <div className='w-1/2'>
                            <Paragraph text='Last Name'/>
                            <input type="text" className='bg-bgColor mt-2.5 w-[90%] h-[45px] outline-primaryColor rounded-lg' />
                        </div>
                    </Flex>

                    <Flex className='justify-between pt-8'>
                <div className='w-1/2'>
                    <Paragraph text='Email'/>
                    <input type="email" className='bg-bgColor mt-2.5 w-[90%] h-[45px] outline-primaryColor rounded-lg'/>
                </div>
                <div className='w-1/2'>
                    <Paragraph text='Phone Number'/>
                    <input type="number" className='bg-bgColor mt-2.5 w-[90%] h-[45px] outline-primaryColor rounded-lg'/>
                </div>
            </Flex>

            <div>
                <Paragraph text='Message' className='pt-8 pb-2.5 '/>
                <textarea name="" id="" cols="60" rows="8" className='p-2.5 bg-bgColor outline-primaryColor rounded-lg'>Type your message...</textarea>
            </div>

            <Flex>
                <input type="checkbox" />
                <Paragraph text='I accept the terms' className='pl-2.5'/>
            </Flex>

            <div className='mt-5'>
                <Button text='Submit'/>
            </div>
                </div>
            </Flex>
            {/* <Flex className='justify-between'>
                <div className='w-1/2'>
                    <Paragraph text='First Name'/>
                    <input type="text" className='bg-bgColor mt-2.5 w-[90%] h-[45px] outline-none border-2 border-primaryColor rounded-lg' />
                </div>
                <div className='w-1/2'>
                    <Paragraph text='Last Name'/>
                    <input type="text" className='bg-bgColor mt-2.5 w-[90%] h-[45px] outline-none border-2 border-primaryColor rounded-lg' />
                </div>
            </Flex>
            <Flex className='justify-between pt-8'>
                <div className='w-1/2'>
                    <Paragraph text='Email'/>
                    <input type="email" className='bg-bgColor mt-2.5 w-[90%] h-[45px] outline-none border-2 border-primaryColor rounded-lg' />
                </div>
                <div className='w-1/2'>
                    <Paragraph text='Phone Number'/>
                    <input type="number" className='bg-bgColor mt-2.5 w-[90%] h-[45px] outline-none border-2 border-primaryColor rounded-lg' />
                </div>
            </Flex>
            <div>
            <Paragraph text='Message' className='pt-8 pb-2.5 '/>
            <textarea name="" id="" cols="150" rows="10" className='bg-bgColor outline-none border-2 border-primaryColor rounded-lg'>Type your message...</textarea>
            </div>
            <Flex>
                <input type="checkbox" />
                <Paragraph text='I accept the terms' className='pl-2.5'/>
            </Flex>
            <div className='text-center mt-5'>
                <Button text='Submit'/>
            </div> */}
        </Container>
    </section>
  )
}

export default Contact