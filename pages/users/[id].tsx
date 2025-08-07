"use client";
import { useRouter } from "next/router";
import { useUsers } from "@/hooks/useUsers";
import { useMemo } from "react";
import Loader from "@/components/common/Loader";
import { FaEnvelope, FaGlobe, FaPhone, FaUser } from "react-icons/fa";

interface User {
    id: number;
    name: string;
    email: string;
    phone: string;
    website: string;
}

export default function UserDetailPage() {
    const { query } = useRouter();
    const { id } = query;

    const { data, isLoading, error } = useUsers();

    const userId = useMemo(() => {
        if (!id) return null;
        return Array.isArray(id) ? parseInt(id[0], 10) : parseInt(id, 10);
    }, [id]);

    if (isLoading) return <Loader />;
    if (error) return <p className="text-red-500 text-center mt-8">Something went wrong.</p>;

    const user = data?.find((u: User) => u.id === userId);
    if (!user) return <p className="text-gray-500 text-center mt-8">User not found.</p>;

    return (
        <div className="min-h-screen flex items-center bg-white justify-center bg-dark px-4 py-12">
            <div className="max-w-md w-full bg-white shadow-xl rounded-2xl p-8">
                <div className="flex flex-col items-center">
                    <div className="bg-blue-100 p-4 rounded-full">
                        <FaUser className="text-blue-600 text-3xl" />
                    </div>
                    <h2 className="mt-4 text-2xl font-semibold text-gray-800">{user.name}</h2>
                </div>

                <div className="mt-6 space-y-4">
                    <div className="flex items-center gap-3">
                        <FaEnvelope className="text-gray-500" />
                        <span className="text-gray-700">{user.email}</span>
                    </div>

                    <div className="flex items-center gap-3">
                        <FaPhone className="text-gray-500" />
                        <span className="text-gray-700">{user.phone}</span>
                    </div>

                    <div className="flex items-center gap-3">
                        <FaGlobe className="text-gray-500" />
                        <a
                            href={`https://${user.website}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                        >
                            {user.website}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
