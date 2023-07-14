import { UserType } from 'models';
import { useState } from 'react';
import { useIsomorphicLayoutEffect } from './useIsoMorphicLayoutEffect';
import { getCookies } from 'cookies-next';

export const useType = () => {
  const [isBrand, setIsBrand] = useState(false);

  const type = getCookies().type;
  useIsomorphicLayoutEffect(() => {
    setIsBrand(type === UserType.Brand);
  }, [type]);

  return isBrand;
};
