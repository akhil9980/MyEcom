import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  ShoppingBag,
  Heart,
  MapPin,
  CreditCard,
  Settings,
  LogOut,
  Phone,
  Mail,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Profile: React.FC = () => {
  const { cart } = useCart();
  const [user] = useState({
    name: "Oncy Tech",
    email: "oncytech@gmail.com",
    phone: "+91 9599663171",
    address: "New Delhi, India",
    memberSince: "January 2026",
  });

  const orders = [
    { id: "1", date: "Jan 5, 2026", total: 299, status: "Delivered" },
    { id: "2", date: "Jan 2, 2026", total: 159, status: "In Transit" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-zinc-900 to-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-6"
          >
            <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-md border-2 border-white/20 flex items-center justify-center">
              <User size={48} className="text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-serif font-bold mb-2">
                {user.name}
              </h1>
              <p className="text-white/70">Member since {user.memberSince}</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-zinc-50 rounded-lg p-6 space-y-2"
            >
              <Link
                to="/profile"
                className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white text-zinc-900 font-medium"
              >
                <User size={20} />
                <span>Profile</span>
              </Link>
              <Link
                to="/checkout"
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white transition-colors text-zinc-700"
              >
                <ShoppingBag size={20} />
                <span>My Orders</span>
              </Link>
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white transition-colors text-zinc-700">
                <Heart size={20} />
                <span>Wishlist</span>
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white transition-colors text-zinc-700">
                <MapPin size={20} />
                <span>Addresses</span>
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white transition-colors text-zinc-700">
                <CreditCard size={20} />
                <span>Payment Methods</span>
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white transition-colors text-zinc-700">
                <Settings size={20} />
                <span>Settings</span>
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-red-50 transition-colors text-red-600 mt-4">
                <LogOut size={20} />
                <span>Sign Out</span>
              </button>
            </motion.div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Personal Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white border border-zinc-200 rounded-lg p-6"
            >
              <h2 className="text-2xl font-serif font-bold mb-6">
                Personal Information
              </h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <User size={20} className="text-zinc-400" />
                  <div>
                    <p className="text-sm text-zinc-500">Full Name</p>
                    <p className="font-medium text-zinc-900">{user.name}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Mail size={20} className="text-zinc-400" />
                  <div>
                    <p className="text-sm text-zinc-500">Email</p>
                    <p className="font-medium text-zinc-900">{user.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone size={20} className="text-zinc-400" />
                  <div>
                    <p className="text-sm text-zinc-500">Phone</p>
                    <p className="font-medium text-zinc-900">{user.phone}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin size={20} className="text-zinc-400" />
                  <div>
                    <p className="text-sm text-zinc-500">Address</p>
                    <p className="font-medium text-zinc-900">{user.address}</p>
                  </div>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-6 bg-black text-white px-6 py-3 rounded-lg text-sm font-bold tracking-wider hover:bg-zinc-800 transition-colors"
              >
                Edit Profile
              </motion.button>
            </motion.div>

            {/* Recent Orders */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white border border-zinc-200 rounded-lg p-6"
            >
              <h2 className="text-2xl font-serif font-bold mb-6">
                Recent Orders
              </h2>
              <div className="space-y-4">
                {orders.map((order) => (
                  <div
                    key={order.id}
                    className="flex items-center justify-between p-4 bg-zinc-50 rounded-lg"
                  >
                    <div>
                      <p className="font-semibold text-zinc-900">
                        Order #{order.id}
                      </p>
                      <p className="text-sm text-zinc-500">{order.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-zinc-900">
                        ${order.total}
                      </p>
                      <p
                        className={`text-sm ${
                          order.status === "Delivered"
                            ? "text-green-600"
                            : "text-blue-600"
                        }`}
                      >
                        {order.status}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                to="/checkout"
                className="mt-6 inline-block text-sm font-bold tracking-wider text-zinc-900 hover:text-zinc-600 transition-colors"
              >
                View All Orders →
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-3 gap-4"
            >
              <div className="bg-zinc-900 text-white p-6 rounded-lg text-center">
                <p className="text-3xl font-bold">{cart.length}</p>
                <p className="text-sm text-white/70 mt-1">Items in Cart</p>
              </div>
              <div className="bg-zinc-900 text-white p-6 rounded-lg text-center">
                <p className="text-3xl font-bold">{orders.length}</p>
                <p className="text-sm text-white/70 mt-1">Total Orders</p>
              </div>
              <div className="bg-zinc-900 text-white p-6 rounded-lg text-center">
                <p className="text-3xl font-bold">0</p>
                <p className="text-sm text-white/70 mt-1">Wishlist</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
