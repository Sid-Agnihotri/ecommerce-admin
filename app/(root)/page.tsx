'use client';

import { useStoreModal } from '@/hooks/useStoreModal';
import { useEffect } from 'react';

interface SetupPageProps {
  onClose: () => void;
}

const SetupPage = ({ onClose }: SetupPageProps) => {
  const { isOpen, onOpen } = useStoreModal();
  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);

  return <div className="p-4">Root Page</div>;
};

export default SetupPage;
