// ./jest/helper.jsx
import React from 'react';
import {render as rtlRender} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import defaultStore from '../src/store';

// Overriding the render method
function render(ui, {store = defaultStore, renderOptions} = {}) {
  function Wrapper({children}) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, {wrapper: Wrapper, ...renderOptions});
}

// re-export everything
export * from '@testing-library/react-native';
// override render method
export {render};
