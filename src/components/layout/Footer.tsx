
import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";

export function Footer() {
    return (
        <footer className="w-full bg-[#264653] text-[#FDFFF7] py-12 md:py-16">
            <div className="container px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    {/* Brand Column */}
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="inline-block mb-4">
                            <span className="text-2xl font-bold tracking-tight text-white">Losos4<span className="text-accent">.</span></span>
                        </Link>
                        <p className="text-sm leading-relaxed mb-6" style={{ color: '#ECF0FE' }}>
                            Delivering precise, reliable, and innovative engineering solutions across Mechanical, Electrical, Fire, and Project Management disciplines.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="#" className="text-slate-400 hover:text-accent transition-colors"><Linkedin size={20} /></Link>
                            <Link href="#" className="text-slate-400 hover:text-accent transition-colors"><Twitter size={20} /></Link>
                            <Link href="#" className="text-slate-400 hover:text-accent transition-colors"><Facebook size={20} /></Link>
                        </div>
                    </div>

                    {/* Links Column */}
                    <div className="col-span-1">
                        <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
                        <ul className="space-y-3 text-sm text-slate-300">
                            <li><Link href="/about" className="hover:text-accent transition-colors">About Us</Link></li>
                            <li><Link href="/services" className="hover:text-accent transition-colors">Services</Link></li>
                            <li><Link href="/projects" className="hover:text-accent transition-colors">Projects</Link></li>
                            <li><Link href="/schedule" className="hover:text-accent transition-colors">Schedule a Meeting</Link></li>
                            <li><Link href="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
                            <li><Link href="/faq" className="hover:text-accent transition-colors">FAQ</Link></li>
                        </ul>
                    </div>

                    {/* Services Column */}
                    <div className="col-span-1">
                        <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
                        <ul className="space-y-3 text-sm text-slate-300">
                            <li><Link href="/services/mechanical" className="hover:text-accent transition-colors">Mechanical Engineering</Link></li>
                            <li><Link href="/services/electrical" className="hover:text-accent transition-colors">Electrical Engineering</Link></li>
                            <li><Link href="/services/fire" className="hover:text-accent transition-colors">Fire Engineering</Link></li>
                            <li><Link href="/services/project-management" className="hover:text-accent transition-colors">Project Management</Link></li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div className="col-span-1">
                        <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
                        <ul className="space-y-4 text-sm text-slate-300">
                            <li className="flex items-start">
                                <MapPin size={18} className="mr-3 mt-1 text-accent shrink-0" />
                                <span>Suite DD11, Apo Sparklight Mall, Opposite Living Faith Church, Durumi, Abuja, Nigeria</span>
                            </li>
                            <li className="flex items-start">
                                <Phone size={18} className="mr-3 mt-1 text-accent shrink-0" />
                                <div className="flex flex-col">
                                    <span>+234 806 209 6090</span>
                                    <span>+234 802 324 8309</span>
                                    <span>+234 803 363 8920</span>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <Mail size={18} className="mr-3 mt-1 text-accent shrink-0" />
                                <div className="flex flex-col">
                                    <span>losos4consultants@gmail.com</span>
                                    <span>losos4consultantsltd@gmail.com</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-700 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
                    <div className="flex flex-col md:flex-row items-center gap-2">
                        <p>&copy; {new Date().getFullYear()} Losos4 Engineering. All rights reserved.</p>
                        <span className="hidden md:inline text-slate-600">|</span>
                        <p className="text-slate-500">RC 1539440</p>
                    </div>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
