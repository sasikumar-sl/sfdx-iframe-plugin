import { useEffect, useState } from 'react';
import { TMethodName } from '../common';
import { GET_SESSION_DETAILS } from '../common/constants';

export function useWindowMessageListener<TReceivedData, TSetData>() {
  const [receivedData, setReceivedData] = useState<TSetData>({} as TSetData);

  useEffect(() => {
    const handler = (event: MessageEvent<TReceivedData & TMethodName>) => {
      if (typeof event.data !== 'object') return;
      if (!event.data?.methodName) return;
      if (event.data.methodName === GET_SESSION_DETAILS) {
        setReceivedData(event?.data?.data as TSetData);
        // eslint-disable-next-line no-console
        console.log('==========:  SF payload: ', event?.data?.data);
      }
    };

    window.addEventListener('message', handler);

    return () => window.removeEventListener('message', handler);
  }, [receivedData]);

  return { receivedData };
}
