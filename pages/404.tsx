import { useRouter } from 'next/router';
import React from 'react';
import Meta from '../components/meta';


const Page404 = () => {
  const router = useRouter();

  return (
    <>
      <Meta title="Page Not Found" keywords="" description="" />
      <div className="flex flex-col items-center mt-12 md:mt-24 min-h-screen py-2">
        <div>Page Not Found</div>
        <div className="mt-4">
          <span className="underline cursor-pointer" onClick={() => router.back()}>
            Back
          </span>
        </div>
      </div>
    </>
  );
};

export default Page404;
