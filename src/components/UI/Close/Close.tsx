import clases from './close.module.css'

interface CloseProps {
    className?:string ,
    onClick: () => void
}

export default function Close({ className, onClick }: CloseProps) {
  return (
    <span className={`${clases.closeBtn} ${className}`} onClick={onClick}>
      +
    </span>
  );
}
