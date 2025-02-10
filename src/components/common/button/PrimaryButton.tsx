import Spinner from "@/assets/svg/Spinner";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
  onClick?: (event:React.MouseEvent<HTMLButtonElement>) => void;
  isLoading?: boolean;
  style?:React.CSSProperties;
  className?:string;
};

const PrimaryButton:React.FunctionComponent<ButtonProps> = ({label,onClick,disabled=false,isLoading=false,style,className="",...rest}):JSX.Element => {
  return (
      <button
        style={style}
        {...rest}
        onClick={onClick}
        disabled={disabled || isLoading}
        role="button"
        className={` ${className} rounded-[3px] duration-[0.25s] h-[53px] text-[16px] leading-[20px] uppercase text-white font-normal bg-[#dd0735] w-full border-0 flex justify-center items-center transition-all ease-in-out cursor-pointer hover:text-white hover:bg-[#bb022a] hover:no-underline focus:text-white focus:bg-[#bb022a] focus:no-underline`}
      >
        {isLoading ? (
          <span className="overflow-hidden animate-spin flex justify-center items-center max-w-0 w-0 h-0">
            <Spinner />
          </span>
        ) : (
          label
        )}
      </button>
  );
}

export default PrimaryButton