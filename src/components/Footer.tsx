import MaxWidthContainer from "./MaxWidthContainer";

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 mt-16">
      <MaxWidthContainer className="py-8 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} One True Mint. All rights reserved.
      </MaxWidthContainer>
    </footer>
  );
}
