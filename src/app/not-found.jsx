'use client';

import Link from 'next/link';
import React from 'react';

const Page = () => {
  return (
    <div>
      <main class="h-screen w-full flex flex-col justify-center items-center bg-slate-950">
        <h1 class="text-9xl font-extrabold text-color-primary tracking-widest">404</h1>
        <div class="bg-purple-600 px-2 text-sm rounded rotate-12 absolute">Page Not Found</div>
        <button class="mt-5">
          <a class="relative inline-block text-sm font-medium text-purple-600 group active:text-orange-500 focus:outline-none focus:ring">
            <span class="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-purple-600 group-hover:translate-y-0 group-hover:translate-x-0"></span>

            <span class="relative block px-8 py-3 bg-slate-950 border border-current">
              <Link href="/">Kembali</Link>
            </span>
          </a>
        </button>
      </main>
    </div>
  );
};

export default Page;