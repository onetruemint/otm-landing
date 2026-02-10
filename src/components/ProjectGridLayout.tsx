export default function ProjectGridLayout({
  children,
  columns = 3,
}: {
  children: React.ReactNode;
  columns?: 1 | 3;
}) {
  return (
    <div
      className={`grid gap-6 ${columns === 3 ? "sm:grid-cols-2 lg:grid-cols-3" : ""}`}
    >
      {children}
    </div>
  );
}
