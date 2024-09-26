import React from 'react'
import Link from 'next/link'

const nav = [
  { name: 'blog', href: 'http://localhost:3000/billing' },
  { name: 'pharmacy', href: 'http://localhost:3001/pharmacy' },
  { name: 'lab', href: 'http://localhost:3002/lab' },
]

const BillingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-6">Billing</h1>
        <ul className="space-y-4">
          {nav.map((item, index) => (
            <li key={index}>
              <Link href={item.href} className="text-lg font-medium text-blue-500 hover:underline transition duration-200">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default BillingPage;
