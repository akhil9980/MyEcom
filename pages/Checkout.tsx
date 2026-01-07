
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, Plus, Minus, CreditCard, ShoppingBag, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Checkout: React.FC = () => {
  const { cart, updateQuantity, removeFromCart, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [step, setStep] = useState<'cart' | 'shipping' | 'payment' | 'success'>('cart');
  
  const shippingFee = totalPrice > 500 ? 0 : 15;
  const tax = totalPrice * 0.1;
  const grandTotal = totalPrice + shippingFee + tax;

  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    postalCode: '',
    cardNumber: '4242 4242 4242 4242',
    expiry: '12/26',
    cvv: '123'
  });

  const handleComplete = () => {
    setStep('success');
    setTimeout(() => {
      clearCart();
    }, 100);
  };

  if (cart.length === 0 && step !== 'success') {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center animate-fade-in">
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center text-slate-300">
            <ShoppingBag size={48} strokeWidth={1} />
          </div>
        </div>
        <h2 className="text-3xl font-serif mb-4">Your bag is empty</h2>
        <p className="text-slate-500 mb-10 font-light italic">It seems you haven't added anything to your bag yet.</p>
        <Link 
          to="/shop" 
          className="bg-black text-white px-10 py-4 text-xs font-bold tracking-widest uppercase hover:bg-slate-800 transition-colors inline-block"
        >
          Start Shopping
        </Link>
      </div>
    );
  }

  if (step === 'success') {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center animate-fade-in">
        <div className="mb-8 flex justify-center text-green-600">
          <CheckCircle2 size={80} strokeWidth={1} />
        </div>
        <h2 className="text-4xl font-serif mb-4">Thank you for your order!</h2>
        <p className="text-slate-500 mb-10 text-lg font-light">
          Your order <strong>#ME-891023</strong> has been placed successfully. 
          A confirmation email has been sent to your inbox.
        </p>
        <div className="bg-slate-50 p-8 rounded-sm text-left mb-10 border border-slate-100">
          <p className="text-xs font-bold tracking-widest uppercase text-slate-400 mb-4">Shipping to</p>
          <p className="font-medium text-slate-900">{formData.firstName} {formData.lastName}</p>
          <p className="text-slate-600">{formData.address}</p>
          <p className="text-slate-600">{formData.city}, {formData.postalCode}</p>
        </div>
        <Link 
          to="/" 
          className="bg-black text-white px-10 py-4 text-xs font-bold tracking-widest uppercase hover:bg-slate-800 transition-colors inline-block"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20 animate-fade-in">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Main Content Column */}
        <div className="lg:col-span-8">
          <div className="flex items-center mb-10">
            <button 
              onClick={() => step === 'cart' ? navigate(-1) : step === 'shipping' ? setStep('cart') : setStep('shipping')}
              className="flex items-center text-xs font-bold tracking-widest uppercase text-slate-400 hover:text-black transition-colors"
            >
              <ArrowLeft size={14} className="mr-2" /> Back
            </button>
          </div>

          {step === 'cart' && (
            <div className="space-y-8">
              <h1 className="text-3xl font-serif mb-8">Shopping Bag ({cart.length})</h1>
              <div className="divide-y divide-slate-100">
                {cart.map(item => (
                  <div key={item.id} className="py-8 flex gap-6">
                    <div className="w-24 h-32 flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-sm" />
                    </div>
                    <div className="flex-grow flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="text-[10px] font-bold tracking-widest uppercase text-slate-400">{item.brand}</p>
                            <h3 className="text-sm font-medium text-slate-900 mt-1">{item.name}</h3>
                            <p className="text-xs text-slate-500 mt-1">{item.color} / {item.size}</p>
                          </div>
                          <span className="font-semibold text-slate-900">${item.price * item.quantity}</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center mt-4">
                        <div className="flex items-center border border-slate-100 h-10">
                          <button 
                            onClick={() => updateQuantity(item.id, -1)}
                            className="px-3 text-slate-400 hover:text-black transition-colors"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-8 text-center text-xs font-bold">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, 1)}
                            className="px-3 text-slate-400 hover:text-black transition-colors"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-slate-300 hover:text-red-500 transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {(step === 'shipping' || step === 'payment') && (
            <div className="space-y-12">
              <div className="flex items-center space-x-4 mb-10 text-xs font-bold tracking-[0.2em] uppercase">
                <span className={step === 'shipping' ? 'text-black' : 'text-slate-300'}>1. Shipping</span>
                <span className="text-slate-300">/</span>
                <span className={step === 'payment' ? 'text-black' : 'text-slate-300'}>2. Payment</span>
              </div>

              {step === 'shipping' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <h2 className="col-span-full text-2xl font-serif">Shipping Address</h2>
                  <input 
                    type="text" placeholder="FIRST NAME" 
                    className="border-b border-slate-200 py-3 text-xs tracking-widest uppercase outline-none focus:border-black transition-colors"
                    value={formData.firstName} onChange={e => setFormData({...formData, firstName: e.target.value})}
                  />
                  <input 
                    type="text" placeholder="LAST NAME" 
                    className="border-b border-slate-200 py-3 text-xs tracking-widest uppercase outline-none focus:border-black transition-colors"
                    value={formData.lastName} onChange={e => setFormData({...formData, lastName: e.target.value})}
                  />
                  <input 
                    type="email" placeholder="EMAIL" 
                    className="sm:col-span-2 border-b border-slate-200 py-3 text-xs tracking-widest uppercase outline-none focus:border-black transition-colors"
                    value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})}
                  />
                  <input 
                    type="text" placeholder="STREET ADDRESS" 
                    className="sm:col-span-2 border-b border-slate-200 py-3 text-xs tracking-widest uppercase outline-none focus:border-black transition-colors"
                    value={formData.address} onChange={e => setFormData({...formData, address: e.target.value})}
                  />
                  <input 
                    type="text" placeholder="CITY" 
                    className="border-b border-slate-200 py-3 text-xs tracking-widest uppercase outline-none focus:border-black transition-colors"
                    value={formData.city} onChange={e => setFormData({...formData, city: e.target.value})}
                  />
                  <input 
                    type="text" placeholder="POSTAL CODE" 
                    className="border-b border-slate-200 py-3 text-xs tracking-widest uppercase outline-none focus:border-black transition-colors"
                    value={formData.postalCode} onChange={e => setFormData({...formData, postalCode: e.target.value})}
                  />
                </div>
              )}

              {step === 'payment' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <h2 className="col-span-full text-2xl font-serif">Payment Method</h2>
                  <div className="col-span-full bg-slate-50 p-6 rounded-sm border border-slate-200 mb-4 flex items-center">
                    <CreditCard size={24} className="mr-4 text-slate-400" />
                    <span className="text-xs font-bold tracking-widest uppercase">Debit / Credit Card</span>
                  </div>
                  <input 
                    type="text" placeholder="CARD NUMBER" 
                    className="sm:col-span-2 border-b border-slate-200 py-3 text-xs tracking-widest uppercase outline-none focus:border-black transition-colors"
                    value={formData.cardNumber} readOnly
                  />
                  <input 
                    type="text" placeholder="EXPIRY DATE (MM/YY)" 
                    className="border-b border-slate-200 py-3 text-xs tracking-widest uppercase outline-none focus:border-black transition-colors"
                    value={formData.expiry} readOnly
                  />
                  <input 
                    type="text" placeholder="CVV" 
                    className="border-b border-slate-200 py-3 text-xs tracking-widest uppercase outline-none focus:border-black transition-colors"
                    value={formData.cvv} readOnly
                  />
                </div>
              )}
            </div>
          )}
        </div>

        {/* Sidebar Summary Column */}
        <div className="lg:col-span-4">
          <div className="bg-slate-50 p-8 rounded-sm sticky top-32">
            <h2 className="text-lg font-bold tracking-[0.2em] uppercase mb-8 pb-4 border-b border-slate-200">Order Summary</h2>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-sm">
                <span className="text-slate-500 font-light">Subtotal</span>
                <span className="font-medium">${totalPrice}.00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500 font-light">Shipping</span>
                <span className="font-medium text-green-600">{shippingFee === 0 ? 'FREE' : `$${shippingFee}.00`}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500 font-light">Estimated Tax</span>
                <span className="font-medium">${tax.toFixed(2)}</span>
              </div>
            </div>
            <div className="flex justify-between text-lg font-bold border-t border-slate-200 pt-6 mb-10">
              <span>Total</span>
              <span>${grandTotal.toFixed(2)}</span>
            </div>

            {step === 'cart' && (
              <button 
                onClick={() => setStep('shipping')}
                className="w-full bg-black text-white h-14 text-xs font-bold tracking-[0.2em] uppercase hover:bg-slate-800 transition-colors"
              >
                Checkout Now
              </button>
            )}

            {step === 'shipping' && (
              <button 
                onClick={() => setStep('payment')}
                disabled={!formData.firstName || !formData.address}
                className={`w-full bg-black text-white h-14 text-xs font-bold tracking-[0.2em] uppercase transition-colors ${!formData.firstName || !formData.address ? 'opacity-50 cursor-not-allowed' : 'hover:bg-slate-800'}`}
              >
                Proceed to Payment
              </button>
            )}

            {step === 'payment' && (
              <button 
                onClick={handleComplete}
                className="w-full bg-black text-white h-14 text-xs font-bold tracking-[0.2em] uppercase hover:bg-slate-800 transition-colors"
              >
                Complete Purchase
              </button>
            )}

            <div className="mt-8 text-center">
              <p className="text-[10px] text-slate-400 font-bold tracking-widest uppercase">Secure Transaction</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
