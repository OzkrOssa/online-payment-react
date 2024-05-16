import React from "react";
import PayU from "./payu";
import { useSmartISPStore } from "@/store/smartisp-store";

export default function PayMethods() {
    const invoice = useSmartISPStore((state)=> state.invoice)
    const isDisabled = invoice?.id === 0;
  return (
    <React.Fragment>
      <p className="mb-10 text-xl font-medium">Métodos de pago</p>
      <div className="flex justify-center items-center">
        {/* PayU Component */}
        <PayU isDisabled={isDisabled}/>
      </div>
    </React.Fragment>
  );
}
