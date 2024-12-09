import React from 'react';

export default function Spinner() {

  return (
    <button type="button" class="bg-indigo-500 ..." disabled>
      <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
      </svg>
      Processing...
    </button>
  );


  // return (
  //   <div className='w-full h-full flex items-center justify-center'>
  //   <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
  //   <span
  //     className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
  //   >Loading...</span>
  // </div>
  // </div>
  // );
}
