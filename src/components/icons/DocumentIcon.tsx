export function DocumentIcon({ className = "w-6 h-6" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19 5V19H5V5H19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3Z"
        fill="currentColor"
      />
      <path
        d="M14 17H7V15H14V17ZM17 13H7V11H17V13ZM17 9H7V7H17V9Z"
        fill="currentColor"
      />
    </svg>
  );
}
