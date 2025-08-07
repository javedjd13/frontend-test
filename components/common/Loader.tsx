import React from "react";

const Loader: React.FC = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-dark">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-solid"></div>
        </div>
    );
};

export default Loader;
