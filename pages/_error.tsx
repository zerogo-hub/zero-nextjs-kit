import { useRouter } from 'next/router';
import React from 'react';
import Meta from '../components/meta';


const Error = () => {
  const router = useRouter();

  return (
    <>
      <Meta title="Server error" keywords="" description="" />
      <div className="flex flex-col items-center mt-12 md:mt-24 min-h-screen py-2">
        <div>Server error</div>
        <div className="mt-4">
          <span className="underline cursor-pointer" onClick={() => router.push('/')}>
            Back to home page
          </span>
        </div>
      </div>
    </>
  );
};

export default Error;
