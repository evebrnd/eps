export default function CourseLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
          <div className="pt-20 min-h-screen">
            {children}
          </div>
    );
  }