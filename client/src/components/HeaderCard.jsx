export function HeaderCard({logo, text}) {
  return (
    <div className="flex items-center gap-1 hover:text-black duration-150">
      {logo}
      <div>{text}</div>
    </div>
  );
}
