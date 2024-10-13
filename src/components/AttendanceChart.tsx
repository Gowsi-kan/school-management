/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import Image from 'next/image';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Mon',
    present: 4000,
    absent: 2400,
  },
  {
    name: 'Tues',
    present: 3000,
    absent: 1398,
  },
  {
    name: 'Wed',
    present: 2000,
    absent: 9800,
  },
  {
    name: 'Thurs',
    present: 2780,
    absent: 3908,
  },
  {
    name: 'Fri',
    present: 1890,
    absent: 4800,
  },
];

const AttendanceChart = () => {
  return (
    <div className='bg-white rounded-xl w-full h-full p-4'>
        {/* TITLE */}
        <div className='flex justify-between items-center'>
            <h1 className='text-lg font-semibold'>Attendance</h1>
            <Image src="/moreDark.png" alt=''  width={20} height={20} />
        </div>

        {/* CHART */}
        <ResponsiveContainer width="100%" height="90%">
            <BarChart
                width={500}
                height={300}
                data={data}
                barSize={20}
            >
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd"/>
                <XAxis dataKey="name" axisLine={false} tick={{fill: "#d1d5db"}} tickLine={false}/>
                <YAxis axisLine={false} tick={{fill: "#d1d5db"}} tickLine={false}/>
                <Tooltip contentStyle={{borderRadius:"8px", borderColor:"lightgray"}}/>
                <Legend 
                    align='left' 
                    verticalAlign="top" 
                    wrapperStyle={{paddingTop: "20px", paddingBottom: "40px"}}/>
                <Bar 
                    dataKey="present" 
                    fill="#FAE27C" 
                    activeBar={<Rectangle fill="pink"/>} 
                    legendType="circle"
                    radius={[6,6,0,0]}
                />
                <Bar 
                    dataKey="absent" 
                    fill="#C3EBFA" 
                    activeBar={<Rectangle fill="gold"/>} 
                    legendType="circle"
                    radius={[6,6,0,0]}
                />
            </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default AttendanceChart