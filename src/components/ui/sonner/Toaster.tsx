"use client";

import { useEffect, useState } from "react";

export interface Toast {
  id: string;
  title?: string;
  description?: string;
  type?: "success" | "error" | "warning" | "info";
}

export function Toaster() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (toasts.length > 0) {
        setToasts((prev) => prev.slice(1));
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [toasts]);

  if (toasts.length === 0) return null;

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`
            p-4 rounded-lg shadow-lg border max-w-sm
            ${
              toast.type === "success"
                ? "bg-green-50 border-green-200 text-green-800"
                : ""
            }
            ${
              toast.type === "error"
                ? "bg-red-50 border-red-200 text-red-800"
                : ""
            }
            ${
              toast.type === "warning"
                ? "bg-yellow-50 border-yellow-200 text-yellow-800"
                : ""
            }
            ${!toast.type ? "bg-blue-50 border-blue-200 text-blue-800" : ""}
            animate-in slide-in-from-right-full duration-300
          `}
        >
          {toast.title && <div className="font-semibold">{toast.title}</div>}
          {toast.description && (
            <div className="text-sm mt-1">{toast.description}</div>
          )}
        </div>
      ))}
    </div>
  );
}

// Hook para usar o toaster
// eslint-disable-next-line react-refresh/only-export-components
export function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const toast = (props: Omit<Toast, "id">) => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { ...props, id }]);
  };

  return { toast, toasts };
}
