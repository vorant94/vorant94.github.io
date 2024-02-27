import { Button } from '@/components/Button';
import { Icon } from '@/components/Icon';
import { cn } from '@/shared/react.helpers';
import { theme } from '@/shared/tailwind.helpers';
import { AnimatePresence, motion } from 'framer-motion';
import {
  useEffect,
  useState,
  type Dispatch,
  type FunctionComponent,
  type PropsWithChildren,
  type SetStateAction,
} from 'react';
import { Header } from './Header';

export const Modal: FunctionComponent<PropsWithChildren<ModalProps>> =
  function ({ children, isOpen, onCloseClick }) {
    return (
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="modal"
            initial={{ y: '-100%' }}
            animate={{ y: '0' }}
            // for some reason works only with y, translateY on exit specifically causes loss of animation
            exit={{ y: '-100%' }}
            transition={{ duration: 0.3 }}
            className={cn(
              'fixed top-0 left-0 w-dvw h-dvh backdrop-filter backdrop-blur z-10',
            )}>
            <div className={cn(theme.fullWidth, 'flex flex-col h-full')}>
              <Header>
                <Button
                  aria-label="modal-close"
                  onClick={onCloseClick}>
                  <Icon glyph="close" />
                </Button>
              </Header>

              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  };

export function useIsModalOpen(): [boolean, Dispatch<SetStateAction<boolean>>] {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? 'hidden' : 'unset';
  }, [isModalOpen]);

  return [isModalOpen, setIsModalOpen];
}

export interface ModalProps {
  isOpen: boolean;
  onCloseClick(): void;
}
