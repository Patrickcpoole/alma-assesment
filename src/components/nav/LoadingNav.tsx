export default function LoadingNav() {
  return (
    <nav className="bg-background ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}

          <span className="text-4xl font-bold">almă</span>

          {/* Navigation Items */}
          <div className="flex space-x-4">
            {/* Loading button placeholders */}
            <div className="h-9 w-20 bg-foreground/10 rounded-md animate-pulse"></div>
            <div className="h-9 w-20 bg-foreground/10 rounded-md animate-pulse"></div>
          </div>
        </div>
      </div>
    </nav>
  );
}
