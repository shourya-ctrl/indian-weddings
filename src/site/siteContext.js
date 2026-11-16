// Shared site state (session, Ask Noor, account prompt), provided by SiteShell.
// Kept in its own module so the context object stays stable across edits.
import { createContext, useContext } from 'react';

export const SiteContext = createContext(null);
export const useSite = () => useContext(SiteContext);

// Compare holds up to three, as in the couples app ("Three is the most that reads on one screen").
export const COMPARE_MAX = 3;
