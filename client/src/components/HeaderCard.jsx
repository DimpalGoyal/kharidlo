export function HeaderCard({logo, text}) {
  return (
    <div className="flex items-center gap-1">
      {logo}
      <div>{text}</div>
    </div>
  );
}
