import React from "react";
import { MD5 } from "crypto-js";
import { SmartISPInvoice } from "@/types/smartisp";

type PayUConfig = {
  apiKey: string;
  merchantID: string;
  accountID: string;
}

export default function usePayU(invoice: SmartISPInvoice | null) {
  const [signature, setSignature] = React.useState("");
  const payUConfig: PayUConfig = {
    apiKey: import.meta.env.VITE_PAYU_API_KEY,
    accountID: import.meta.env.VITE_PAYU_ACCOUNT_ID,
    merchantID: import.meta.env.VITE_PAYU_MERCHANT_ID
  }

  React.useEffect(() => {
    if (invoice) {
      const message = `${payUConfig.apiKey}~${payUConfig.merchantID}~${invoice?.num_bill}~${invoice?.total_pay}~COP`;
      const hash = MD5(message).toString();
      setSignature(hash);
    }
  }, [invoice, payUConfig.apiKey, payUConfig.merchantID]);
  return {
    signature,
    payUConfig
  };
}