
import { startNewSession } from './session_tracker';

export const initializeSomaSession = (word, category) => {
  startNewSession(word, category);
  console.log("New SomaSpell session initialized:", word, category);
};
