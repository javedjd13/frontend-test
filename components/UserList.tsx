"use client";

import { useState } from "react";
import Link from "next/link";
import { useUsers } from "@/hooks/useUsers";
import { User } from "@/types/user";
import Loader from "./common/Loader";

const UserList = () => {
    const { data: users = [], isLoading } = useUsers();
    const [search, setSearch] = useState("");

    const filteredUsers = users.filter((user: User) =>
        user.name.toLowerCase().includes(search.toLowerCase())
    );

    if (isLoading) return <Loader />;

    return (
        <section className="max-w-6xl mx-auto px-4 py-10 ">
            <div className="mb-6 flex justify-center">
                <div className="flex-col">

                <h1 className="text-3xl font-bold text-black mb-2">
                    Explore User List
                </h1>
                <p className="text-black text-sm">
                    Discover users and view their profile details.
                </p>
                </div>
            </div>

            {/* Search Input */}
            <div className="mb-8 flex justify-center">
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search users by name..."
                    className="w-full md:w-1/2 px-4 py-3 rounded-lg border text-black border-gray-300 focus:outline-none  transition-all"
                />
            </div>

            {/* User List */}
            {filteredUsers.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredUsers.map((user: User) => (
                        <div
                            key={user.id}
                            className="bg-white p-6 rounded-2xl border hover:shadow-lg shadow-md transition-shadow duration-300"
                        >
                            <h2 className="text-xl font-semibold text-gray-900 mb-1">
                                {user.name}
                            </h2>
                            <p className="text-gray-600 text-sm">{user.email}</p>
                            <Link
                                href={`/users/${user.id}`}
                                className="inline-block mt-4 text-sm text-blue-600 font-medium hover:underline"
                            >
                                View Profile →
                            </Link>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-gray-500 text-center text-sm">
                    No users found for "{search}".
                </p>
            )}
        </section>
    );
};

export default UserList;
