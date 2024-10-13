/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import Image from 'next/image';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Mon',
    income: 4000,
    expense: 2400,
  },
  {
    name: 'Tue',
    income: 3000,
    expense: 1398,
  },
  {
    name: 'Wed',
    income: 2000,
    expense: 9800,
  },
  {
    name: 'Thu',
    income: 2780,
    expense: 3908,
  },
  {
    name: 'Fri',
    income: 1890,
    expense: 4800,
  },
];

const FinanceChart = () => {
  return (
    <div className='bg-white rounded-xl w-full h-full p-4'>
        {/* TITLE */}
        <div className='flex justify-between items-center'>
            <h1 className='text-lg font-semibold'>Finance</h1>
            <Image src="/moreDark.png" alt=''  width={20} height={20} />
        </div>

        {/* CHART */}
        <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          barSize={20}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd"/>
          <XAxis dataKey="name" axisLine={false} tick={{fill: "#d1d5db"}} tickLine={false} tickMargin={10}/>
          <YAxis axisLine={false} tick={{fill: "#d1d5db"}} tickLine={false} tickMargin={10}/>
          <Tooltip contentStyle={{borderRadius:"8px", borderColor:"lightgray"}}/>
          <Legend 
            align='center' 
            verticalAlign="top" 
            wrapperStyle={{paddingTop: "10px", paddingBottom: "30px"}}/>
          <Line type="monotone" dataKey="expense" stroke="#C3EBFA" strokeWidth={4}/>
          <Line type="monotone" dataKey="income" stroke="#FAE27C" strokeWidth={4}/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default FinanceChart