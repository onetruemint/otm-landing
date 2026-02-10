export default function MaxWidthContainer({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto max-w-7xl px-6 ${className}`.trim()}>
      {children}
    </div>
  );
}
