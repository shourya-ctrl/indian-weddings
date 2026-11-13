// The contextual account prompt shown when a visitor tries an action that needs
// an account. It names the action, keeps the intent (see intent.js) and links to
// the shared account screens.
import { INTENT_COPY, intentTitle } from './intent';
import { useDialog } from './useDialog';

export default function AccountPrompt({ request, onClose }) {
  const open = Boolean(request);
  const ref = useDialog(open, onClose);
  if (!open) return null;
  const { intent, details, links } = request;
  const copy = INTENT_COPY[intent] || {};
  return (
    <div className="iws-overlay" onMouseDown={e => { if (e.target === e.currentTarget) onClose(); }}>
      <div ref={ref} className="iws-prompt" role="dialog" aria-modal="true" aria-labelledby="iws-prompt-h" aria-describedby="iws-prompt-b">
        <h2 id="iws-prompt-h">{intentTitle(intent, details)}</h2>
        <p id="iws-prompt-b">{copy.body}</p>
        <div className="iws-prompt-actions">
          <a className="iws-btn iws-btn-primary" href={links.create} data-autofocus="">Create an account</a>
          <a className="iws-btn iws-btn-ghost" href={links.login}>Log in</a>
        </div>
        <button type="button" className="iws-prompt-later" onClick={onClose}>Not now</button>
      </div>
    </div>
  );
}
