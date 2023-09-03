import Hero from "@/components/hero";
import Nav from "@/components/layouts/nav";
import What from "@/components/what";

const Home = () => {
  return (
    <>
      <Nav />
      <main className="flex flex-col gap-2">
        <Hero />
        <What />
      </main>
    </>
  );
};

export default Home;
