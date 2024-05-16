import redplanetLogo from "@/assets/images/logo.png";

export default function Header() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-center md:justify-between lg:justify-between xl:justify-between items-center p-4 bg-white bg-opacity-90 shadow-lg">
      <img src={redplanetLogo} alt="redplanet logo" width={200} height={32} />
    </nav>
  );
}
