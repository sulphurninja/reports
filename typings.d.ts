export interface Report {
    _id: string,
    patientid: string,
    age: string,
    name: string,
    qrurl: string,
    gender: string,
    country: string,
    aadhar: string,
    contactno: string,
    passportno: string,
    icmrid: string,
    srfid: string,
    resultofsars: string,
    testtype: string,
    specimentype: string,
    reportid: string,
    datetimeofcollection: string,
    datetimeofreceived: string,
    datetimeofsampletesting: string,
    datetimeofresultreported: string,
    slug:{
        current: string,
    },
}