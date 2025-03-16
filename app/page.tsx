import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      {/* Hero Section */}
      <div className="text-center p-10">
        <h1 className="text-4xl font-bold text-blue-600">Welcome to TrustBank</h1>
        <p className="text-gray-700 mt-4">Your trusted financial partner for a secure future.</p>
      </div>

      {/* Images Section */}
      <div className="flex flex-col md:flex-row gap-6 mt-6">
        <Image
          src="/images/bank_2nd_logo.jpeg" 
          alt="Bank Building"
          width={400}
          height={300}
          className="rounded-lg shadow-lg"
        />
        <Image
          src="/images/bank_logo.jpeg"
          alt="Customer Service"
          width={400}
          height={300}
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* CTA Section */}
      <div className="mt-10">
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">
          Get Started
        </button>
      </div>
    </div>
  );
}
