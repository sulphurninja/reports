import React, { useState } from 'react';
import Link from 'next/link';
import QRCode from 'qrcode';
const Header = () => {
  const [url, setUrl] = useState('')
  const [qrcode, setQrcode] = useState('')
  const GenerateQRCode = () =>{
      QRCode.toDataURL(url,{version:10},(err, url)=>{
          if(err) return console.error(err)
          console.log(url)
          setQrcode(url)
      })
  }
  return (
    <div className='mt-[0px] fixed '>
    <header className="mx-auto flex fixed max-w-7xl justify-between p-5 bg-[#FFF4E0]">
      <div className="  ">
        <Link href="/">
          <img src='/icmr_logo.png' className='h-28 w-76' />
        </Link>
      </div>
      <h1 className='text-[#119AC5] fixed flex items-center font-bold  ml-[510px] mt-[30px] text-3xl font-Roboto '>Covid-19 Test Report
        </h1>
      <div className="h-[100px]  fixed w-[100px] ml-[900px]  bg-white">
        <div className='items-center '>
          <img src={qrcode} />
        </div>
      </div>
    </header>


</div>
        
    

  );
};

export default Header;