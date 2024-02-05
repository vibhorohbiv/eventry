import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-100 border-b">
      <div className="wrapper flex items-center justify-center">
        <Link href="/" className="w-36">
          <Image
            src="assets/images/logo.svg"
            width={128}
            height={38}
            alt="Eventry Logo"
          />
        </Link>
        <div className="flex w-32 justify-end gap-3">
            
        </div>
      </div>
      Header
    </header>
  );
};

export default Header;
