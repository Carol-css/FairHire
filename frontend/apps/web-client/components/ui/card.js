export function Card({ children, className = '' }) {
  return (
    <div className={`rounded-xl border border-gray-600 bg-gray-900 p-4 ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ children }) {
  return (
    <div className="text-white">
      {children}
    </div>
  );
}
