import { classNames } from '@/app/helpers/classname.helper';
import { ButtonHTMLAttributes } from 'react';

type FullButtonProps = {
};

const SecondaryFullButton = ({children, type, className, onClick}: ButtonHTMLAttributes<FullButtonProps>) => {

    return (
        <button className={classNames('w-full text-sm font-medium text-white bg-secondary py-1 rounded-sm lg:text-base', className ?? '')}
        type={type}
        onClick={onClick}
        >{children}</button>
    )
}

export default SecondaryFullButton;