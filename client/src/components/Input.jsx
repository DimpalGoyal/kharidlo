export function Input({ placeholder }) {
  return (
    <input
      type="text"
      className="bg-white text-black shadow-black shadow-xs px-2 rounded-xl focus:outline-none"
      placeholder={placeholder}
    />
  );
}
