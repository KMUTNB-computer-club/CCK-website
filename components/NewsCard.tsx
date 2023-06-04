import Link from "next/link";

interface NewsCardProps {
  imageSrc: string;
  timeago: string;
  title: string;
  subtitle: string;
  url: string;
}

const NewsCard: React.FC<NewsCardProps> = ({
  imageSrc,
  timeago,
  title,
  subtitle,
  url,
}) => {
  return (
    <Link href={`/News/${url}`} className="w-full h-min">
      <div className="relative h-60 bg-gradient-to-r from-purple-500 to-indigo-500 mb-2.5">
        <div className="absolute bottom-0 right-0 bg-white text-black text-xs px-2 py-1 rounded-tl-lg">
          99 ชั่วโมงที่แล้ว
        </div>
      </div>
      <div className="h-2/5 text-black dark:text-white">
        <h5 className="block font-bold text-base mb-1 w-full">{`${title}`}</h5>
        <h5 className="block font-normal text-xs w-full">
          {`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus aliquam alias eos cupiditate, placeat rem et neque consequatur est quia, magnam ducimus explicabo facilis.`.substring(0, 100)}...
        </h5>
      </div>
    </Link>
  );
};

export default NewsCard;
