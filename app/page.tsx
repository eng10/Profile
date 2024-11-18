'use client'

import { motion } from 'framer-motion'
import {
  ArrowRight,
  Award,
  BarChart,
  CheckCircle,
  ChevronRight,
  Globe,
  Laptop,
  Mail,
  MapPin,
  Palette,
  Phone,
  Shield,
  Smartphone,
  Users,
} from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Home from '@/components/page/Home'
import BrandImage from './Image/Brand Solution.jpg'
import DENT from './Image/DENT.jpg'
import DigitalMarketingImage from './Image/Digital Marketing.jpg'
import Canter from './Image/hh.jpg'
import Hos from './Image/Hos.jpg'
import Invan from './Image/Invan.jpg'
import Mamagment from './Image/Mamagment.jpg'
import MarketingStrategyImage from './Image/Marketing Strategy.jpg'
import MobileAppImage from './Image/Mobile App Development.jpg'
import BaShcoolk from './Image/Shcool.jpg'
import SoftwareImage from './Image/Software Development.jpg'
import placeholderImage from './Image/treee.jpg'
import WebDevImage from './Image/Web Development.jpg'
import Yes from './Image/Yes.jpg'
import About from '@/components/page/spline/About'
import Navbar from '@/components/page/Navbar'
import Service from '@/components/page/Service'

