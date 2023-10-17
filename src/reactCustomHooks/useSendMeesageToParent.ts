import { useEffect } from 'react';

/**
 * Custom hook to send a message to the parent window.
 * @param {Object} payload - The payload to send as a message.
 * @param {string} targetOrigin - The target origin of the parent window.
 */
export function useSendMessageToParent<TPayload>(
  payload: TPayload,
  targetOrigin = '*',
) {
  useEffect(() => {
    function handler() {
      window.parent.postMessage(payload, targetOrigin);
    }

    handler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
