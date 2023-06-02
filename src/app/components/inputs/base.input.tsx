import { classNames } from "@/app/helpers/classname.helper";
import React, { InputHTMLAttributes } from "react";


type BaseInputType = {
    name: string,
    id: string,
} 


const BaseInput = ({name, id, onChange, type, placeholder, className}: InputHTMLAttributes<BaseInputType>) => {
    return (
        <input type={type} placeholder={placeholder}
        onChange={onChange}
        className={classNames('text-xs border border-gray-300 px-4 py-2 w-full rounded-sm lg:text-base', className ?? '')} id={id} name={name}
        />
    )
}


export default BaseInput;