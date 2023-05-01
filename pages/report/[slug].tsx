import { GetStaticProps } from 'next';
import React, { useEffect, useState } from 'react'
import QRCode from 'qrcode';
import Header from '../../components/Header'
import { Report } from '../../typings';
import { sanityClient } from '../../sanity';
import Link from 'next/link';
import { stringify } from 'querystring';

interface Props {
  report: Report;
}


const Reportz = ({ report }: Props) => {

  const [qrcode, setQrcode] = useState('')
  const [url, setUrl] = useState('')
  
 
 const GenerateQRCode = () => {
  QRCode.toDataURL(url, {
  }, (err, url) => {
    if (err) return console.error(err)

    console.log(url)
    setQrcode(url)
  })
}
  return (

    <main className=' max-w-2xl   '>
      <div className='mt-[0px] absolute '>
    <header className="mx-auto flex fixed max-w-7xl justify-between p-5 bg-[#FFF4E0]">
      <div className="absolute w-[255px] h-[91px] left-[91px] top-[93px]  "> 
      <Link key={report._id} href={`/linkreport/${report.slug.current}`} >
          <img src='/icmr_logo.png' className='h-[90px] w-[200px]' />
        </Link>
      </div>
      <h1 className='text-[#119AC5] absolute text-3xl font-bold w-[326px] h-[35px] left-[504px] top-[117px]  font-Roboto '>Covid-19 Test Report 
        </h1>
      <div className="h-[112px] w-[111px] left-[1037px] top-[83px] absolute  bg-white">
        <div className='items-center '>
				<img src={qrcode} />
        </div>
      </div>
    </header>


</div>
    
        <div className='w-[1056px] absolute h-[62px] left-[92px] top-[215px] rounded-md bg-[#E9D0A7]'>
          <h1 className='font-Roboto ml-[355px] pt-2  text-[#E09B72] font-bold text-[25px]'>YCM Hospital, Pimpri, Pune</h1>
   
      </div>
      <h1 className='w-[252px] h-[24px] absolute left-[92px] top-[277px] text-2xl font-Roboto font-bold'>Patient Information</h1>
      <hr color='#E4E9F0' className='w-[975px] border-10 border-[#E4E9F0] fixed mt-[300px] ml-[55px]' ></hr>

      <form className="w-[100px] fixed  ">
  <div className=""> {/*akkha div*/}
  <div className=" absolute w-[70px] h-[12px] left-[92px] top-[340px]">{/*patient div*/}
      <h1 className="  font-Roboto font-light ">
        Patient ID
      </h1>
    </div>
    <div className=" "> {/*input dabba*/}
      <input className=" w-[398px]  h-[46px] left-[202px] top-[330px] absolute rounded   py-2 px-8  leading-tight " id="inline-full-name" type="text" value={report.patientid}/>
    </div>
    <div className="md:w-1/3 w-[43px] h-[12px] left-[630px] top-[340px] absolute ">{/* name div*/}
      <label className="block   font-Roboto font-light  md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
      Name:
      </label>
 
    </div>
   
  </div>
  
  <div > {/*akkha div*/}
    <div className="md:w-1/3 top-[416px] absolute left-[92px] h-[15px] w-[29px]">{/*patient div*/}
      <h1 className=" font-Roboto font-light ">
        Age:
      </h1>
    </div>
    <div className="  "> {/*input dabba*/}
      <input className="w-[398px] h-[46px] left-[202px] top-[401px]  absolute rounded  py-2 px-4  leading-tight " type="text" value={report.age}/>
    </div>
    <div className="w-[49px] absolute h-[15px] left-[630px] top-[413px] ">{/*full name div*/}
      <label className=" font-Roboto font-light">
        Gender:
      </label>
    </div>
    <div className=""> {/*input dabba*/}
      <input className="py-2 px-4  leading-tight absolute w-[398px] h-[46px] left-[740px] top-[399px]" id="inline-full-name" type="text" value={report.gender}/>
    </div>
  </div>
  
  <div className="   "> {/*akkha div*/}
    <div className="md:w-1/3 left-[92px] h-[28px] w-[54px] absolute top-[490px]">{/*patient div*/}
      <h1 className="   font-Roboto font-light ">
        Contact<br></br> Number:
      </h1>
    </div>
    <div>
     <input className=" w-[398px] h-[46px] left-[202px] top-[480px] absolute rounded  py-2 px-4  leading-tight " id="inline-full-name" type="text" value={report.contactno}/>
    </div>
    <div className="absolute w-[52px] h-[28px] left-[630px] top-[485px]  ">{/*full name div*/}
      <label className=" font-Roboto font-light ">
        Country of Test:
      </label>
    </div>
    <div className=" "> {/*input dabba*/}
      <input className=" py-2 px-4 rounded  leading-tight w-[398px] h-[46px] left-[742px] top-[476px] absolute" id="inline-full-name" type="text" value={report.country}/>
    </div>
  </div>
  
  <div> {/*akkha div*/}
    <div className="absolute w-[53px] left-[92px] top-[578px]">{/*patient div*/}
      <h1 className="   font-Roboto font-light ">
        Adhaar<br></br> Number:
      </h1>
    </div>
    <div className=" "> {/*input dabba*/}
      <input className="w-[398px] h-[46px] left-[202px] top-[565px] absolute  rounded  py-2 px-4  leading-tight " id="inline-full-name" type="text" value={report.aadhar}/>
    </div>
    <div className="absolute w-[58px] h-[26px] left-[630px] top-[578px]">{/*full name div*/}
      <label className="block  font-Roboto md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
        Passport<br></br> Number:
      </label>
    </div>
    <div className=""> {/*input dabba*/}
      <input className=" rounded w-[398px] absolute top-[563px] left-[741px] h-[46px] py-2 px-4  leading-tight" id="inline-full-name" type="text" value={report.passportno}/>
    </div>
  </div>
  <div className=" "> {/*akkha div*/}
    
    <div className=""> {/*input dabba*/}
      <input className="   h-[46px] left-[742px] top-[324px]  w-[398px] absolute  rounded  py-2 px-4  leading-tight  " id="inline-full-name" type="text" value={report.name}/>
    </div>
  </div>
</form>

{/**ma chudao */}
<h1 className='absolute w-[290px] h-[30px] left-[93px] top-[655px] text-2xl  font-Roboto font-bold'>Specimen Information</h1>
<hr color='#E4E9F0' className='w-[975px] fixed border-10 border-[#E4E9F0] mt-[650px] ml-[55px]' ></hr>

<form className="w-[100px]  fixed ">
  
  <div className=" "> {/*akkha div*/}
   
    <div className="absolute w-[67px] h-[13px] left-[636px] top-[718px]  ">{/*full name div*/}
      <label className="font-Roboto font-light md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
        SRF ID:
      </label>
    </div>
    <div className=""> {/*input dabba*/}
      <input className=" w-[331px]  h-[44px] left-[817px] top-[703px] absolute rounded   py-2 px-8  leading-tight " id="inline-full-name" type="text" value={report.srfid}/>
    </div>
    
    
  </div>
  {/** end of akkha div */}
  <div className="  "> {/*akkha div*/}
    <div className="absolute w-[130px] h-[13px]  left-[93px] top-[770px]  ">{/*patient div*/}
      <h1 className="  font-Roboto font-light ">
      Result of SARS-CoV2:
      </h1>
    </div>
    <div className=""> {/*input dabba*/}
      <input className=" w-[331px]  h-[44px] left-[274px] top-[756px] absolute rounded   py-2 px-8  leading-tight " id="inline-full-name" type="text" value={report.resultofsars}/>
    </div>
    <div className="w-[90px]  h-[16px] left-[636px] top-[770px] absolute  ">{/*full name div*/}
      <label className="font-Roboto font-light md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
        Test Type:
      </label>
    </div>
    <div className=" "> {/*input dabba*/}
      <input className="w-[331px]  h-[44px] left-[817px] top-[755px] absolute rounded   py-2 px-8  leading-tight" type="text" value={report.testtype}/>
    </div>
  </div>
  
  <div className=""> {/*akkha div*/}
    <div className=" w-[95px]  h-[15px] left-[93px] top-[823px] absolute ">{/*patient div*/}
      <h1 className="   font-Roboto font-light ">
     Specimen Type:
      </h1>
    </div>
    <div className=" "> {/*input dabba*/}
      <input className=" absolute w-[331px] h-[44px] left-[274px] top-[809px] rounded py-2 px-8 leading-tight" type="text"  value={report.specimentype}/>
    </div>
    <div className="w-[87px]  h-[15px] left-[636px] top-[823px] absolute ">{/*full name div*/}
      <label className=" font-Roboto font-light md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
      Report ID:

      </label>
    </div>
    <div className=""> {/*input dabba*/}
      <input className="w-[331px]  h-[44px] left-[817px] top-[808px] absolute rounded   py-2 px-8  leading-tight" type="text" value={report.reportid}/>
    </div>
  </div>
  
  <div className="  "> {/*akkha div*/}
    <div className="absolute w-[149px] h-[28px] left-[93px] top-[873px] ">{/*patient div*/}
      <h1 className="   font-Roboto font-light ">
      Date Time of Sample<br></br>
Collection:
      </h1>
    </div>
    <div className=" "> {/*input dabba*/}
      <input className=" absolute w-[331px] h-[44px] left-[274px] top-[858px] rounded py-2 px-8 leading-tight" type='text' value={report.datetimeofcollection}/>
    </div>
    <div className="w-[165px]  h-[28px] left-[636px] top-[873px] absolute ">{/*full name div*/}
      <label className=" font-Roboto  text-start font-light md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
      Date Time of Sample<br></br>
Received at Lab:
      </label>
    </div>
    <div className=""> {/*input dabba*/}
      <input className="w-[331px]  h-[44px] left-[817px] top-[859px] absolute rounded   py-2 px-8  leading-tight" type="text" value={report.datetimeofreceived}/>
    </div>
  </div>
  
  <div className="  "> {/*akkha div*/}
    <div className="absolute w-[149px] h-[30px] left-[93px] top-[939px] ">{/*patient div*/}
      <h1 className="   font-Roboto font-light ">
      Date Time of Sample<br></br>
Testing:

      </h1>
    </div>
    <div className="  "> {/*input dabba*/}
      <input className=" absolute w-[331px] h-[44px] left-[274px] top-[925px] rounded py-2 px-8 leading-tight" type="text" value={report.datetimeofsampletesting}/>
    </div>
    <div className="w-[156px]  h-[30px] left-[636px] top-[939px] absolute ">{/*full name div*/}
      <label className=" font-Roboto  text-start font-light md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
      Date Time of Result<br></br>
Reported:

      </label>
    </div>
    <div className=" "> {/*input dabba*/}
      <input className="w-[331px]  h-[44px] left-[817px] top-[925px] absolute rounded   py-2 px-8  leading-tight" type="text" value={report.datetimeofresultreported}/>
    </div>
  </div>
  <div className="    "> {/*akkha div*/}
    <div className="absolute w-[58px] h-[13px]  left-[93px] top-[718px]">{/*patient div*/}
      <h1 className="  font-Roboto font-light ">
        ICMR ID
      </h1>
    </div>
    <div className=""> {/*input dabba*/}
      <input className=" w-[331px]  rounded h-[44px] left-[274px] top-[703px] absolute py-2 px-4  leading-tight " id="inline-full-name" type="text" value={report.icmrid}/>
    </div>
    <div className="md:w-1/3 fixed mt-[300px] ">{/*full name div*/}
      
    </div>
    
  </div> 
</form>
{/**Sampla Form */}
<h1 className=" w-[181px]  h-[16px] left-[93px] top-[1014px] absolute font-Roboto font-light ">

        Checked and Approved by:
      </h1>
      <p  className='w-[104px]  h-[3px] left-[92px] top-[1075px] absolute ' >--------------</p>
      <div className="w-[133px]  h-[133px] left-[1015px] top-[1016px] absolute bg-white ">
        <div className=''>
          <img src={qrcode} />
        </div>
      </div>
      <h1 className=" w-[97px] text-[13px]  h-[17px] left-[1051px] top-[1150px] absolute   font-Roboto font-light ">

        Scan for e-Verify
      </h1>
      <h1 className=" w-[886px]  h-[21px] left-[177px] top-[1185px] absolute  font-bold  text-[#119AC5]  font-Roboto  ">

        Note:  The results relate only to the specimens tested and should be correlated with clinical findings.

      </h1>
      <h1 className=" w-[226px]  h-[20px] left-[92px] top-[1215px] absolute  font-extrabold text-lg  font-Roboto  ">

      Interpretation guidance:-

</h1>
<div className=" w-[1055px]  h-[153px] left-[93px] top-[1248px] text-[13px] absolute  font-light   font-Roboto  ">
<h1 className='leading-[18px]' >

<span className='font-bold'>1.</span> Testing of referred clinical specimens was considered on the basis of request / referral received from / through State Surveillance Officer (SSO) of concerned State Integrated 
Disease Surveillance Programme (IDSP)/ any other health care facility affirming requirements of the case definition/s.<br></br>
<span className='font-bold'>2.</span> A single negative test result, particularly if this is from an upper respiratory tract specimen, does not exclude infection* <br></br>
<span className='font-bold'>3.</span> A positive test result is only tentative, and will be reconfirmed by retesting<br></br>
<span className='font-bold'>4.</span> Repeat sampling and testing of lower respiratory specimen is strongly recommended in severe or progressive disease. The repeat specimens may be considered after a gap of 2 –<br></br>
4 days after the collection of the first specimen for additional testing if required. *<br></br>
<span className='font-bold'>5.</span> A positive alternate pathogen does not necessarily rule out either, as little is yet known about the role of coinfections.<br></br>
<span className='font-bold'>6.</span> Please note that these results are not to be used for any thesis or presentations or for Publication in any Journal without the prior permission of the Director General, ICMR

</h1>
</div>

      
      
      
    </main>
  )
}

