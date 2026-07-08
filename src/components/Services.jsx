import 'react'
import assets from '../assets/assets'
import Title from './Title'
import ServiceCard from './ServiceCard'
import { motion } from "motion/react"


const Services = () => {

    const servicesData = [
        {
            title: 'Website Development',
            description: 'Fast, responsive, and SEO-friendly websites designed to engage visitors and drive business growth.',
            icon: assets.ads_icon
        },
        {
            title: 'Business Automation',
            description: 'Automate repetitive tasks, streamline workflows, and improve efficiency with intelligent automation solutions.',
            icon: assets.ads_icon
        },
        {
            title: 'SEO',
            description: 'Boost your online visibility with proven SEO strategies that improve rankings and drive organic traffic.',
            icon: assets.ads_icon
        },
        {
            title: 'Digital Marketing',
            description: 'Reach the right audience with data-driven marketing strategies that generate quality leads and maximize ROI.',
            icon: assets.ads_icon
        },
        {
            title: 'Google Ads',
            description: 'Reach potential customers instantly with high-performing Google Ads campaigns that drive targeted traffic, increase conversions, and maximize your return on investment.',
            icon: assets.ads_icon
        },
        {
            title: 'Business Branding',
            description: 'Create a unique and professional brand identity through logo design, visual branding, and strategic positioning that builds recognition and customer trust.',
            icon: assets.ads_icon
        },
    ]

    return (
        <motion.div 
        initial = "hidden"
        whileInView= "visible"
        viewport={{once : true}}
        transition={{staggerChildren : 0.2}}
        


        
        id='services' className=' mt-16 relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 text-gray-700 dark:text-white'>
            <img src={assets.bgImage2} alt="" className='absolute -top-110 -left-70  z-[-1] dark:hidden' />

            <Title title="How can we Help?" description="Discover the range of services we offer to help your business grow and succeed in the digital landscape." />

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 w-full'>
                {servicesData.map((service, index) => (
                    <ServiceCard key={index} service={service} index={index} />
                ))}
            </div>
        </motion.div>
    )
}

export default Services
