import React, { createElement } from 'react';
import { useTranslation } from 'react-i18next';

function KeyToElement({ key }: { key: string }) {
  return createElement(key, null)
}

export default KeyToElement;
