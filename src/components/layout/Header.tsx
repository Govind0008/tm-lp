import { Link } from "react-router-dom";
import Button from "../ui/Button";

const Header = () => {
  return (
    <header className="pt-[60px] w-full">
      <div className="self-center flex w-full max-w-[1200px] gap-5 text-[rgba(32,33,36,1)] text-center flex-wrap justify-between mx-auto px-4">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/b28b963e53c444f085ce79615ad630d0/c18995e29a0f36667d061e3263ee654b5178cacc?placeholderIfAbsent=true"
          alt="TitleMine Logo"
          className="aspect-[2.8] object-contain w-[140px] self-stretch shrink-0"
        />
        <nav className="flex items-center gap-[40px_52px] text-base font-normal flex-wrap">
          <Link
            to="/"
            className="self-stretch font-medium whitespace-nowrap px-[18px] py-4 border-b-[3px] border-[rgba(92,46,46,1)]"
          >
            Home
          </Link>
          <Link to="/what-we-do" className="self-stretch my-auto">
            What We Do
          </Link>
          <Link to="/early-access" className="self-stretch basis-auto my-auto">
            Early Access Program
          </Link>
          <Link to="/contact" className="self-stretch my-auto">
            Contact Us
          </Link>
        </nav>
        <Button variant="secondary" className="bg-[rgba(229,229,229,0.81)]">
          Log in
        </Button>
      </div>
    </header>
  );
};

export default Header;
