import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-sm text-center space-y-6">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
          <svg
            className="w-8 h-8 text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h1 className="text-2xl font-semibold text-gray-900">Thank You</h1>
        <p className="text-gray-600">
          Your information was submitted to our team of immigration attorneys.
          Expect an email from hello@tryalma.ai.
        </p>
        <Link
          href="/"
          className="inline-block w-full py-3 px-4 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
        >
          Go Back to Homepage
        </Link>
      </div>
    </div>
  );
}
