import React, { useState, useEffect, useRef } from 'react';
import { JSONTree } from 'react-json-tree';
import { TreeContainer, InputWrapper } from './Tree.styles';

const theme = {
  scheme: 'monokai',
  author: 'wimer hazenberg (http://www.monokai.nl)',
  base00: '#272822',
  base01: '#383830',
  base02: '#49483e',
  base03: '#75715e',
  base04: '#a59f85',
  base05: '#f8f8f2',
  base06: '#f5f4f1',
  base07: '#f9f8f5',
  base08: '#f92672',
  base09: '#fd971f',
  base0A: '#f4bf75',
  base0B: '#a6e22e',
  base0C: '#a1efe4',
  base0D: '#66d9ef',
  base0E: '#ae81ff',
  base0F: '#cc6633',
};

function Tree() {
  const [inputValue, setInputValue] = useState('');
  const [message, setMessage] = useState({});
  const inputRef = useRef(null);

  const handleSendClick = () => {
    // You can handle sending the input value here, for example, by logging it to the console.
    console.log('Input Value:', inputValue);

    window.parent.postMessage(
      {
        methodName: 'button-click',
        data: inputValue,
      },
      '*',
    );
    setInputValue('');
  };

  useEffect(() => {
    const handler = (
      ev: MessageEvent<{ methodName: string; data: string }>,
    ) => {
      console.log('============ ev: ', ev.data);
      if (typeof ev.data !== 'object') return;
      if (!ev.data?.methodName) return;

      setMessage((value) => ({
        ...value,
        [ev.data?.methodName]: ev.data?.data,
      }));
    };

    window.addEventListener('message', handler);

    // Don't forget to remove addEventListener
    return () => window.removeEventListener('message', handler);
  }, []);

  return (
    <TreeContainer>
      <InputWrapper>
        <input
          type="text"
          placeholder="Type something..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          ref={inputRef}
        />
        <button type="button" onClick={handleSendClick}>
          Send
        </button>
      </InputWrapper>
      <JSONTree data={message} theme={theme} />
    </TreeContainer>
  );
}

export default Tree;
