import { useEffect, useState } from 'react';
import { TMethodName } from '../common';

export function useWindowMessageListener<TReceivedData, TSetData>() {
  const [receivedData, setReceivedData] = useState<TSetData>({} as TSetData);

  useEffect(() => {
    const handler = (event: MessageEvent<TReceivedData & TMethodName>) => {
      // eslint-disable-next-line no-console
      console.log('############## <-- data from parent triggered');
      if (typeof event.data !== 'object') return;
      if (!event.data?.methodName) return;
      setReceivedData(event?.data?.data as TSetData);
    };

    window.addEventListener('message', handler);

    return () => window.removeEventListener('message', handler);
  }, [receivedData]);

  return { receivedData };
}
