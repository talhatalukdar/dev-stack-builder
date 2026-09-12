import logoDevStack from "../assets/logo-devstack.png";

export default function Logo({ size = "md" }) {
  const height = size === "sm" ? "h-6" : "h-7";

  return (
    <img
      src={logoDevStack}
      alt="Dev Stack"
      className={`${height} w-auto`}
      width={139}
      height={36}
    />
  );
}