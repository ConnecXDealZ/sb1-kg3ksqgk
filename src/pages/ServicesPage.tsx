import React from 'react';

export default function ServicesPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-900">Our Services</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Service cards will be added here */}
        <div className="p-6 bg-white rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900">Coming Soon</h2>
          <p className="mt-2 text-gray-600">Service listings are being added.</p>
        </div>
      </div>
    </div>
  );
}