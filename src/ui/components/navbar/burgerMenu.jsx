import { HiMenuAlt1, HiSearch, HiX } from 'react-icons/hi';

export default function BurgerMenu(props) {
  return (
    <div className="md:hidden">
      <button
        onClick={props.toggleMenu}
        className={`p-2 rounded-md focus:outline-none ${
          props.scrolled || props.isMenuOpen ? 'text-primary' : 'text-secondary'
        }`}
        aria-label="Toggle menu">
        {props.isMenuOpen ? <HiX /> : <HiSearch />}
      </button>
    </div>
  );
}
