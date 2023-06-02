import { classNames } from '@/app/helpers/classname.helper';
import { ButtonHTMLAttributes } from 'react';

type FullButtonProps = {
};

const SecondaryButton = ({children, type, className, onClick}: ButtonHTMLAttributes<FullButtonProps>) => {

    return (
        <button className={classNames('px-2 text-sm font-medium text-white bg-secondary py-1 rounded-sm lg:text-base', className ?? '')}
        type={type}
        onClick={onClick}
        >{children}</button>
    )
}

export default SecondaryButton;