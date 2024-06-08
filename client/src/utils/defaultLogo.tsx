export default function defaultLogo(logoUrl: string | undefined, name: string) {
  if (logoUrl) return <img alt="logo" src={logoUrl} width="35" height="35" />;
  const color =
    '#' + (((1 << 24) * Math.random()) | 0).toString(16).padStart(6, '0');
  return (
    <div
      className=" w-[35px] h-[35px] flex items-center justify-center rounded-full"
      style={{ backgroundColor: color, color: calculateFontColor(color) }}
    >
      <span>{name[0]}</span>
    </div>
  );
}

const calculateFontColor = (color: string) => {
  const r = parseInt(color.substring(1, 3), 16);
  const g = parseInt(color.substring(3, 5), 16);
  const b = parseInt(color.substring(5, 7), 16);
  return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? '#000000' : '#ffffff';
};
