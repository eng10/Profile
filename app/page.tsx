"use client";

import { motion } from "framer-motion";
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
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Home from "@/components/page/Home";

import About from "@/components/page/spline/About";
import Navbar from "@/components/page/Navbar";
import Service from "@/components/page/Service";
import Progress from "@/components/page/Progress";
import Projects from "@/components/page/Projects";
import Contact from "@/components/page/Contact";
import Footer from "@/components/page/Footer";
import Testimonials from "@/components/page/Testimonials";

export default function page() {
  return (
    <div className="min-h-screen bg-gradient-to-b bg-[#fff]">
      <Navbar />
      <Home />
      <Service />
      <About />
      <Progress />
      <Testimonials/>
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
