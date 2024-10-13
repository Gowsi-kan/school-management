/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputField from "../InputField";

const schema = z.object({
  username: z
    .string()
    .min(3, { message: 'Username must be at least 3 characters long!' })
    .max(20, { message: 'Username must be at most 20 characters long!' }),
  email: z
    .string()
    .email({ message: "Invalid email address!"}),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters long!' }),
  firstName: z
    .string()
    .min(1, { message: 'First name is required!' }),
  lastName: z
    .string()
    .min(1, { message: 'Last name is required!' }),
  phone: z
    .string()
    .min(1, { message: 'Phone is required!' }),
  address: z
    .string()
    .min(1, { message: 'Address is required!' }),
  birthday: z
    .string().refine((value) => !isNaN(Date.parse(value)), { message: 'Invalid date!' }),
  bloodType: z
    .enum(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"], { message: 'Blood type is required!' }),
  sex: z
    .enum(["male","female"],{ message: 'Sex is required!' }),
  img: z
    .any().refine((files) => files?.length === 1, { message: 'Image is required!' }), 
});

type Inputs = z.infer<typeof schema>;

const StudentForm = ({
    type,
    data
}: {
    type: "create" | "update" | "delete";   
    data?: any;
}) => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit( data => {
    // Log all the form data to the console
    console.log("Submitted Data:", data);
  })


  return (
    <form className='flex flex-col gap-8' onSubmit={onSubmit}>
        <h1 className="text-xl font-semibold">Create a new student</h1>
        <span className="text-xs text-gray-400 font-medium">Authentication Information</span>
        <div className="flex justify-between flex-wrap gap-4">
            <InputField 
            label="Username"
            name="username"
            register={register}
            error={errors.username}
            inputProps={{ placeholder: 'Enter your username' }}
            defaultValue={data?.name}
            />
            <InputField 
                label="Email"
                name="email"
                register={register}
                error={errors.email}
                inputProps={{ placeholder: 'Enter your email' }}
                defaultValue={data?.email}
            />
            <InputField 
                label="Password"
                name="password"
                type="password"
                register={register}
                error={errors.password}
                inputProps={{ placeholder: 'Enter your password' }}
                defaultValue={data?.password}
            />
        </div>
        
        <span className="text-xs text-gray-400 font-medium">Personal Information</span>

        <div className="flex justify-between flex-wrap gap-4">
            <InputField 
            label="First Name"
            name="firstName"
            register={register}
            error={errors.firstName}
            inputProps={{ placeholder: 'Enter your first name' }}
            defaultValue={data?.firstName}
            />
            <InputField 
                label="Last Name"
                name="lastName"
                register={register}
                error={errors.lastName}
                inputProps={{ placeholder: 'Enter your last name' }}
                defaultValue={data?.lastName}
            />
            <InputField 
                label="Phone"
                name="phone"
                register={register}
                error={errors.phone}
                inputProps={{ placeholder: 'Enter your phone number' }}
                defaultValue={data?.phone}
            />
            <InputField 
                label="Address"
                name="address"
                register={register}
                error={errors.address}
                inputProps={{ placeholder: 'Enter your address' }}
                defaultValue={data?.address}
            />

            <div className="flex flex-col gap-2 w-full md:w-1/4">
            <label className="text-xs text-gray-500">Birthday</label>
            <input 
                type="date"
                {...register("birthday")}
                className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
                defaultValue={data?.birthday}
            />
            {errors.birthday && (
                <p className="text-xs text-red-400">{errors.birthday.message}</p>
            )}
            </div>

            <div className="flex flex-col gap-2 w-full md:w-1/4">
            <label className="text-xs text-gray-500">Sex</label>
            <select 
                {...register("sex")}
                className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
                defaultValue={data?.sex}
            >
                <option value="" disabled>Select sex</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
            {errors.sex && (
                <p className="text-xs text-red-400">{errors.sex.message}</p>
            )}
            </div>

            <div className="flex flex-col gap-2 w-full md:w-1/4">
            <label className="text-xs text-gray-500">Blood Type</label>
            <select 
                {...register("bloodType")}
                className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
                defaultValue={data?.bloodType}
            >
                <option value="" disabled>Select blood type</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
            </select>
            {errors.bloodType && (
                <p className="text-xs text-red-400">{errors.bloodType.message}</p>
            )}
            </div>

            <div className="flex flex-col gap-2 w-full md:w-1/4">
            <label className="text-xs text-gray-500">Profile Image</label>
            <input 
                type="file"
                id="img"
                {...register("img")}
                className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
            />
            {errors.img && (
                <p className="text-xs text-red-400">{errors.img.message?.toString()}</p>
            )}
            </div>
        </div>

        <button className="bg-blue-400 text-white p-2 rounded-md">{ type === "create" ? "Create" : "Update"}</button>
    </form>
  )
}

export default StudentForm