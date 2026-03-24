import clases from './popup.module.css'

interface PopupProps {
    children: React.ReactNode 
    isActive: boolean
}

export default function Popup({children , isActive}:PopupProps) {
  return (
    <div className={`${clases.popup} ${isActive ? clases.activePopup : clases.closedPopup} `}>
        <div className={clases.popup__container}>
            {children}
        </div>
    </div>
  )
}
