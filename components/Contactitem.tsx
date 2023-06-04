interface ContactProps {
  svgIcon: string;
  data: string;
  link: string;
}

const Contactitem = (props: ContactProps) => {
  return (
    <>
      <a href={props.link} className="flex items-center space-x-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="currentColor"
          className="w-10 h-10 text-gray-900 dark:text-white"
        >
          <path d={props.svgIcon} />
        </svg>
        <p className="">{props.data}</p>
      </a>
    </>
  );
};

export default Contactitem;
