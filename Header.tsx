import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, Heart, User, Menu, X, Mic, Scan } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  wishlistCount: number;
  onSearch: (query: string) => void;
  isAuthenticated: boolean;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({
  cartCount,
  wishlistCount,
  onSearch,
  isAuthenticated,
  onLogout
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
    navigate('/');
  };

  const handleVoiceSearch = () => {
    if ('webkitSpeechRecognition' in window) {
      const recognition = new (window as any).webkitSpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'en-US';
      
      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setSearchQuery(transcript);
        onSearch(transcript);
        navigate('/');
      };
      
      recognition.start();
    } else {
      alert('Voice search not supported in this browser');
    }
  };

  const handleScanSearch = () => {
    // Simulated barcode scanning
    const mockBarcode = 'rect-001';
    navigate(`/product/${mockBarcode}`);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-2">
              <span className="text-xl font-bold">3KR</span>
            </div>
            <span className="text-xl font-bold text-gray-800">Electrical</span>
          </Link>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="flex-1 max-w-2xl mx-8 relative">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for electrical appliances..."
                className="w-full px-4 py-2 pr-20 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex space-x-1">
                <button
                  type="button"
                  onClick={handleVoiceSearch}
                  className="p-1 text-gray-500 hover:text-blue-600"
                  title="Voice Search"
                >
                  <Mic size={16} />
                </button>
                <button
                  type="button"
                  onClick={handleScanSearch}
                  className="p-1 text-gray-500 hover:text-blue-600"
                  title="Scan Product"
                >
                  <Scan size={16} />
                </button>
                <button
                  type="submit"
                  className="p-1 text-gray-500 hover:text-blue-600"
                >
                  <Search size={16} />
                </button>
              </div>
            </div>
          </form>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/cart" className="relative text-gray-700 hover:text-blue-600">
              <ShoppingCart size={24} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            <Link to="/wishlist" className="relative text-gray-700 hover:text-blue-600">
              <Heart size={24} />
              {wishlistCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </Link>
            {isAuthenticated ? (
              <div className="relative group">
                <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600">
                  <User size={24} />
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 invisible group-hover:visible">
                  <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Profile
                  </Link>
                  <Link to="/recently-viewed" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Recently Viewed
                  </Link>
                  <Link to="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Settings
                  </Link>
                  <Link to="/help" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Help
                  </Link>
                  <button
                    onClick={onLogout}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <Link to="/login" className="text-gray-700 hover:text-blue-600">
                <User size={24} />
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/cart" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 block px-3 py-2">
                <ShoppingCart size={20} />
                <span>Cart ({cartCount})</span>
              </Link>
              <Link to="/wishlist" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 block px-3 py-2">
                <Heart size={20} />
                <span>Wishlist ({wishlistCount})</span>
              </Link>
              {isAuthenticated ? (
                <>
                  <Link to="/profile" className="text-gray-700 hover:text-blue-600 block px-3 py-2">
                    Profile
                  </Link>
                  <Link to="/recently-viewed" className="text-gray-700 hover:text-blue-600 block px-3 py-2">
                    Recently Viewed
                  </Link>
                  <Link to="/settings" className="text-gray-700 hover:text-blue-600 block px-3 py-2">
                    Settings
                  </Link>
                  <Link to="/help" className="text-gray-700 hover:text-blue-600 block px-3 py-2">
                    Help
                  </Link>
                  <button
                    onClick={onLogout}
                    className="text-gray-700 hover:text-blue-600 block px-3 py-2"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link to="/login" className="text-gray-700 hover:text-blue-600 block px-3 py-2">
                  Login
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
