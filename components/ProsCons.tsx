interface ProsConsProps {
  pros: string[];
  cons: string[];
}

export function ProsCons({ pros, cons }: ProsConsProps) {
  return (
    <div className="grid md:grid-cols-2 gap-6 my-8">
      <div className="bg-green-50 rounded-xl p-6 border border-green-100">
        <h3 className="flex items-center gap-2 text-lg font-semibold text-green-800 mb-4">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          Pros
        </h3>
        <ul className="space-y-2">
          {pros.map((pro, index) => (
            <li key={index} className="flex items-start gap-2 text-gray-700">
              <span className="text-green-500 mt-1 flex-shrink-0">+</span>
              <span>{pro}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-red-50 rounded-xl p-6 border border-red-100">
        <h3 className="flex items-center gap-2 text-lg font-semibold text-red-800 mb-4">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
          </svg>
          Cons
        </h3>
        <ul className="space-y-2">
          {cons.map((con, index) => (
            <li key={index} className="flex items-start gap-2 text-gray-700">
              <span className="text-red-500 mt-1 flex-shrink-0">−</span>
              <span>{con}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
