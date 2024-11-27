import Image from 'next/image';
import React from 'react';
import img1 from '../../../public/images/under-constractions.png';
import { Button } from '../../components/ui/button';
import Link from 'next/link';
const page = () => {
  return (
    <div className="flex justify-center items-center flex-col h-screen">
      <Image src={img1} alt="Under Constructions" width={450} height={220} />
      <h1 className="text-[40px] ">Under Construction</h1>
      <p className="text-slate-500">We will continue to serve very soon</p>
      <div className="gap-4 flex m-5">
        <Link href="/">
          <Button variant="default">Home Page</Button>
        </Link>
        <Button variant="outline">Back</Button>
      </div>
    </div>
  );
};

export default page;
