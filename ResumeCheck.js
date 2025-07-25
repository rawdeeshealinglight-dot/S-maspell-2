
import { loadFromLocalStorage } from './archive_engine';

export const checkForSavedSession = (word) => {
  const saved = loadFromLocalStorage(word);
  if (saved && !saved.complete) {
    return saved;
  }
  return null;
};
