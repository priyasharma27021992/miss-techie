import classNames from "classnames";

type IconButtonProps = {
  children: React.ReactNode;
  href?: string;
  iconClassName?: string;
};

export const IconButton = ({
  children,
  href,
  iconClassName,
}: IconButtonProps) => {
  return (
    <a
      className={classNames(
        "bg-[#fafaff] rounded-[2.6rem] text-[1.3rem] w-[2.6rem] h-[2.6rem] my-[2px] mx-[5px] relative cursor-pointer flex flex-row justify-center items-center",
        iconClassName
      )}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};
