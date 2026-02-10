export default function SectionHeading({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h2 className="text-2xl font-bold tracking-tight text-gray-100 mb-8">
      {children}
    </h2>
  );
}
