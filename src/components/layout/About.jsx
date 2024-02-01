import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Heading from '../Heading'
import Paragraph from '../Paragraph'
import Image from '../Image'
import about from '../../assets/about.png'

const About = () => {
  return (
    <section id='About' className='py-[120px]'>
        <Container>
            <Flex>
                <div className='w-[40%] pt-28'>
                    <Image className='w-[550px]' src={about}/>
                </div>
                <div className='w-[60%] text-justify'>
                    <Heading className='text-6xl pb-8' text='About Me' as='h2'/>
                    <Paragraph text='Thanks for your interest, here is a quick story of me and this website.'/>
                    
                    <Paragraph className='pt-7 pb-5' text='I am Shangida Khatun. Front-end Developer. I Started my front-end development journey in 2020. I complete my #Front-end Development with React# professional course from #Creative IT Institute Dhanmondi, Dhaka 1205.# After completing my course with a great practice and remark I start my freelancing careeer.This website is basically one of my Frontend Development project which is built using HTML, Css, Javascript And React. '/>
                    <Paragraph text='Thanks again for reading this, because of people like you, it exists and prospers!'/>
                </div>
            </Flex>
        </Container> 
    </section>
  )
}

export default About