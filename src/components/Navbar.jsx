import React from "react";
import NavbarItem from "@/components/NavbarItem";

const Navbar = () => {
  return (
    <div className="flex justify-center dark:bg-gray-600 bg-amber-100 lg:text-lg">
      <NavbarItem title="Trending" param="fetchTrending" />
      <NavbarItem title="Top Rated" param="fetchTopRated" />
    </div>
  );
};

export default Navbar;
