import { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { DEFAULT_STYLES } from 'styles';
import { ColumnFlex } from './ColumnFlex';
import { ColumnFlexProps, PortalId } from 'models';

interface Props extends ColumnFlexProps {
  show?: boolean;
  onClose?: () => void;
}

export const SharedPortal = ({ children, show, onClose, ...r }: Props) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const html = document.querySelector('html') as HTMLElement;
    ref.current = document.querySelector<HTMLDivElement>('#portal');

    if (ref.current && ref.current.children.length > 0) {
      html.style.height = '100%';
      html.style.overflowY = 'hidden';
    } else {
      html.style.height = 'auto';
      html.style.overflowY = 'auto';
    }
  }, [show]);

  return show && ref.current
    ? createPortal(
        <ColumnFlex
          width={DEFAULT_STYLES.fullWidth}
          height={DEFAULT_STYLES.fullWidth}
          overflow='hidden'
          position='fixed'
          left={0}
          top={0}
          id={PortalId.id}
          onClick={(e: any) => {
            if (e.target.id !== PortalId.id) return;
            onClose?.();
            
          }}
          bgColor='rgba(18, 19, 26, 0.8)'
          zIndex={r.zIndex ?? 12}
          transition={DEFAULT_STYLES.transition}
          {...r}
        >
          {children}
        </ColumnFlex>,
        ref.current
      )
    : null;
};
