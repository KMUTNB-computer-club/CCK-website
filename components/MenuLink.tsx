import Link from "next/link";

interface MenuLinkProps {
  url: string;
  isActive: string;
  svgIcon: string;
  title: string;
}

const MenuLink = (props: MenuLinkProps) => {
  return (
    <>
      <li>
        <Link
          href={`/${props.url}`}
          className={`${
            props.isActive === `/${props.url}`
              ? "text-gray-950 border-solid border-l-4 border-gray-950 dark:border-gray-100 dark:text-gray-100"
              : "text-gray-700 dark:text-gray-400"
          }  transition duration-300 flex items-center flex-col max-md:flex-row max-md:space-x-5 justify-center max-md:justify-start p-2 hover:text-gray-800 dark:hover:text-gray-200 `}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            viewBox="0 0 576 512"
            fill="currentColor"
            className="w-6 h-6 group-hover:text-gray-900 dark:group-hover:text-white dark:hover:drop-shadow-[0_0_0.5rem_#ffffff70]"
          >
            <path d={props.svgIcon} />
          </svg>
          <span>{props.title}</span>
        </Link>
      </li>
    </>
  );
};

export default MenuLink;
