import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Card from '../Card'
import ui from '../../assets/ul.png'
import resWeb from '../../assets/resWeb.jpg'
import frontDev from '../../assets/frontDev.jpg'
import figma from '../../assets/figma.png'
import psd from '../../assets/psd.png'
import mentor from '../../assets/mentor.png'
import Heading from '../Heading'

const Service = () => {
  return (
    <section id='Service' className='py-[80px]'>
        <Container>
            <Heading text='I provide service' className='text-6xl pb-12' as='h2'/>
            <Flex className='justify-between'>
                <div className='w-[30%] bg-bgColor py-8 rounded-md text-center'>
                    <Card src={ui} iclassName='w-1/4 inline' text='UI Design' ptext='I value simple content structure, clean design patterns, and thoughtful interactions.'/>
                </div>
                
                <div className='w-[30%] bg-bgColor py-8 rounded-md text-center'>
                    <Card src={resWeb} iclassName='w-1/4 inline' text='Responsive Web Designer' ptext='I really like this. Becuase Users can access your site from any device.'/>
                </div>
                
                <div className='w-[30%] bg-bgColor py-8 rounded-md text-center'>
                    <Card src={frontDev} iclassName='w-1/4 inline' text='Front-end Developer' ptext='I love to code with React and enjoy bringing ideas to life in the browser.' pclassName='px-10'/>
                </div>
                
            </Flex>
            <Flex className='justify-between pt-8'>
                <div className='w-[30%] bg-bgColor py-8 rounded-md text-center'>
                    <Card src={figma} iclassName='w-1/4 inline' text='Figma to HTML' ptext='I often convert figma files to code. Figma, a popular design tool with seamless conversion from to HTML.'/>
                </div>
                
                <div className='w-[30%] bg-bgColor py-8 rounded-md text-center'>
                    <Card src={psd} iclassName='w-1/4 inline' text='PSD to HTML' ptext='I really like this. Becuase Users can access your site from any device.'/>
                </div>
                
                <div className='w-[30%] bg-bgColor py-8 rounded-md text-center'>
                    <Card src={mentor} iclassName='w-1/4 inline' text='Mentor' ptext='I genuinely care about my student, and love helping fellow designers work on their craft.' pclassName='px-10'/>
                </div>
                
            </Flex>
        </Container>
    </section>
  )
}

export default Service