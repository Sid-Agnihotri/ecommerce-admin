import React from 'react';
import { auth } from '@clerk/nextjs/server';
import { useRouter } from 'next/router';
import prismadb from '@/lib/prismadb';
import { redirect } from 'next/navigation';

const Layout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { storeId: number };
}) => {
  const router = useRouter();
  const { userId } = auth();
  if (!userId) {
    redirect('/sign-in');
    return null;
  }
  const store = await prismadb.store.findFirst({
    where: { id: params.storeId, userId },
  });
  if (!store) {
    redirect('/');
  }

  return (
    <>
      <div>this will be a navbar</div>
      {children}
    </>
  );
};
export default Layout;
