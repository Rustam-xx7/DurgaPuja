import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center glass-panel">
      <h2 className="text-3xl font-serif font-bold text-sholapith mb-2">404 - Page Not Found</h2>
      <p className="text-sm text-sholapith-muted mb-6">
        The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="px-6 py-2.5 rounded-full bg-sindoor hover:bg-sindoor-dark text-white font-medium text-xs transition-all shadow-lg"
      >
        Return to Home
      </Link>
    </div>
  );
}
