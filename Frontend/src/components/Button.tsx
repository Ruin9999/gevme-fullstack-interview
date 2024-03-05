interface ButtonProps {
    type: "submit" | "reset" | "button" | undefined,
    text: string,
    onClick: any
}

function Button(props: ButtonProps) {
    return(
        <button className="h-10 bg-slate-500 rounded-lg opacity-100 hover:opacity-90 text-white" type={props.type} onClick={props.onClick}>{props.text}</button>
    )
}

export default Button;