export default Reportz

export const getStaticPaths = async () => {
  const query = `*[_type =="report"]{
      _id,
      patientid,
      age,
      name,
      gender,
      country,
      aadhar,
      contactno,
      passportno,
      icmrid,
      srfid,
      resultofsars,
      testtype,
      qrurl,
      specimentype,
      reportid,
      datetimeofcollection,
      datetimeofreceived,
      datetimeofsampletesting,
      datetimeofresultreported,
      slug,
    }`;
  const reports = await sanityClient.fetch(query);
  const paths = reports.map((report: Report) => ({
      params: {
          slug: report.slug.current
      }
  }));

  return {
      paths,
      fallback: 'blocking'
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `*[_type =="report" && slug.current == $slug][0]{
      _id,
      patientid,
      age,
      name,
      gender,
      country,
      aadhar,
      contactno,
      passportno,
      icmrid,
      srfid,
      qrurl,
      resultofsars,
      testtype,
      specimentype,
      reportid,
      datetimeofcollection,
      datetimeofreceived,
      datetimeofsampletesting,
      datetimeofresultreported,
      slug,
    }`
  const report = await sanityClient.fetch(query, {
      slug: params?.slug,
  });

  if (!report) {
      return {
          notFound: true
      }
  }
  return {
      props: {
          report,
      },
      revalidate: 60,
  };
}