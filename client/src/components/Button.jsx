export function Button({ text, onclick, style}) {
  const normal = "bg-white text-black px-2 rounded-xl shadow-2xs pb-1 shadow-black font-medium hover:bg-gray-300 duration-200" 
  const primary = ""
  const secondary = ""
  return <button onclick={onclick}
    className={style == "primary" ? normal + primary : normal + secondary}
  >{text}</button>;
}
