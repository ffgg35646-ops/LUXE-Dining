import {
  ReactNode,
  useEffect,
} from "react";

import { classNames } from "@/lib/utils";

interface ModalProps {
  open: boolean;
  title?: string;
  children: ReactNode;
  onClose: () => void;
  size?: "sm" | "md" | "lg" | "xl";
}

const sizeClasses = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-2xl",
  xl: "max-w-4xl",
};

const Modal = ({
  open,
  title,
  children,
  onClose,
  size = "md",
}: ModalProps) => {
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className={classNames(
          "w-full rounded-2xl bg-neutral-900 shadow-2xl",
          sizeClasses[size]
        )}
      >
        <div className="flex items-center justify-between border-b border-neutral-800 px-6 py-4">
          <h2 className="text-xl font-semibold text-white">
            {title}
          </h2>

          <button
            type="button"
            onClick={onClose}
            className="text-2xl text-neutral-400 transition hover:text-white"
            aria-label="Close modal"
          >
            ×
          </button>
        </div>

        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
