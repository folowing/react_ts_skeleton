import React, { FC, useCallback } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import { textState } from '../../../../state/atoms';
import { charCountState } from '../../../../state/selectors';

export const CharacterCounter: FC = () => {
  return (
    <div>
      <TextInput />
      <CharacterCount />
    </div>
  );
};

const TextInput: FC = () => {
  const [text, setText] = useRecoilState(textState);

  const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  }, []);

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo: {text}
    </div>
  );
};

const CharacterCount: FC = () => {
  const count = useRecoilValue(charCountState);
  return <>Character Count: {count}</>;
};
