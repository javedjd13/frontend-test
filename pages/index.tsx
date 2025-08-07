import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-blue-50 px-4">
        <div className="text-center max-w-2xl">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 leading-tight mb-4">
            Welcome to the <span className="text-blue-600">Frontend Developer Test</span>
          </h1>
          <p className="text-gray-600 text-lg sm:text-xl mb-6">
            Build modern, responsive, and accessible interfaces with ease.
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
              Get Started
            </button>
            <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-100 transition">
              Learn More
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
