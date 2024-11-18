import Link from 'next/link'
import React, { useState } from 'react'
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'
import { Button } from '../ui/button'
import { Menu } from 'lucide-react'

const Navbar = () => {
  function NavLink({ href, children }: any) {
    return (
      <Link
        href={href}
        className="text-gray-600 hover:text-primary transition-colors"
      >
        {children}
      </Link>
    )
  }

  function MobileNav() {
    const [isOpen, setIsOpen] = useState(false)

    return (
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            className="p-0 md:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Open menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[300px] sm:w-[400px]">
          <nav className="flex flex-col gap-4">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About Us</NavLink>
            <NavLink href="/services">Our Services</NavLink>
            <NavLink href="/testimonials">Testimonials</NavLink>
            <NavLink href="/contact">Contact Us</NavLink>
          </nav>
        </SheetContent>
      </Sheet>
    )
  }

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm">
    <div className="container mx-auto px-4 py-4">
      <div className="flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600" aria-hidden="true" />
          <span className="text-xl font-bold">Go Squared</span>
        </Link>
        <div className="hidden md:flex space-x-8">
          <NavLink href="/" className="nav-link hover:text-blue-600">
            Home
          </NavLink>
          <NavLink href="/about" className="nav-link hover:text-blue-600">
            About Us
          </NavLink>
          <NavLink href="/services" className="nav-link hover:text-blue-600">
            Our Services
          </NavLink>
          <NavLink href="/testimonials" className="nav-link hover:text-blue-600">
            Testimonials
          </NavLink>
          <NavLink href="/contact" className="nav-link hover:text-blue-600">
            Contact Us
          </NavLink>
        </div>
        <MobileNav />
      </div>
    </div>
  </nav>
  
  )
}

export default Navbar
