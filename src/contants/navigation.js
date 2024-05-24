import { RiHome4Fill } from "react-icons/ri";
import { PiTelevisionFill } from "react-icons/pi";
import { MdMovie } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";

export const navigation = [
  {
    label: "TV shows",
    href: "tv",
    icon: <PiTelevisionFill/>
  },
  {
    label: "Movies",
    href: "movie",
    icon: <MdMovie/>
  },
];
export const mobileNavigation = [
  {
    label: "Home",
    href: "/",
    icon: <RiHome4Fill/>
  },
  ...navigation,
  {
    label: "Search",
    href: "/search",
    icon: <IoSearchSharp/>
  }
]