import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Heading from '../Heading'
import Paragraph from '../Paragraph'
import ViewCertificate from '../ViewCertificate'

const Education = () => {
  return (
    <section id='Education' className='py-[80px] bg-bgColor'>
        <Container>
            <Flex className='gap-x-10'>
                <div className='w-1/2'>
                    <Heading className='pb-5' text='Education' as='h2'/>

                    <div className='p-5 bg-white rounded-lg'>
                        <Heading className='font-extrabold' text='Secondary School Certificate(SSC)' as='h2'/>
                        <Paragraph className='font-bold py-2.5' text='June, 2015'/>
                        <Paragraph className='font-bold pb-5' text='The result is the outcome of your approach to the tasks. My SSC Grade Point is GPA 4.33.'/>
                        <ViewCertificate to='#'/>
                    </div>
                    <div className='mt-5 p-5 bg-white rounded-lg'>
                        <Heading className='font-extrabold' text='Higher School Certificate(HSC)' as='h2'/>
                        <Paragraph className='font-bold py-2.5' text='September, 2017'/>
                        <Paragraph className='font-bold pb-5' text='The result is the outcome of your approach to the tasks. My SSC Grade Point is GPA 4.08.'/>
                        <ViewCertificate to='#'/>
                    </div>
                    <div className='mt-5 p-5 bg-white rounded-lg'>
                        <Heading className='font-extrabold' text="Bachelor's Degree" as='h2'/>
                        <Paragraph className='font-bold py-2.5' text='November, 2023'/>
                        <Paragraph className='font-bold pb-5' text='The result is the outcome of your approach to the tasks. My SSC Grade Point is GPA 3.20.'/>
                        <ViewCertificate to='#'/>
                    </div>
                </div>
                
                <div className='w-1/2'>
                    <Heading className='pb-5' text='Training' as='h2'/>

                    <div className='p-5 bg-white rounded-lg'>
                        <Heading className='font-extrabold' text='Office Application(6 Month)' as='h2'/>
                        <Paragraph className='font-bold py-2.5' text='December, 2017'/>
                        <Paragraph className='font-bold pb-5' text='My Result is GPA 5.'/>
                        <ViewCertificate to='#'/>
                    </div>
                    <div className='mt-5 p-5 bg-white rounded-lg'>
                        <Heading className='font-extrabold' text='Diploma In Web Application & Web Development(6 Month)' as='h2'/>
                        <Paragraph className='font-bold py-2.5' text='September, 2022'/>
                        <Paragraph className='font-bold pb-5' text='Conducted events and workshops on different technologies.'/>
                        <ViewCertificate to='#'/>
                    </div>
                    <div className='mt-5 p-5 bg-white rounded-lg'>
                        <Heading className='font-extrabold' text="Bachelor's Degree" as='h2'/>
                        <Paragraph className='font-bold py-2.5' text='November, 2023'/>
                        <Paragraph className='font-bold pb-5' text='The result is the outcome of your approach to the tasks. My SSC Grade Point is GPA 3.20.'/>
                        <ViewCertificate to='#'/>
                    </div>
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Education