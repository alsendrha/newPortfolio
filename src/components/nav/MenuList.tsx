import { navData } from "@/utils/data/listData";
import Link from "next/link";

type MenuListProps = {
  menuOpen: boolean;
  onClick: () => void;
};

const MenuList = ({ menuOpen, onClick }: MenuListProps) => {
  return (
    <ul
      className={`flex gap-8 max-[1000px]:flex-col max-[1000px]:absolute max-[1000px]:pt-5 max-[1000px]:gap-4  max-[1000px]:items-center max-[1000px]:-left-5 ${
        menuOpen ? "max-[1000px]:flex" : "max-[1000px]:hidden"
      }`}
    >
      {navData.map((data, index) => (
        <Link key={index} href={`#${data}`} onClick={onClick}>
          <li>{data}</li>
        </Link>
      ))}
    </ul>
  );
};

export default MenuList;
