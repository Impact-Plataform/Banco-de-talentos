import React from 'react';

import { Waveform } from '@uiball/loaders';

export const Loader = () => {
  return (
    <div className="loader">
      <Waveform size={52} lineWeight={3.5} speed={1} color="#FFE81F" />
    </div>
  );
};
