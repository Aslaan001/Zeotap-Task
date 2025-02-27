import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <header className="bg-gradient-to-r from-blue-500 to-purple-700 p-6 text-white text-center shadow-md">
        <h1 className="text-3xl font-bold tracking-wide">ZeoSheets (Task 1)- Made by Aslaan Khan</h1>
      </header>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 px-6">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl bg-white p-10 rounded-2xl shadow-xl"
        >
          <h1 className="text-4xl font-bold text-gray-800">Welcome to ZeoSheets</h1>
          <p className="text-lg text-gray-700 mt-4">
            A powerful web-based spreadsheet application with advanced features
            for data entry, validation, and visualization.
          </p>

          <motion.div 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="mt-6"
          >
            <Link to="/main" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md transition-all">
              Get Started
            </Link>
          </motion.div>
        </motion.div>
      </div>
      <footer className="mt-10 p-4 bg-gray-800 text-white text-center shadow-md">
        <p className="text-sm">&copy; 2025 ZeoSheets. All rights reserved.</p>
      </footer>
    </>
  );
}