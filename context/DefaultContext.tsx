'use client';
import { useType, useIsomorphicLayoutEffect } from 'hooks';
import { LayoutProps } from 'models';
import { usePathname } from 'next/navigation';
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

interface DefaultContextProps {
  mediaQuery: boolean;
  showAvatar: boolean;
  isNew: boolean;
  isBrand?: boolean;
  updateDefaultProps: (b: boolean, type: ToUpdate) => void;
}

type ToUpdate = 'media' | 'new' | 'avatar';

const DefaultContext = createContext<DefaultContextProps>({
  mediaQuery: false,
  showAvatar: true,
  isNew: false,
  updateDefaultProps: () => {},
});

export const DefaultContextProvider = ({ children }: LayoutProps) => {
  const [mediaQuery, setMediaQuery] = useState(false);
  const [showAvatar, setShowAvatar] = useState(true);
  const [isNew, setIsNew] = useState(false);
  const pathname = usePathname();
  const isBrand = useType();

  const updateDefaultProps = useCallback((b: boolean, type: ToUpdate) => {
    switch (type) {
      case 'avatar':
        setShowAvatar(b);
        break;
      case 'media':
        setMediaQuery(b);
        break;
      case 'new':
        setIsNew(b);
        break;
    }
  }, []);

  useIsomorphicLayoutEffect(() => {
    if (isNew) {
      setShowAvatar(false);
    }

    return () => {
      setShowAvatar(true);
    };
  }, [isNew]);

  useEffect(() => {
    updateDefaultProps(false, 'media');
  }, [pathname, updateDefaultProps]);

  return (
    <DefaultContext.Provider
      value={{ mediaQuery, updateDefaultProps, showAvatar, isNew, isBrand }}
    >
      {children}
    </DefaultContext.Provider>
  );
};

export function useDefaultContext() {
  return useContext(DefaultContext);
}
