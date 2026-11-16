import { useEffect } from 'react';

/** Sets the document title for a destination page. */
export function usePageTitle(title) {
  useEffect(() => { document.title = title ? `${title} · IndianWeddings` : 'IndianWeddings'; }, [title]);
}
