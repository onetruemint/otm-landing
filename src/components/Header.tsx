import MaxWidthContainer from "./MaxWidthContainer";

export default function Header() {
  return (
    <header className="border-b border-gray-800">
      <MaxWidthContainer className="py-4 flex items-center">
        <span className="text-xl font-bold tracking-tight text-mint">
          One True Mint
        </span>
      </MaxWidthContainer>
    </header>
  );
}
