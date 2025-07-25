
import { useEffect } from 'react';
import { updateGate } from './session_tracker';

export const useAutoSaveGate = (gateNumber, gateData) => {
  useEffect(() => {
    if (gateData) {
      updateGate(gateNumber, gateData);
      console.log(`AutoSaved Gate ${gateNumber}`);
    }
  }, [gateNumber, gateData]);
};
