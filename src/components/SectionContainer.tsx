export default function SectionContainer({
  children,
  className = "",
  centered = false,
  py = "py-12",
}: {
  children: React.ReactNode;
  className?: string;
  centered?: boolean;
  py?: string;
}) {
  return (
    <section
      className={`mx-auto max-w-7xl px-6 ${py} ${centered ? "text-center" : ""} ${className}`.trim()}
    >
      {children}
    </section>
  );
}
