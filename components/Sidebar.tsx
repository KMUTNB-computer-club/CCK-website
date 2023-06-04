"use client";
import { usePathname } from "next/navigation";
import MenuLink from "./MenuLink";

interface asideProps {
  isOpen: Boolean;
}

const Sidebar = (props: asideProps) => {
  const pathname = usePathname();
  const isActive = pathname;

  const menuItems = [
    {
      title: "หน้าแรก",
      url: "",
      isActive: isActive,
      svgIcon:
        "M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z",
    },
    {
      title: "ข่าวสาร",
      url: "News",
      isActive: isActive,
      svgIcon:
        "M96 96c0-35.3 28.7-64 64-64H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H80c-44.2 0-80-35.8-80-80V128c0-17.7 14.3-32 32-32s32 14.3 32 32V400c0 8.8 7.2 16 16 16s16-7.2 16-16V96zm64 24v80c0 13.3 10.7 24 24 24H296c13.3 0 24-10.7 24-24V120c0-13.3-10.7-24-24-24H184c-13.3 0-24 10.7-24 24zm208-8c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H384c-8.8 0-16 7.2-16 16zm0 96c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H384c-8.8 0-16 7.2-16 16zM160 304c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16zm0 96c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16z",
    },
    {
      title: "ติดต่อ",
      url: "Contact",
      isActive: isActive,
      svgIcon:
        "M256 48C141.1 48 48 141.1 48 256v40c0 13.3-10.7 24-24 24s-24-10.7-24-24V256C0 114.6 114.6 0 256 0S512 114.6 512 256V400.1c0 48.6-39.4 88-88.1 88L313.6 488c-8.3 14.3-23.8 24-41.6 24H240c-26.5 0-48-21.5-48-48s21.5-48 48-48h32c17.8 0 33.3 9.7 41.6 24l110.4 .1c22.1 0 40-17.9 40-40V256c0-114.9-93.1-208-208-208zM144 208h16c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H144c-35.3 0-64-28.7-64-64V272c0-35.3 28.7-64 64-64zm224 0c35.3 0 64 28.7 64 64v48c0 35.3-28.7 64-64 64H352c-17.7 0-32-14.3-32-32V240c0-17.7 14.3-32 32-32h16z",
    },
  ];

  return (
    <>
      <aside
        id="logo-sidebar"
        // className="max-md:hiden fixed top-0 left-0 z-40 w-32 h-screen pt-24 transition-transform -translate-x-full bg-white/75 sm:translate-x-0 dark:bg-black/50 backdrop-blur-lg saturate-150"
        className={`${props.isOpen ? "max-md:flex" : "max-md:hidden"}
          max-md:w-full fixed top-0 left-0 z-40 w-32 h-screen pt-24 bg-white/75  dark:bg-black/50 backdrop-blur-lg saturate-150`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto flex justify-between max-md:justify-start max-md:space-y-2 flex-col ">
          <ul className="space-y-2 font-medium">
            {menuItems.map((item, index) => (
              <MenuLink
                key={index}
                title={item.title}
                url={item.url}
                isActive={item.isActive}
                svgIcon={item.svgIcon}
              />
            ))}
          </ul>
          <ul>
            <MenuLink
              title="เกี่ยวกับ"
              url="AboutUs"
              isActive={isActive}
              svgIcon="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
            />
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
