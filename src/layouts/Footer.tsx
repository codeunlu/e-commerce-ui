import Logo from "@components/Logo";
import SocialMedia from "@components/SocialMedia";

const Footer = () => {
  return (
    <div className="h-20 w-full bg-primary flex items-center ">
      <div className="mx-auto container flex justify-between">
        <div>
          <Logo />
        </div>
        <div className="flex gap-6 text-white">
          <SocialMedia />
        </div>
      </div>
    </div>
  );
};

export default Footer;
