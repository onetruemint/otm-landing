export default function Footer() {
  return (
    <footer className="border-t border-gray-800 mt-16">
      <div className="mx-auto max-w-7xl px-6 py-8 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} One True Mint. All rights reserved.
      </div>
    </footer>
  );
}
