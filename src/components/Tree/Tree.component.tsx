import React, { useState, useRef } from 'react';
import { JSONTree } from 'react-json-tree';
import { TreeContainer, InputWrapper } from './Tree.styles';
import { useWindowMessageListener } from '../../reactCustomHooks/useWindowMessageListener';
import { useWindowMessageSender } from '../../reactCustomHooks/useWindowMessageSender';
import { TData } from '../../common';

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

export default function Tree() {
  const [value, setValue] = useState('');
  const inputRef = useRef(null);

  const { receivedData } = useWindowMessageListener<TData, unknown>();

  const { handleSendClick } = useWindowMessageSender<{
    data: unknown;
  }>();

  const handleOnClick = () => {
    const payload = {
      methodName: 'button-click',
      data: value,
    };
    handleSendClick(payload);
    setValue('');
  };

  return (
    <TreeContainer>
      <InputWrapper>
        <input
          type="text"
          placeholder="Type something..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          ref={inputRef}
        />
        <button type="button" onClick={handleOnClick}>
          Send
        </button>
      </InputWrapper>
      <JSONTree data={receivedData} theme={theme} />
    </TreeContainer>
  );
}
