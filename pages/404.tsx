import Link from "next/link";
import { FC } from "react";

const Custom404: FC = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100 p-6">
            <div className="text-center max-w-md">
                <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
                <h2 className="text-2xl text-gray-600 font-semibold mb-2">Page Not Found</h2>
                <p className="text-gray-600 mb-6">
                    Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
                </p>

                <Link
                    href="/"
                    className="inline-block bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
                >
                    Go to Homepage
                </Link>
            </div>
        </div>
    );
};

export default Custom404;
