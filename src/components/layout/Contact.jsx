import React from 'react'
import Container from '../Container'
import Heading from '../Heading'
import Flex from '../Flex'
import Paragraph from '../Paragraph'
import Button from '../Button'
import { FiPhone } from "react-icons/fi"
import { SiGmail } from "react-icons/si"
import { IoLocationSharp } from "react-icons/io5"
import emailjs from '@emailjs/browser'
import { useRef } from 'react'

const Contact = () => {

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1vv4vfp', 'template_lgwt7k4', form.current, 'lX5CtzW61URd9HwzP')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    }
  return (
    <section id='Contact' className='py-[80px]'>
        <Container>
            <Heading text='Contact Me' className='text-6xl pb-14 text-center' as='h2'/>
            <Flex className='justify-between gap-x-16'>
                <div className='w-[50%]'>
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

                <div className='w-[50%]'>
                        <form ref={form} onSubmit={sendEmail}>
                        <div className='w-full'>
                            <Paragraph text='Name'/>
                            <input type="text" name='from_name' placeholder='Enter your name' className='bg-bgColor mt-2.5 w-[90%] h-[45px] outline-primaryColor rounded-lg px-3' />
                        </div>
    
                <div className='w-full pt-5'>
                    <Paragraph text='Email'/>
                    <input type="email" name='from-email'placeholder='Enter your email' className='bg-bgColor mt-2.5 w-[90%] h-[45px] outline-primaryColor rounded-lg px-3'/>
                </div>

            <div>
                <Paragraph text='Message' className='pt-8 pb-2.5 '/>
                <textarea name="message" id="" cols="60" rows="8" placeholder='Typeing your message' className='p-2.5 bg-bgColor outline-primaryColor rounded-lg'></textarea>
            </div>

            <Flex>
                <input type="checkbox" />
                <Paragraph text='I accept the terms' className='pl-2.5'/>
            </Flex>

            <div className='mt-5'>
                <Button text='Submit'/>
            </div>
            </form>
                </div>
                       
            </Flex>
        </Container>
    </section>
  )
}

export default Contact