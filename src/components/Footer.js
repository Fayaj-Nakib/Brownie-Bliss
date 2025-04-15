export default function Footer() {
    return (
      <footer className="bg-dark-choco text-cream p-4 mt-8">
        <div className="container mx-auto text-center">
          <p className="mb-2">Indulge in a Bite of Pure Delight</p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://facebook.com/brownie_bliss"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Facebook
            </a>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </footer>
    );
  }