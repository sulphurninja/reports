export default {
  name: 'report',
  title: 'Report',
  type: 'document',
  fields: [
    {
      name: 'patientid',
      title: 'PatientID',
      type: 'string',
    },
    {
      name: 'age',
      title: 'Age',
      type: 'string',
    },{
      name: 'name',
      title: 'Name',
      type: 'string',
    },{
      name: 'gender',
      title: 'Gender',
      type: 'string',
    },{
      name: 'country',
      title: 'Country of Test',
      type: 'string',
    },{
      name: 'aadhar',
      title: 'Aadhar Number',
      type: 'string',
    },
   {
      name: 'contactno',
      title: 'Contact No',
      type: 'string',
    },{
      name: 'passportno',
      title: 'Passport No',
      type: 'string',
    },{
      name: 'icmrid',
      title: 'ICMRID',
      type: 'string',
    },
    {
      name: 'srfid',
      title: 'SRF ID',
      type: 'string',
    },
    {
      name: 'resultofsars',
      title: 'Result of SARS-CoV2',
      type: 'string',
    },
    {
      name: 'testtype',
      title: 'Test Type',
      type: 'string',
    },{
      name: 'specimentype',
      title: 'Specimen Type',
      type: 'string',
    },
    {
      name: 'reportid',
      title: 'Report ID',
      type: 'string',
    },
    {
      name: 'qrurl',
      title: 'QR Code ',
      type: 'string',
    },
    {
      name: 'datetimeofcollection',
      title: 'Date Time of Sample Collection',
      type: 'string',
    },
    {
      name: 'datetimeofreceived',
      title: 'Date Time of Sample Received',
      type: 'string'
    },
    {
      name: 'datetimeofsampletesting',
      title: 'Date Time of Sample Testing',
      type: 'string'
    },
    {
      name: 'datetimeofresultreported',
      title: 'Date Time of Result Reported',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'patientid',
        maxLength: 96,
      },
    },
  ],

  preview: {
    select: {
      patientid: 'patientid',
    },
    prepare(selection) {
      const {patientid} = selection
      return Object.assign({}, selection, {
        subtitle: patientid && `by ${patientid}`,
      })
    },
  },
}
