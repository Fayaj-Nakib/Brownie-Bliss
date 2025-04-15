import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-cream text-dark-choco p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <div className="flex items-center">
            <Image
              src="/images/profile.jpg"
              alt="Brownie Bliss Logo"
              width={40}
              height={40}
              className="rounded-full mr-2"
            />
            <h1 className="text-xl font-bold">Brownie Bliss</h1>
          </div>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:underline">
                Products
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}