import { SmartISPInvoice, SmartISPSubscriber } from "@/types/smartisp"
import { create } from "zustand"

type SmartISPStore = {
    subscriber: SmartISPSubscriber | null
    setSubscriber: (subscriber: SmartISPSubscriber | null) => void
    invoice: SmartISPInvoice | null
    setInvoice: (invoice: SmartISPInvoice | null) => void
    fetchSubscriberByDni: (dni: string) => Promise<void>
}

export const useSmartISPStore = create<SmartISPStore>((set) => ({
    subscriber: null,
    setSubscriber: (subscriber) => set({ subscriber }),
    invoice: null,
    setInvoice: (invoice) => set({ invoice }),
    fetchSubscriberByDni: async (dni: string) => {
        const url = `http://194.140.197.189/api/SmartIPS-v1/get-user/${dni}`;
        try {
          const response = await fetch(url, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
          });
          if (!response.ok) {
            throw new Error(`Error fetching subscriber: ${response.statusText}`);
          }
          const fetchedSubscriber: SmartISPSubscriber = await response.json();
          set({ subscriber: fetchedSubscriber });
        } catch (error) {
          console.error('Fetch error:', error);
        }
      },
  }));