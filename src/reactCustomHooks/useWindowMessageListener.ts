import { useEffect, useState } from 'react';
import { TMethodName } from '@/common';

export function useWindowMessageListener<TReceivedData>() {
  const [receivedData, setReceivedData] = useState({});

  useEffect(() => {
    const handler = (event: MessageEvent<TReceivedData & TMethodName>) => {
      if (typeof event.data !== 'object') return;
      if (!event.data?.methodName) return;
      setReceivedData((data) => ({
        ...data,
        [event?.data?.methodName ?? Date.now().toString()]: event?.data,
      }));
      // eslint-disable-next-line no-console
      console.log(
        '############## <-- data from parent',
        JSON.stringify(event?.data),
        ' ########',
        JSON.stringify(receivedData),
      );
    };

    window.addEventListener('message', handler);

    return () => window.removeEventListener('message', handler);
  }, [receivedData]);

  return { receivedData };
}
