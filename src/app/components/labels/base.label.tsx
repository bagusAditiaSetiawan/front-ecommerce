
type BaseLabelProps = {
    htmlFor: string,
    label: string,
}

const BaseLabel = ({htmlFor, label}: BaseLabelProps) => {
    return (
        <label htmlFor={htmlFor} className="text-gray-700 text-xs font-medium block lg:text-base">{label}</label>
    )
}

export default BaseLabel