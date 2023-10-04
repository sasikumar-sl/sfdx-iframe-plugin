import { useEffect, useState } from 'react';
import { TMethodName } from '../common';
import { GET_SESSION_DETAILS } from '../common/constants';

export function useWindowMessageListener<TReceivedData, TSetData>() {
  const [receivedData, setReceivedData] = useState<TSetData>({} as TSetData);

  useEffect(() => {
    const handler = (event: MessageEvent<TReceivedData & TMethodName>) => {
      // eslint-disable-next-line no-console
      // console.log('############## <-- data from parent triggered');
      if (typeof event.data !== 'object') return;
      if (!event.data?.methodName) return;
      if (event.data.methodName === GET_SESSION_DETAILS) {
        // eslint-disable-next-line no-console
        console.log(
          '############## <-- data from parent GET_SESSION_DETAILS: ',
          event?.data?.data,
        );
        setReceivedData(event?.data?.data as TSetData);
      }
    };

    window.addEventListener('message', handler);

    return () => window.removeEventListener('message', handler);
  }, [receivedData]);

  return { receivedData };
}