export default function page() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  const projectss = [
    {
      title: 'Dental Project',
      category: 'Healthcare',
      image: DENT,
    },
    {
      title: 'Hospital Management',
      category: 'Healthcare',
      image: Hos,
    },
    {
      title: 'Inventory Management',
      category: 'E-commerce',
      image: Invan,
    },
    {
      title: 'School Management',
      category: 'Education',
      image: BaShcoolk,
    },
    {
      title: 'Management System',
      category: 'Corporate',
      image: Mamagment,
    },
    {
      title: 'Restrounts System',
      category: 'System',
      image: Mamagment,
    },
  ]

  const services = [
    {
      icon: <Laptop className="w-12 h-12 text-blue-600" />,
      title: 'Software Development',
      description:
        'Custom software solutions that grow with your business, enhance productivity, and improve your bottom line.',
      image: SoftwareImage, // Add the corresponding image
    },
    {
      icon: <Smartphone className="w-12 h-12 text-blue-600" />,
      title: 'Mobile App Development',
      description:
        'Create apps that work on both iOS and Android, saving time and resources while maximizing reach.',
      image: MobileAppImage, // Add the corresponding image
    },
    {
      icon: <Globe className="w-12 h-12 text-blue-600" />,
      title: 'Web Development',
      description:
        'Our development team builds custom websites that are robust, scalable, and easy to navigate.',
      image: WebDevImage, // Add the corresponding image
    },
    {
      icon: <Palette className="w-12 h-12 text-blue-600" />,
      title: 'Brand Solution',
      description:
        'From logos to full branding, we create identities that resonate with audiences.',
      image: BrandImage, // Add the corresponding image
    },
    {
      icon: <BarChart className="w-12 h-12 text-blue-600" />,
      title: 'Digital Marketing',
      description:
        'Rank higher and reach your target audience with our data-driven SEO strategies.',
      image: DigitalMarketingImage, // Add the corresponding image
    },
    {
      icon: <Users className="w-12 h-12 text-blue-600" />,
      title: 'Marketing Strategy',
      description:
        'Craft and execute campaigns tailored to meet your specific business goals.',
      image: MarketingStrategyImage, // Add the corresponding image
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b bg-[#fff]">
      <Navbar/>
      <Home />
      <Service/>
      <About />
      <main className="container mx-auto px-4 py-8">
       

       

        <section id="services" className="mb-20">
          <h2 className="text-4xl font-bold mb-8 text-center text-blue-600">
            Our Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 group"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                  width={400}
                  height={300}
                />
                <div className="flex items-center space-x-4 mb-4">
                  {service.icon}
                  <h3 className="text-xl font-semibold text-blue-700">
                    {service.title}
                  </h3>
                </div>
                <p className="mb-4 text-blue-600">{service.description}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-blue-600 font-semibold group-hover:text-blue-700 transition-colors flex items-center"
                >
                  Learn More <ChevronRight className="w-4 h-4 ml-1" />
                </motion.button>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="process" className="mb-20 bg-blue-50 py-16 rounded-lg">
          <h2 className="text-4xl font-bold mb-8 text-center text-blue-600">
            Our Process
          </h2>
          <p className="text-center mb-12 max-w-2xl mx-auto text-blue-700">
            We follow a structured process to ensure that our services are
            delivered efficiently, on time, and within budget.
          </p>
          <div className="grid md:grid-cols-5 gap-8">
            {[
              {
                icon: <Users className="w-12 h-12 text-blue-600" />,
                title: 'Consultation',
                description:
                  'We start with a detailed consultation to understand your needs, objectives, and vision.',
              },
              {
                icon: <CheckCircle className="w-12 h-12 text-blue-600" />,
                title: 'Planning',
                description:
                  'Our team prepares a detailed project plan, outlining the scope, timeline, and milestones.',
              },
              {
                icon: <Palette className="w-12 h-12 text-blue-600" />,
                title: 'Design',
                description:
                  'We create innovative designs with close attention to usability and aesthetics.',
              },
              {
                icon: <Laptop className="w-12 h-12 text-blue-600" />,
                title: 'Development',
                description:
                  'Our team brings your ideas to life through expert development and coding.',
              },
              {
                icon: <Shield className="w-12 h-12 text-blue-600" />,
                title: 'Testing & Support',
                description:
                  'We rigorously test every solution and provide ongoing support after launch.',
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-white rounded-full p-6 inline-block mb-4 shadow-md">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-blue-700">
                  {step.title}
                </h3>
                <p className="text-sm text-blue-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="portfolio" className="mb-20">
          <h2 className="text-4xl font-bold mb-8 text-center text-blue-600">
            Our Portfolio
          </h2>
          <p className="text-center mb-12 max-w-2xl mx-auto text-blue-700">
            We take pride in the projects we've completed for clients across
            different industries. Here's a glimpse of our recent work:
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {projectss.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden group"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2 text-blue-700">
                    {project.title}
                  </h3>
                  <p className="text-sm text-blue-600 mb-4">
                    {project.category}
                  </p>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-blue-600 font-semibold group-hover:text-blue-700 transition-colors flex items-center"
                  >
                    View Project <ChevronRight className="w-4 h-4 ml-1" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-md hover:bg-blue-50 transition-colors"
            >
              View All Projects
            </motion.button>
          </div>
        </section>

        <section
          id="testimonials"
          className="mb-20 bg-blue-50 py-16 rounded-lg"
        >
          <h2 className="text-4xl font-bold mb-8 text-center text-blue-600">
            Client Testimonials
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: 'Ahmed Ali',
                role: 'Founder of Al Noor Group',
                quote:
                  'Super Technology Solution provided us with an outstanding website that has transformed our online presence. Their team was professional, responsive, and always ready to make adjustments as needed. ',
              },
              {
                name: 'Sarah Mohamed',
                role: 'Operations Manager of Hargeisa Foods',
                quote:
                  'The mobile app developed by Super Technology Solution has streamlined our operations and improved customer engagement. Their work exceeded our expectations.',
              },
              {
                name: 'Hassan Abdi',
                role: 'CEO of Tech Innovators',
                quote:
                  'Working with Super Technology Solution was a game-changer for our business. Their IT consulting services helped us make informed decisions and optimize our technology infrastructure.',
              },
              {
                name: 'Amina Jama',
                role: 'Marketing Director at Global Reach',
                quote:
                  'The digital marketing campaign designed by Super Technology Solution significantly increased our online visibility and lead generation. Their data-driven approach delivered tangible results.',
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <p className="italic mb-4 text-blue-600">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <Image
                    src={Yes}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <p className="font-semibold text-blue-700">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-blue-600">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="contact" className="mb-20">
          <h2 className="text-4xl font-bold mb-8 text-center text-blue-600">
            Contact Us
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="mb-6 text-lg text-blue-700">
                Ready to take your business to the next level? Get in touch with
                Super Technology Solution today! Whether you need a new website,
                mobile app, or a complete digital transformation, we're here to
                make it happen.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-blue-600 mr-2" />
                  <span className="text-blue-700"> Hargeisa, Somaliland</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-blue-600 mr-2" />
                  <span className="text-blue-700">+252 63 8313219</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-blue-600 mr-2" />
                  <span className="text-blue-700">
                    supertechs2025@gmail.com
                  </span>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4 text-blue-700">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  {['Facebook', 'Twitter', 'LinkedIn', 'Instagram'].map(
                    (social) => (
                      <a
                        key={social}
                        href="#"
                        className="text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        {social}
                      </a>
                    )
                  )}
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-2xl font-semibold mb-4 text-blue-700">
                Send Us a Message
              </h3>
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-1 font-medium text-blue-600"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-2 border border-blue-300 rounded focus:ring focus:ring-blue-200 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-1 font-medium text-blue-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-2 border border-blue-300 rounded focus:ring focus:ring-blue-200 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block mb-1 font-medium text-blue-600"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full p-2 border border-blue-300 rounded focus:ring focus:ring-blue-200 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block mb-1 font-medium text-blue-600"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full p-2 border border-blue-300 rounded focus:ring focus:ring-blue-200 focus:outline-none"
                    required
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="bg-blue-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Super Technology Solution
              </h3>
              <p className="mb-4">
                Innovative technology for modern businesses in Hargeisa and
                beyond.
              </p>
              <div className="flex space-x-4">
                {['Facebook', 'Twitter'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="text-blue-300 hover:text-white transition-colors"
                  >
                    <span className="sr-only">{social}</span>
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {[
                  'About Us',
                  'Services',
                  'Portfolio',
                  'Testimonials',
                  'Contact',
                ].map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(' ', '-')}`}
                      className="hover:text-blue-300 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                {[
                  'Software Development',
                  'Mobile App Development',
                  'Web Development',
                  'Brand Solution',
                  'Digital Marketing',
                ].map((service) => (
                  <li key={service}>
                    <a
                      href="#"
                      className="hover:text-blue-300 transition-colors"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
              <p className="mb-4">
                Stay updated with our latest news and offers.
              </p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-blue-700 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-500 transition-colors"
                >
                  Subscribe
                </motion.button>
              </form>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-blue-700 text-center">
            <p>&copy; 2024 Super Technology Solution. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
