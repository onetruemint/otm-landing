import SectionContainer from "./SectionContainer";

export default function Hero() {
  return (
    <SectionContainer centered py="py-20">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
        Welcome to{" "}
        <span className="text-mint">One True Mint</span>
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
        Discover and explore our curated collection of projects. From concept to
        creation, we bring ideas to life.
      </p>
    </SectionContainer>
  );
}
