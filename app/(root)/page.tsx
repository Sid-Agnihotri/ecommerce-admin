'use client';

import { useStoreModal } from '@/hooks/useStoreModal';
import { useEffect } from 'react';

interface SetupPageProps {
  onClose: () => void;
}

const SetupPage = ({ onClose }: SetupPageProps) => {
  const isOpen = useStoreModal((state) => state.isOpen);
  const onOpen = useStoreModal((state) => state.onOpen);
  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);

  return <div className="p-4">RootPage</div>;
};

export default SetupPage;
