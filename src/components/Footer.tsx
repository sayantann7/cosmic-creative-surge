
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-adastra-black border-t border-adastra-red/20 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="mb-4">
              <Link to="/" className="flex items-center space-x-2">
                <span className="text-adastra-red font-display text-2xl font-bold">
                  AdAstra
                </span>
                <span className="text-adastra-light font-display text-2xl font-bold">
                  Media
                </span>
              </Link>
            </div>
            <p className="text-gray-400 mb-4">
              Elevating brands to the stars through strategic digital marketing and creative solutions.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/adastramedia.co/" target='blank' className="text-gray-400 hover:text-adastra-red transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                </svg>
              </a>
              
            </div>
          </div>
          
          <div>
            <h4 className="text-adastra-light font-display text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/vision" className="text-gray-400 hover:text-adastra-red transition-colors duration-300">Vision</Link></li>
              <li><Link to="/challenges" className="text-gray-400 hover:text-adastra-red transition-colors duration-300">Challenges</Link></li>
              <li><Link to="/approach" className="text-gray-400 hover:text-adastra-red transition-colors duration-300">Our Approach</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-adastra-red transition-colors duration-300">Services</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-adastra-red transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-adastra-light font-display text-xl font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-400 hover:text-adastra-red transition-colors duration-300">Strategic Consulting</li>
              <li className="text-gray-400 hover:text-adastra-red transition-colors duration-300">Creative Design</li>
              <li className="text-gray-400 hover:text-adastra-red transition-colors duration-300">Web Development</li>
              <li className="text-gray-400 hover:text-adastra-red transition-colors duration-300">Digital Marketing</li>
              <li className="text-gray-400 hover:text-adastra-red transition-colors duration-300">SEO & Analytics</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-adastra-light font-display text-xl font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-start space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-adastra-red flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-400">Digital Universe</span>
              </li>
              <li className="flex items-start space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-adastra-red flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="text-gray-400">+91-8404920213</span>
              </li>
              <li className="flex items-start space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-adastra-red flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="text-gray-400">contactadastramedia@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} AdAstra Media. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
