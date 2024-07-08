// import React from "react";
import { Link } from "react-router-dom";

function FirstPage() {
    return (
        <div className="min-h-screen w-full flex items-center justify-center">
            <Link to="/home">
                <button className="bg-gradient-to-tr from-[#db1307] to-[#ffeae4] rounded-3xl p-5 text-white font-bold transition ease-in-out hover:scale-110 hover:shadow-md hover:shadow-[#db1307] duration-500">
                    Click me
                </button>
            </Link>
        </div>
    );
}

export default FirstPage;
