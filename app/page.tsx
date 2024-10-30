import { Laptop, Smartphone, Palette, BarChart, Users, CheckCircle, Phone, Mail, MapPin, Globe, Clock, Shield, Award, ThumbsUp, ChevronRight, Import } from "lucide-react"
import Image from "next/image"
import blu from "./Image/white.png"
import yes from "./Image/Yes.jpg"
import One from "./Image/One.jpg"
import Bank from "./Image/Bank.jpg"
import DENT from "./Image/DENT.jpg"
import Hos from "./Image/Hos.jpg"
import Invan from "./Image/Invan.jpg"
import BaShcoolk from "./Image/Shcool.jpg"
import Mamagment from "./Image/Mamagment.jpg"
import Blog1 from "./Image/One.jpg"
import Blog2 from "./Image/One.jpg"
import Blog3 from "./Image/One.jpg"

export default function page() {
  const projects = [
    { title: "E-commerce Platform", category: "Web Development", image: Bank },
    { title: "Inventory Management System", category: "Software Development", image: Invan },
    { title: "Fitness Tracking App", category: "Mobile App Development", image: DENT },
    { title: "Brand Redesign", category: "Brand Solution", image: BaShcoolk },
    { title: "Cloud Migration", category: "IT Consulting", image: Mamagment },
    { title: "Healthcare Management", category: "Healthcare Solutions", image: Hos },
  ];

  
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white">
      <header className="bg-blue-600  text-white py-1 sticky top-0 z-50">
        <div className="container mx-auto px-4   flex justify-between items-center">
          <Image  src={blu} alt="Super Technology Solution Logo"  className="   " width={150} height={40} />
          <nav className="hidden md:flex space-x-6">
            <a href="#about" className="hover:text-blue-200 transition-colors">About</a>
            <a href="#services" className="hover:text-blue-200 transition-colors">Services</a>
            <a href="#process" className="hover:text-blue-200 transition-colors">Process</a>
            <a href="#portfolio" className="hover:text-blue-200 transition-colors">Portfolio</a>
            <a href="#testimonials" className="hover:text-blue-200 transition-colors">Testimonials</a>
            <a href="#clients" className="hover:text-blue-200 transition-colors">clients</a>
            <a href="#blog" className="hover:text-blue-200 transition-colors">blog</a>
            <a href="#contact" className="hover:text-blue-200 transition-colors">Contact</a>
          </nav>
          <button className="bg-transparent border border-white text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">Get Started</button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="text-center mb-20">
          <h1 className="text-5xl font-bold mb-6 text-blue-600">Innovative Technology for Modern Businesses</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Empowering businesses in Hargeisa with cutting-edge digital solutions. Transform, streamline, and connect through technology.</p>
          <div className="flex justify-center space-x-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors">Explore Our Services</button>
            <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-md hover:bg-blue-50 transition-colors">Contact Us</button>
          </div>
        </section>
        <section className="relative bg-blue-600 text-white overflow-hidden">
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Get Our Business This It Solution</h2>
            <p className="mb-8">Super Technology Solution is a Hargeisa-based tech company with a passion for crafting digital solutions that drive growth and efficiency. With a talented team of developers, designers, and strategists, we partner with businesses to enhance their digital capabilities and help them stay ahead in a competitive market.</p>
            <div className="flex space-x-4">
              <button className="bg-white text-blue-600 px-6 py-3 rounded-full hover:bg-blue-100 transition-colors">
                Explore More
              </button>
              <button className="border border-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors">
                Contact Us
              </button>
            </div>
          </div>
          <div className="relative">
            <Image
               src={One}
              alt="Woman working on laptop"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" fill="white"/>
        </svg>
      </div>
    </section>

        <section id="services" className="mb-20">
          <h2 className="text-4xl font-bold mb-8 text-center">Our Services</h2>
          <p className="text-center mb-12 max-w-2xl mx-auto">We offer a diverse range of services designed to meet the unique needs of businesses across various sectors. From idea to execution, we work closely with our clients to bring their vision to life.</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Laptop className="w-12 h-12 text-blue-600" />, title: "Software Development", description: "Customized software solutions to enhance productivity and improve operational workflows." },
              { icon: <Smartphone className="w-12 h-12 text-blue-600" />, title: "Mobile App Development", description: "Intuitive, user-friendly mobile applications for both Android and iOS platforms." },
              { icon: <Globe className="w-12 h-12 text-blue-600" />, title: "Web Development", description: "Responsive, modern, and visually appealing websites that provide an excellent user experience." },
              { icon: <Palette className="w-12 h-12 text-blue-600" />, title: "Brand Solution", description: "Logo design, brand identity creation, and brand strategy to help your business stand out." },
              { icon: <BarChart className="w-12 h-12 text-blue-600" />, title: "Digital Marketing", description: "End-to-end digital marketing solutions to increase your online visibility and engagement." },
              { icon: <Users className="w-12 h-12 text-blue-600" />, title: "IT Consulting", description: "Expert advice and guidance to help you make informed decisions about your technology investments." },
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 group">
                <div className="flex items-center space-x-4 mb-4">
                  {service.icon}
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>
                <p className="mb-4">{service.description}</p>
                <button className="text-blue-600 font-semibold group-hover:text-blue-700 transition-colors flex items-center">
                  Learn More <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            ))}
          </div>
        </section>

        <section id="process" className="mb-20 bg-blue-50 py-16 rounded-lg">
          <h2 className="text-4xl font-bold mb-8 text-center">Our Process</h2>
          <p className="text-center mb-12 max-w-2xl mx-auto">We follow a structured process to ensure that our services are delivered efficiently, on time, and within budget.</p>
          <div className="grid md:grid-cols-5 gap-8">
            {[
              { icon: <Users className="w-12 h-12 text-blue-600" />, title: "Consultation", description: "We start with a detailed consultation to understand your needs, objectives, and vision." },
              { icon: <CheckCircle className="w-12 h-12 text-blue-600" />, title: "Planning", description: "Our team prepares a detailed project plan, outlining the scope, timeline, and milestones." },
              { icon: <Palette className="w-12 h-12 text-blue-600" />, title: "Design", description: "We create innovative designs with close attention to usability and aesthetics." },
              { icon: <Laptop className="w-12 h-12 text-blue-600" />, title: "Development", description: "Our team brings your ideas to life through expert development and coding." },
              { icon: <Shield className="w-12 h-12 text-blue-600" />, title: "Testing & Support", description: "We rigorously test every solution and provide ongoing support after launch." },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-full p-6 inline-block mb-4 shadow-md">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="why-choose-us" className="mb-20">
          <h2 className="text-4xl font-bold mb-8 text-center">Why Choose Us</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: <Award className="w-8 h-8 text-blue-600" />, title: "Experienced Team", description: "Our team comprises skilled professionals with a wealth of experience in technology and digital marketing." },
              { icon: <Users className="w-8 h-8 text-blue-600" />, title: "Customer-Centric Approach", description: "We believe in understanding your business needs deeply to provide solutions that truly make an impact." },
              { icon: <ThumbsUp className="w-8 h-8 text-blue-600" />, title: "Quality Assurance", description: "We maintain high standards of quality in all our projects, ensuring robust and reliable solutions." },
              { icon: <Clock className="w-8 h-8 text-blue-600" />, title: "Timely Delivery", description: "We understand the importance of deadlines and strive to deliver projects on time, every time." },
            ].map((reason, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 rounded-full p-3">
                    {reason.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                    <p>{reason.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
  {/* Clients Section */}
  <section id="clients" className="mb-20">
          <h2 className="text-4xl font-bold mb-8 text-center">Our Clients</h2>
          <p className="text-center mb-12 max-w-2xl mx-auto">
            Trusted by businesses and organizations across industries to deliver top-quality solutions.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {[
              { image: Bank, alt: "Bank Logo" },
              { image: Bank, alt: "Dent Logo" },
              { image: Invan, alt: "Inventory Logo" },
              { image: BaShcoolk, alt: "School Logo" },
              { image: Mamagment, alt: "Management Logo" },
            ].map((client, index) => (
              <Image
                key={index}
                src={client.image}
                alt={client.alt}
                width={150}
                height={60}
                className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            ))}
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="mb-20">
          <h2 className="text-4xl font-bold mb-8 text-center">From Our Blog</h2>
          <p className="text-center mb-12 max-w-2xl mx-auto">
            Stay updated with our latest news, insights, and expert tips on technology and innovation.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "The Future of AI in Business", excerpt: "Explore how AI is transforming industries and how your business can benefit from AI-driven insights.", image: Blog1 },
              { title: "5 Tips for Mobile App Development", excerpt: "Maximize user experience and engagement with these essential tips for developing a successful mobile app.", image: Blog2 },
              { title: "Web Design Trends 2024", excerpt: "Learn about the latest trends in web design and how they can help you stand out in a competitive market.", image: Blog3 },
            ].map((post, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden group">
                <Image 
                  src={post.image} 
                  alt={post.title} 
                  width={400} 
                  height={250} 
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{post.excerpt}</p>
                  <button className="text-blue-600 font-semibold group-hover:text-blue-700 transition-colors flex items-center">
                    Read More <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section id="portfolio" className="mb-20">
      <h2 className="text-4xl font-bold mb-8 text-center">Our Portfolio</h2>
      <p className="text-center mb-12 max-w-2xl mx-auto">
        We take pride in the projects we've completed for clients across different industries. Here's a glimpse of our recent work:
      </p>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden group">
            <Image 
              src={project.image} 
              alt={project.title} 
              width={400} 
              height={300} 
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" 
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{project.category}</p>
              <button className="text-blue-600 font-semibold group-hover:text-blue-700 transition-colors flex items-center">
                View Project <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-md hover:bg-blue-50 transition-colors">
          View All Projects
        </button>
      </div>
    </section>

        <section id="testimonials" className="mb-20 bg-blue-50 py-16 rounded-lg">
          <h2 className="text-4xl font-bold mb-8 text-center">Client Testimonials</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { name: "Ahmed Ali", role: "Founder of Al Noor Group", quote: "Super Technology Solution provided us with an outstanding website that has transformed our online presence. Their team was professional, responsive, and always ready to make adjustments as needed." },
              { name: "Sarah Mohamed", role: "Operations Manager of Hargeisa Foods", quote: "The mobile app developed by Super Technology Solution has streamlined our operations and improved customer engagement. Their work exceeded our expectations." },
              { name: "Hassan Abdi", role: "CEO of Tech Innovators", quote: "Working with Super Technology Solution was a game-changer for our business. Their IT consulting services helped us make informed decisions and optimize our technology infrastructure." },
              { name: "Amina Jama", role: "Marketing Director at Global Reach", quote: "The digital marketing campaign designed by Super Technology Solution significantly increased our online visibility and lead generation. Their data-driven approach delivered tangible results." },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <p className="italic mb-4">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <Image src={yes} alt={testimonial.name} width={50} height={50} className="rounded-full mr-4" />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="mb-20">
          <h2 className="text-4xl font-bold mb-8 text-center">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="mb-6 text-lg">Ready to take your business to the next level? Get in touch with Super Technology Solution today! Whether you need a new website, mobile app, or a complete digital transformation, we're here to make it happen.</p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-blue-600 mr-2" />
                  <span>123 Tech Street, Hargeisa, Somaliland</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-blue-600 mr-2" />
                  
                  <span>+252 63 4567890</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-blue-600 mr-2" />
                  <span>info@supertechnologysolution.com</span>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-blue-600 hover:text-blue-700 transition-colors">Facebook</a>
                  <a href="#" className="text-blue-600 hover:text-blue-700 transition-colors">Twitter</a>
                  <a href="#" className="text-blue-600 hover:text-blue-700 transition-colors">LinkedIn</a>
                  <a href="#" className="text-blue-600 hover:text-blue-700 transition-colors">Instagram</a>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Send Us a Message</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-1 font-medium">Name</label>
                  <input type="text" id="name" className="w-full p-2 border rounded focus:ring focus:ring-blue-200 focus:outline-none" required />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-1 font-medium">Email</label>
                  <input type="email" id="email" className="w-full p-2 border rounded focus:ring focus:ring-blue-200 focus:outline-none" required />
                </div>
                <div>
                  <label htmlFor="subject" className="block mb-1 font-medium">Subject</label>
                  <input type="text" id="subject" className="w-full p-2 border rounded focus:ring focus:ring-blue-200 focus:outline-none" required />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-1 font-medium">Message</label>
                  <textarea id="message" rows={4} className="w-full p-2 border rounded focus:ring focus:ring-blue-200 focus:outline-none" required></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">Send Message</button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Super Technology Solution</h3>
              <p className="mb-4">Innovative technology for modern businesses in Hargeisa and beyond.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#about" className="hover:text-blue-300 transition-colors">About Us</a></li>
                <li><a href="#services" className="hover:text-blue-300 transition-colors">Services</a></li>
                <li><a href="#portfolio" className="hover:text-blue-300 transition-colors">Portfolio</a></li>
                <li><a href="#testimonials" className="hover:text-blue-300 transition-colors">Testimonials</a></li>
                <li><a href="#contact" className="hover:text-blue-300 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-300 transition-colors">Software Development</a></li>
                <li><a href="#" className="hover:text-blue-300 transition-colors">Mobile App Development</a></li>
                <li><a href="#" className="hover:text-blue-300 transition-colors">Web Development</a></li>
                <li><a href="#" className="hover:text-blue-300 transition-colors">Brand Solution</a></li>
                <li><a href="#" className="hover:text-blue-300 transition-colors">Digital Marketing</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
              <p className="mb-4">Stay updated with our latest news and offers.</p>
              <form className="flex">
                <input type="email" placeholder="Your email" className="bg-gray-700 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition-colors">Subscribe</button>
              </form>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>&copy; 2023 Super Technology Solution. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}