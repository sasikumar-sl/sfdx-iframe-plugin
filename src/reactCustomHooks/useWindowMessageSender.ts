import { useState } from 'react';
import { TMethodName } from '../common';

export function useWindowMessageSender<TSenderData>() {
  const [sentData, setSentValue] = useState({});

  const handleSendClick = (payload: TSenderData & TMethodName) => {
    window.parent.postMessage(payload, '*');
    setSentValue((data) => ({
      ...data,
      [payload?.methodName ?? Date.now().toString()]: payload?.data,
    }));
    // eslint-disable-next-line no-console
    console.log(
      '############## --> data to parent',
      JSON.stringify(payload),
      '  ###### ',
      JSON.stringify(sentData),
    );
  };

  return {
    sentData,
    handleSendClick,
  };
}
