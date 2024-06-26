import Laptop from "@/assets/images/laptop.png";
import { TabsComponent } from "@/components/tabs/tabs-component";

function App() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen font-[Poppins]">
    <div className="flex flex-row w-full justify-between relative">
      <div className="w-full md:w-1/2 flex flex-col items-center p-4">
        {/* Title */}
        <div className="font-semibold text-3xl md:text-6xl lg:text-6xl xl:text-8xl xl:text-left text-center p-10">
          ¡Paga tu factura Red Planet fácil y rápido!
        </div>
        {/* Tabs */}
        <TabsComponent />
      </div>
      <div className="hidden md:block absolute inset-0 items-center justify-center md:static md:w-1/2">
        <img src={Laptop} alt="laptop" width={700} height={500} />
      </div>
    </div>
  </main>
  );
}

export default App;
