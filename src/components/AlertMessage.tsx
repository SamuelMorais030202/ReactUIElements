import React, { useEffect } from "react";

interface IAlertMessageProps {
  isVisible: boolean;
  setIsVisible: (newValue : boolean) => void;
  message: string;
  containerClass?: string;
  messageClass?: string;
  buttonClass?: string;
  autoCloseTimeout?: number; 
}

const AlertMessage = ({
  message,
  containerClass,
  messageClass,
  isVisible,
  setIsVisible,
  buttonClass,
  autoCloseTimeout = 0
} : IAlertMessageProps) => {
  //@ts-ignore
  useEffect(() => {
    if (autoCloseTimeout > 0 && isVisible) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, autoCloseTimeout);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [autoCloseTimeout, isVisible, setIsVisible]);

  return isVisible ? (
    <div className={containerClass}>
      <p className={messageClass}>{message}</p>
      <button
        onClick={() => setIsVisible(!isVisible)}
        className={buttonClass}
      >
        Close
      </button>
    </div>
  ) : null
}

export default AlertMessage;