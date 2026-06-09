import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import marizaLogo from '../../assets/brand/mariza-logo.svg';
import { contactLinks } from '../siteData';

const navItems = [
  { name: 'Башкы бет', href: '#hero' },
  { name: 'Программалар', href: '#software' },
  { name: 'Жыйынтыктар', href: '#results' },
  { name: 'Программа', href: '#curriculum' },
  { name: 'Баа', href: '#pricing' },
  { name: 'Байланыш', href: '#contact' },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'border-b border-white/10 bg-[#0b0f18]/86 shadow-[0_20px_70px_rgba(0,0,0,0.26)] backdrop-blur-2xl' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#hero" className="group inline-flex items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-200">
          <span className="grid h-10 w-10 place-items-center rounded-lg border border-[#fb171d]/25 bg-white/[0.04] p-1 shadow-[0_0_34px_rgba(251,23,29,0.18)]">
            <img src={marizaLogo} alt="" className="h-full w-full object-contain" />
          </span>
          <span className="leading-tight">
            <span className="block text-base font-black text-[#fff8ed]">Mariza Online</span>
            <span className="block text-xs text-[#aeb8c7]">Animation Course</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-4 py-2 text-sm font-semibold text-[#c4ccd8] transition-colors hover:bg-white/[0.07] hover:text-[#fff8ed] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#60e6d2]"
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={contactLinks.telegram} target="_blank" rel="noreferrer" className="text-sm font-semibold text-[#c4ccd8] transition-colors hover:text-[#fff8ed]">
            Telegram
          </a>
          <a
            href={contactLinks.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-[#fb171d] px-5 py-3 text-sm font-black text-white transition-colors hover:bg-[#ff383d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#fb171d]"
          >
            Жазылуу
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((value) => !value)}
          className="grid h-11 w-11 place-items-center rounded-lg border border-white/10 bg-white/[0.06] text-white lg:hidden"
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="border-t border-white/10 bg-[#0b0f18]/96 px-4 pb-5 pt-3 backdrop-blur-2xl lg:hidden"
          >
            <div className="mx-auto grid max-w-[1400px] gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="rounded-lg px-4 py-3 text-base font-semibold text-[#d8deea] hover:bg-white/[0.07]"
                >
                  {item.name}
                </a>
              ))}
              <a
                href={contactLinks.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="mt-2 rounded-lg bg-[#fb171d] px-4 py-4 text-center font-black text-white"
              >
                WhatsApp аркылуу жазылуу
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
