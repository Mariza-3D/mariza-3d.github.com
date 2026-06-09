import { Instagram, MessageCircle, Send } from 'lucide-react';
import { contactLinks } from '../siteData';

const Footer = () => {
  return (
    <footer id="contact" className="border-t border-white/10 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-[1400px] gap-8 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <h3 className="text-2xl font-black text-[#fff8ed]">Mariza 3D</h3>
          <p className="mt-3 max-w-xl text-sm leading-6 text-[#c4ccd8]">
            3D анимация, каармандар, монтаж жана YouTube монетизация боюнча практикалык курс.
          </p>
          <p className="mt-4 text-sm font-semibold text-[#d8deea]">{contactLinks.phone}</p>
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href={contactLinks.instagram}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-12 w-12 items-center justify-center rounded-lg border border-white/10 bg-white/[0.05] text-[#fff8ed] transition-colors hover:bg-white/[0.1]"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a
            href={contactLinks.telegram}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-12 w-12 items-center justify-center rounded-lg border border-white/10 bg-white/[0.05] text-[#fff8ed] transition-colors hover:bg-white/[0.1]"
            aria-label="Telegram"
          >
            <Send className="h-5 w-5" />
          </a>
          <a
            href={contactLinks.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-12 w-12 items-center justify-center rounded-lg border border-white/10 bg-[#60e6d2] text-[#081016] transition-colors hover:bg-[#9afff1]"
            aria-label="WhatsApp"
          >
            <MessageCircle className="h-5 w-5" />
          </a>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-[1400px] flex-col gap-3 border-t border-white/10 pt-6 text-sm text-[#8f9bad] sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 3D Animation Course. Бардык укуктар корголгон.</p>
        <div className="flex gap-5">
          <a href="#hero" className="hover:text-[#d8deea]">Башкы бет</a>
          <a href="#pricing" className="hover:text-[#d8deea]">Баа</a>
          <a href="#contact" className="hover:text-[#d8deea]">Байланыш</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
