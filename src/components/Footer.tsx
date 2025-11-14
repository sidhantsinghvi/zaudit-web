import React from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';
import { Button } from './ui/button';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="mb-6">
              <Logo width={160} height={80} />
            </div>
            <p className="text-white/70 mb-8 text-lg leading-relaxed max-w-md">
              AI-powered accounting and compliance platform built specifically for Indian SMEs. Transform your financial operations with intelligent automation.
            </p>
            <div className="flex gap-3">
              <Button
                variant="outline"
                size="icon"
                className="bg-white/5 hover:bg-white/10 border-white/10 hover:border-white/20 rounded-xl transition-all"
                onClick={() => window.open('https://linkedin.com', '_blank')}
              >
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="bg-white/5 hover:bg-white/10 border-white/10 hover:border-white/20 rounded-xl transition-all"
                onClick={() => window.open('https://twitter.com', '_blank')}
              >
                <Twitter className="w-5 h-5" />
              </Button>
              <a
                href="mailto:zaudit.co@gmail.com"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl transition-all inline-flex items-center justify-center w-12 h-12"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div className="md:col-span-2">
            <h4 className="text-lg mb-6">Product</h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  Integrations
                </a>
              </li>
              <li>
                <a href="#demo" className="text-white/70 hover:text-white transition-colors">
                  Demo
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-2">
            <h4 className="text-lg mb-6">Company</h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="md:col-span-3">
            <h4 className="text-lg mb-6">Legal & Support</h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  Security
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  Documentation
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm">
              © 2024 Zaudit Technologies Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <span className="text-white/50">Made in India</span>
              <span className="text-white/30">•</span>
              <span className="text-white/50">For Indian Businesses</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
