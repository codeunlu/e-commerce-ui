import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiFacebookFill,
  RiInstagramFill,
} from "react-icons/ri";

const icons = [
  {
    path: "/",
    name: <RiYoutubeFill className="h-8 w-8" />,
  },
  {
    path: "/",
    name: <RiLinkedinFill className="h-8 w-8" />,
  },
  {
    path: "/",
    name: <RiFacebookFill className="h-8 w-8" />,
  },
  {
    path: "/",
    name: <RiInstagramFill className="h-8 w-8" />,
  },
];

const SocialMedia = () => {
  return (
    <div className="flex gap-3 justify-center items-center">
      {icons.map((icon, index) => {
        return (
          <a href={icon.path} key={index}>
            <div>{icon.name}</div>
          </a>
        );
      })}
    </div>
  );
};

export default SocialMedia;
