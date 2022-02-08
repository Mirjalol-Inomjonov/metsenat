export const state = () => ({
  sponsors: [
    {
      fullName: 'Qosimov Furqat Xabibullayevich ',
      phone: '+99899 973-72-60',
      sponsorShipAmout: '30 000 000',
      paymentAmount: '0',
      date: '15.01.2021',
      status: 'Yangi',
    },
    {
      fullName: 'Alimov Abror Xabibullayevich',
      phone: '+99899 073-12-80',
      sponsorShipAmout: '25 000 000',
      paymentAmount: '0',
      date: '15.01.2021',
      status: 'Yangi',
    },
    {
      fullName: 'Ishmuhammedov Aziz Ishqobilovich',
      phone: '+99899 973-72-60',
      sponsorShipAmout: '30 000 000',
      paymentAmount: '0',
      date: '15.01.2021',
      status: 'Moderatsiyada',
    },
    {
      fullName: 'Saimov Rustam Saimjonovich',
      phone: '+99899 973-72-60',
      sponsorShipAmout: '30 000 000',
      paymentAmount: '0',
      date: '15.01.2021',
      status: 'Moderatsiyada',
    },
    {
      fullName: 'Sanginov Otabek Muratovich',
      phone: '+99899 973-72-60',
      sponsorShipAmout: '30 000 000',
      paymentAmount: '0',
      date: '15.01.2021',
      status: 'Moderatsiyada',
    },
    {
      fullName: 'Ibragimov Sohib Mirfayozovich',
      phone: '+99899 973-72-60',
      sponsorShipAmout: '30 000 000',
      paymentAmount: '0',
      date: '15.01.2021',
      status: 'Tasdiqlangan',
    },
    {
      fullName: 'Ortiqov Abror Bahodirovich',
      phone: '+99899 973-72-60',
      sponsorShipAmout: '30 000 000',
      paymentAmount: '0',
      date: '15.01.2021',
      status: 'Bekor qilingan',
    },
    {
      fullName: 'Rustamov Oybek  Tajiddinovich',
      phone: '+99899 973-72-60',
      sponsorShipAmout: '30 000 000',
      paymentAmount: '0',
      date: '15.01.2021',
      status: 'Moderatsiyada',
    },
    {
      fullName: 'Isfandiyorov  Iqbol Bobomirzayevich',
      phone: '+99899 973-72-60',
      sponsorShipAmout: '30 000 000',
      paymentAmount: '0',
      date: '15.01.2021',
      status: 'Tasdiqlangan',
    },
  ],

  students: [
    {
      fullName: 'Alimov Abror Xabibullayevich',
      phone: '+99899 973-72-60',
      studentType: 'Bakalavr',
      otm: 'Toshkent shahridagi INHA Universiteti',
      allocatedAmount: 14700000,
      contractAmount: 30000000,
    },
    {
      fullName: 'Sanginov Otabek Muratovich',
      phone: '+99899 973-72-60',
      studentType: 'Magistr',
      otm: 'Ozbekiston milliy universiteti',
      allocatedAmount: 1000000,
      contractAmount: 4000000,
    },
    {
      fullName: 'Nazarov Sanjar Olimovich',
      phone: '+99899 973-72-60',
      studentType: 'Bakalavr',
      otm: 'O’zbekiston milliy universiteti',
      allocatedAmount: 0,
      contractAmount: 30000000,
    },
    {
      fullName: 'Qosimov Furqat Xabibullayevich',
      phone: '+99899 973-72-60',
      studentType: 'Magistr',
      otm: 'O’zbekiston davlat jahon tillari universiteti',
      allocatedAmount: 4000000,
      contractAmount: 25000000,
    },
  ],

  studentTypes: ['Bakalavr', 'Magistr'],

  status: [
    'Barchasi',
    'Yangi',
    'Moderatsiyada',
    'Tasdiqlangan',
    'Bekor qilingan',
  ],

  otmsName: [
    'Toshkent shahridagi INHA Universiteti',
    `O'zbekiston milliy universiteti`,
    `Toshkent axborot texnologiyalari universiteti`,
    `Toshkent moliya instituti`,
    `Toshkent avtomobil-yo'llari instituti`,
    `Toshkent to'qimachilik va нngil sanoat istituti`,
    `Toshkent arxitektura-qurilish instituti`,
    `Toshkent arxitektura-qurilish instituti`,
    `Toshkent davlat sharqshunoslik instituti`,
    `O'zbekiston davlat jahon tillari universiteti`,
    `Toshkent davlat texnika universiteti`,
    `Toshkent davlat iqtisodiyot universiteti`,
  ],

  aboutOneStudent: {
    img: '',
    fullName: '',
    phone: '',
    otm: '',
    studentType: '',
    allocatedAmount: '',
    contractAmount: '',
  },

  aboutOneSponsor: {
    img: '',
    fullName: '',
    phone: '',
    sponsorShipAmout: '',
    paymentAmount: '',
    date: '',
    status: '',
  },
})

export const getters = () => ({})

export const mutations = {
  ADD_NEW_STUDENT(state, student) {
    state.students = [...state.students, student]
  },

  ABOUT_ONE_STUDENT(state, index) {
    state.aboutOneStudent.fullName = state.students[index].fullName
    state.aboutOneStudent.phone = state.students[index].phone
    state.aboutOneStudent.otm = state.students[index].otm
    state.aboutOneStudent.studentType = state.students[index].studentType
    state.aboutOneStudent.allocatedAmount =
      state.students[index].allocatedAmount
    state.aboutOneStudent.contractAmount = state.students[index].contractAmount
  },

  ABOUT_ONE_SPONSOR(state, index) {
    state.aboutOneSponsor.fullName = state.sponsors[index].fullName
    state.aboutOneSponsor.phone = state.sponsors[index].phone
    state.aboutOneSponsor.sponsorShipAmout =
      state.sponsors[index].sponsorShipAmout
    state.aboutOneSponsor.paymentAmount = state.sponsors[index].paymentAmount
    state.aboutOneSponsor.date = state.sponsors[index].date
    state.aboutOneSponsor.status = state.sponsors[index].status
  },

  EDIT_ONE_STUDENT(state, data) {
    state.students[data.index] = data.student
  },
}

export const actions = () => ({})
export const modules = () => ({})
