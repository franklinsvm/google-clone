import React from 'react'
import { NavLink } from "react-router-dom";

const links = [
    { url: "/search", text: "🔎 All" },
    { url: "/news", text: "📰 News" },
    { url: "/image", text: "📷 Images" },
    { url: "/videos", text: "🎥 Videos" },
];

export const Links = () => {
  return (
    <div className='flex sm:justify-around justify-between items-center mt-4'>
        {links.map(({ url, text }) => (
            <NavLink to={url} className="m-2 mb-0 focus:text-blue-700 focus:border-b-2 focus:dark:text-blue-300 focus:border-blue-700 focus:-mt-2">
                {text}
            </NavLink>
        ))}
    </div>
  )
}
