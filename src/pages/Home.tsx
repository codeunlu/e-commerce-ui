import { Sidebar, Rightbar } from "@layouts/index";

const Home = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-around gap-2">
        <Sidebar />
        demo demo
        <Rightbar />
      </div>
    </div>
  );
};

export default Home;
