import { Logo, Socials, Copyright, Delivery } from '../components';
import {
  HiOutlinePhone,
  HiOutlineMail,
  HiLocationMarker,
} from 'react-icons/hi';

export default function Footer() {
  return (
    <footer className="bg-primary px-12 pb-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 border-b-1 border-muted">
        {/* Brand Info */}
        <div className="grid pb-8 pt-4 gap-4">
          <Logo fromFooter={true} />
          <p className="text-muted leading-relaxed mb-6 w-full md:w-[50%]">
            Portiamo in tavola la passione per il buon cibo. Hamburger gourmet,
            ingredienti selezionati e un'atmosfera unica a Portici.
          </p>
          <Socials />
        </div>

        {/* Contatti */}
        <div className="pt-4 pb-8">
          <h4 className="font-bold text-lg uppercase tracking-wider text-secondary pb-5">
            Contatti
          </h4>
          <div className="flex flex-row gap-2 text-muted items-center">
            <div className="bg-primary-light p-1 rounded-lg">
              <HiOutlinePhone className="text-xl" />
            </div>
            <span>+39 081 123 4567</span>
          </div>
          <div className="flex flex-row gap-2 text-muted items-center pt-2">
            <div className="bg-primary-light p-1 rounded-lg">
              <HiOutlineMail className="text-xl" />
            </div>
            <span>vidaburger@gmail.com</span>
          </div>
          <div className="flex flex-row gap-2 text-muted items-center pt-2">
            <div className="bg-primary-light p-1 rounded-lg">
              <HiLocationMarker className="text-xl" />
            </div>
            <span>Corso Garibaldi 80, Portici (NA)</span>
          </div>
        </div>

        {/* Delivery Partners */}
        <Delivery />
      </div>
      <Copyright></Copyright>
    </footer>
  );
}
