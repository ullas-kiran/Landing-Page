
type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    value?: string;
    type?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    style?: React.CSSProperties;
  };

const PrimaryInput:React.FunctionComponent<InputProps> = ({value,type="text",onChange,style,className="",...restProps}):JSX.Element => {
  return (
    <input
      className={`text-[18px] outline-none bg-[#ffffffff] leading-[24px] w-full h-[53px] rounded-[3px] px-[10px] shadow-none transition-all duration-[0.3s] ease-in-out placeholder:text-[#c6c6c6] ${className}`}
      style={style}
      type={type}
      value={value}
      onChange={onChange}
      {...restProps}
    />
  );
}

export default PrimaryInput