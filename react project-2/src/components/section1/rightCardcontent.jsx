import React from 'react'

const rightCardcontent = (props) => {
  return (
     <div className='absolute top-0 left-0 h-full w-full  p-6 flex flex-col justify-between ' >
                <h2 className='bg-white rounded-full text-2xl font-semibold h-7 w-7 flex justify-center items-center
                ' >{props.tag1}</h2>
                <div>
                    <p className='text-sm leading-normal text-white mb-7' >{props.intro}</p>
                    <div className='flex justify-between' >
                        <button className='bg-blue-600 text-white font-semibold px-6 py-1 rounded-full ' >{props.tag2}</button>
                        <button className='bg-blue-600 text-white font-semibold px-3 py-2 rounded-full '  ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" id="Arrow-Button-Right-1--Streamline-Ultimate" height={11} width={11} ><desc>{"\n    Arrow Button Right 1 Streamline Icon: https://streamlinehq.com\n  "}</desc><g id="Arrow-Button-Right-1--Streamline-Ultimate.svg"><path d="M9.619166666666667 8.5a1.87 1.87 0 0 1 -0.5454166666666667 1.3316666666666666l-6.757499999999999 6.757499999999999a1.2537500000000001 1.2537500000000001 0 0 1 -1.7708333333333335 -1.7708333333333335l6.190833333333334 -6.190833333333334a0.19125000000000003 0.19125000000000003 0 0 0 0 -0.255L0.5454166666666667 2.1816666666666666a1.2537500000000001 1.2537500000000001 0 0 1 1.7708333333333335 -1.7708333333333335l6.757499999999999 6.757499999999999a1.87 1.87 0 0 1 0.5454166666666667 1.3316666666666666Z" fill="#000000" strokeWidth={0.7083} /><path d="M16.822916666666668 8.5a1.8770833333333334 1.8770833333333334 0 0 1 -0.53125 1.3316666666666666l-6.757499999999999 6.757499999999999a1.2537500000000001 1.2537500000000001 0 0 1 -1.7708333333333335 -1.7708333333333335l6.190833333333334 -6.190833333333334a0.17708333333333334 0.17708333333333334 0 0 0 0 -0.255l-6.212083333333333 -6.190833333333334a1.2537500000000001 1.2537500000000001 0 0 1 1.7708333333333335 -1.7708333333333335L16.291666666666668 7.168333333333333a1.8770833333333334 1.8770833333333334 0 0 1 0.53125 1.3316666666666666Z" fill="#000000" strokeWidth={0.7083} /></g></svg></button>
                    </div>
                </div>
            </div>
  )
}

export default rightCardcontent