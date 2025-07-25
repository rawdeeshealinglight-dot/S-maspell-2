
import { updateGate, finalizeSession, saveToLocalStorage } from './session_tracker';

export const handleGateCompletion = (gateNumber, gateData) => {
  updateGate(gateNumber, gateData);
  console.log(`Gate ${gateNumber} updated.`);
};

export const completeSomaSession = () => {
  finalizeSession();
  saveToLocalStorage();
  console.log("SomaSpell session finalized and saved.");
};
