import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/Header'
import { sanityClient, urlFor  } from '../sanity'
import { Report } from './../typings'

interface Props {
  reports: [Report];
}

export default function Home({reports}: Props){
  console.log(reports)
  return (
    <div>
    <div>
      <Head>
        <title>ICMR REPORTS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
    <div>
   

    {/*Reports */}
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6'>
      {reports.map(report =>(
        <Link key={report._id} href={`/report/${report.slug.current}`}>
          <div className='border rounded-lg group overflow-hidden cursor-pointer'>
            <h1>Report</h1>
            <div className='flex justify-between p-5 bg-white'>
              <div>
            <p className='text-xs'>{report.patientid}</p>
            <p className='text-lg font-bold'>{report.name}</p>
          </div>
          </div>
          </div>
        </Link>
      ))}

    </div>
    </div>
    </div>
  );
}


export const getServerSideProps = async () => {
  const query =`*[_type =="report"]{
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
    specimentype,
    reportid,
    datetimeofcollection,
    datetimeofreceived,
    datetimeofsampletesting,
    datetimeofresultreported,
    slug,    
  }`;
  const reports = await sanityClient.fetch(query);
  
  return{
    props:{
      reports,
    },
  };
}
