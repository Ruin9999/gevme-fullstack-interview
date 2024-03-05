interface InputProps {
    type: string,
    placeholder: string,
    value: string,
    onChange: any,
    className?: string,
}

function Input(props: InputProps) {
    return(
        <input className={`h-10 w-full bg-slate-500 text-white ${props.className}`} type={props.type} placeholder={props.placeholder} onChange={props.onChange} value={props.value} />
    )
}

export default Input;