import React from 'react'
import Container from '../Container'
import Heading from '../Heading'
import Flex from '../Flex'
import Image from '../Image'
import pro1 from '../../assets/prj-nike.png'
import pro2 from '../../assets/prj2.png'
import Paragraph from '../Paragraph'
import {  FaGithub } from "react-icons/fa"
import { FaArrowUpRightFromSquare } from "react-icons/fa6"
import ListItem from '../ListItem'

const Project = () => {
  return (
    <section id='Project' className='py-[80px] bg-bgColor'>
        <Container>
            <div className='text-center'>
                <Paragraph className='text-sm' text='Some of my recent work'/>
                <Heading text='Project' className='text-7xl pb-12' as='h2'/>
            </div>

            <Flex className='gap-x-10'>
                <div className='w-[30%] bg-white pb-5 rounded-lg'>
                    <Image className='h-[150px]' src={pro1}/>
                    <div className='p-[20px]'>
                        <Heading text='Nike React' as='h2' className='text-3xl'/>
                        <Paragraph text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci tempora neque amet aliquid delectus saepe fugiat cupiditate id atque dignissimos! Mollitia eveniet fugiat ut illo vitae.' className='text-justify'/>
                    </div>
                    <div className='py-5'>
                        <ul>
                            <Flex className='justify-center'>
                                <a href="https://github.com/shanjidaKhatunCodeing/nike-react-website-bootstrap.git" target='_blank'>
                                    <ListItem className='text-2xl font-bold' text='Code' icon={< FaGithub />}/>
                                </a>
                                <a target='_blank' href="https://shanjidakhatuncodeing.github.io/nike-react-website-bootstrap/">
                                    <ListItem className='text-2xl font-bold' text='Live Demo' icon={< FaArrowUpRightFromSquare />}/>
                                </a>
                            </Flex>
                        </ul>
                    </div>
                </div>
                <div className='w-[30%] bg-white pb-5 rounded-lg'>
                    <Image className='h-[150px]' src={pro2}/>
                    <div className='p-[20px]'>
                        <Heading text='Panda e_Commerce' as='h2' className='text-3xl'/>
                        <Paragraph text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci tempora neque amet aliquid delectus saepe fugiat cupiditate id atque dignissimos! Mollitia eveniet fugiat ut illo vitae.' className='text-justify'/>
                    </div>
                    
                    <div className='py-5'>
                        <ul>
                            <Flex className='justify-center'>
                                <a href="https://github.com/shanjidaKhatunCodeing/panda-commerce-boostrap.git" target='_blank'>
                                    <ListItem className='text-2xl font-bold' text='Code' icon={< FaGithub />}/>
                                </a>
                                <a target='_blank' href="https://shanjidakhatuncodeing.github.io/panda-commerce-boostrap/">
                                    <ListItem className='text-2xl font-bold' text='Live Demo' icon={< FaArrowUpRightFromSquare />}/>
                                </a>
                            </Flex>
                        </ul>
                    </div>
                </div>
                <div className='w-[30%] bg-white pb-5 rounded-lg'>
                    <Image className='h-[150px]' src={pro1}/>
                    <div className='p-[20px]'>
                        <Heading text='Nike React' as='h2' className='text-3xl'/>
                        <Paragraph text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci tempora neque amet aliquid delectus saepe fugiat cupiditate id atque dignissimos! Mollitia eveniet fugiat ut illo vitae.' className='text-justify'/>
                    </div>
                    <div className='py-5'>
                        <ul>
                            <Flex className='justify-center'>
                                <a href="https://github.com/shanjidaKhatunCodeing/nike-react-website-bootstrap.git" target='_blank'>
                                    <ListItem className='text-2xl font-bold' text='Code' icon={< FaGithub />}/>
                                </a>
                                <a target='_blank' href="https://shanjidakhatuncodeing.github.io/nike-react-website-bootstrap/">
                                    <ListItem className='text-2xl font-bold' text='Live Demo' icon={< FaArrowUpRightFromSquare />}/>
                                </a>
                            </Flex>
                        </ul>
                    </div>
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Project
