import React from 'react';

export default function LoginPage() {
  return (
    <div className="max-w-md mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Login</h1>
      <form className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md"
        >
          Login
        </button>
      </form>
    </div>
  );
}