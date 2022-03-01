// Create some re-useable definitions because
// many input types are identical in how
// we want to style them.
const textClassification = {
  label: 'block mb-1 font-bold text-sm',
  inner: 'max-w-md border border-gray-400 rounded-lg mb-1 overflow-hidden focus-within:border-blue-500',
  input: 'w-full h-10 px-3 border-none text-base text-gray-700 placeholder-gray-400',
}
const boxClassification = {
  fieldset: 'max-w-md border border-gray-400 rounded-md px-2 pb-1',
  legend: 'font-bold text-sm',
  wrapper: 'flex items-center mb-1 cursor-pointer',
  help: 'mb-2',
  input: 'form-check-input appearance-none h-5 w-5 mr-2 border border-gray-500 rounded-sm bg-white checked:bg-blue-500 focus:outline-none focus:ring-0 transition duration-200',
  label: 'text-sm text-gray-700 mt-1'
}
const buttonClassification = {
  wrapper: 'mb-1',
  input: 'bg-blue-500 hover:bg-blue-700 text-white text-sm font-normal py-3 px-5 rounded'
}

// export our definitions using our above
// templates and declare one-offs and
// overrides as needed.
export default {
  all: {
    outer: 'mb-5',
    help: 'text-xs text-gray-500',
    messages: 'list-none p-0 mt-1 mb-0',
    message: 'text-red-500 mb-1 text-xs'
  },
  button: buttonClassification,
  color: {
    label: 'block mb-1 font-bold text-sm',
    input: 'w-16 h-8 appearance-none border border-gray-300 rounded-md mb-2 p-1'
  },
  date: textClassification,
  'datetime-local': textClassification,
  checkbox: boxClassification,
  email: textClassification,
  file: {
    label: 'block mb-1 font-bold text-sm',
    inner: 'max-w-md',
    input: 'block w-full mb-1 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer focus:outline-none focus:border-blue-500',
    noFiles: 'block text-gray-800 text-sm mb-1',
    fileItem: 'block flex text-gray-800 text-sm mb-1',
    removeFiles: 'ml-auto text-blue-500 text-sm'
  },
  month: textClassification,
  number: textClassification,
  password: textClassification,
  radio: Object.assign({}, boxClassification, {
    input: boxClassification.input.replace('rounded-sm', 'rounded-full'),
  }),
  range: {
    inner: 'max-w-md',
    input: 'form-range appearance-none w-full h-2 p-0 bg-gray-200 rounded-full focus:outline-none focus:ring-0 focus:shadow-none'
  },
  search: textClassification,
  select: textClassification,
  submit: buttonClassification,
  tel: textClassification,
  text: textClassification,
  textarea: Object.assign({}, textClassification, {
    input: 'block w-full h-32 px-3 border-none text-base text-gray-700 placeholder-gray-400 focus:shadow-outline',
  }),
  time: textClassification,
  url: textClassification,
  week: textClassification,
}
