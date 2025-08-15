import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus } from 'lucide-react';
import { CartItem } from '../types';

interface CartProps {
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveFromCart: (productId: string) => void;
}

const Cart: React.FC<CartProps> = ({
  cartItems,
  onUpdateQuantity,
  onRemoveFromCart
}) => {
  const total = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Your cart is empty</h2>
          <Link
            to="/"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div key={item.product.id} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center space-x-4">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {item.product.name}
                    </h3>
                    <p className="text-gray-600">{item.product.category}</p>
                    {item.selectedColor && (
                      <p className="text-sm text-gray-500">Color: {item.selectedColor}</p>
                    )}
                    {item.selectedSize && (
                      <p className="text-sm text-gray-500">Size: {item.selectedSize}</p>
                    )}
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => onUpdateQuantity(item.product.id, Math.max(1, item.quantity - 1))}
                      className="p-1 bg-gray-200 rounded-lg hover:bg-gray-300"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="px-3 py-1 bg-gray-100 rounded-lg">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                      className="p-1 bg-gray-200 rounded-lg hover:bg-gray-300"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-gray-900">
                      ₹{(item.product.price * item.quantity).toLocaleString()}
                    </p>
                    <p className="text-sm text-gray-500">
                      ₹{item.product.price.toLocaleString()} each
                    </p>
                  </div>
                  <button
                    onClick={() => onRemoveFromCart(item.product.id)}
                    className="p-2 text-red-500 hover:bg-red-50 rounded-lg"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Order Summary</h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal:</span>
                  <span className="font-medium">₹{total.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping:</span>
                  <span className="font-medium">Free</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax:</span>
                  <span className="font-medium">₹{Math.round(total * 0.18).toLocaleString()}</span>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between">
                    <span className="text-lg font-bold">Total:</span>
                    <span className="text-lg font-bold">₹{Math.round(total * 1.18).toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <Link
                to="/checkout"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors text-center block"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
