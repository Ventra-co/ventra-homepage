import React, { useEffect, useRef, useState } from "react";
import { X, Copy, Mail, Check } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

export interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [copied, setCopied] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  
  const email = "sales@ventra.co.kr";
  const subject = encodeURIComponent("[Ventra 문의] 홈페이지 문의");
  const mailtoUrl = `mailto:${email}?subject=${subject}`;

  useEffect(() => {
    if (isOpen) {
      previousFocusRef.current = document.activeElement as HTMLElement;
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          onClose();
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      
      setTimeout(() => {
         modalRef.current?.focus();
      }, 100);

      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
        if (previousFocusRef.current) {
          previousFocusRef.current.focus();
        }
      };
    }
  }, [isOpen, onClose]);

  const handleCopy = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(email);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = email;
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email: ", err);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.div
            ref={modalRef}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.2, type: "spring", bounce: 0 }}
            className="relative w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden outline-none flex flex-col max-h-[90vh]"
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <h2 id="contact-modal-title" className="text-xl font-bold text-gray-900">
                Contact
              </h2>
              <button
                onClick={onClose}
                className="p-2 -mr-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#1B2D53]"
                aria-label="닫기"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto">
              <p className="text-gray-600 mb-6 leading-relaxed break-keep">
                Ventra의 Enterprise IT 전환 및 솔루션에 대해 문의해 주세요.
              </p>

              <div className="bg-gray-50 rounded-xl p-4 flex flex-col items-center justify-center mb-8 border border-gray-100">
                <span className="text-sm font-medium text-gray-500 mb-1 uppercase tracking-wider">Email</span>
                <span className="text-lg font-semibold text-gray-900 select-all break-all">{email}</span>
              </div>

              <div className="flex flex-col gap-3">
                <a
                  href={mailtoUrl}
                  className="flex items-center justify-center gap-2 w-full bg-[#1B2D53] text-white py-3.5 px-4 rounded-xl font-semibold hover:bg-[#1B2D53]/90 transition-colors focus:outline-none focus:ring-2 focus:ring-[#1B2D53] focus:ring-offset-2 shadow-sm"
                >
                  <Mail className="w-5 h-5" />
                  이메일 보내기
                </a>
                
                <button
                  onClick={handleCopy}
                  className="flex items-center justify-center gap-2 w-full bg-white text-gray-700 border border-gray-200 py-3.5 px-4 rounded-xl font-semibold hover:bg-gray-50 hover:text-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-[#1B2D53] focus:ring-offset-2"
                >
                  {copied ? (
                    <>
                      <Check className="w-5 h-5 text-green-500" />
                      <span className="text-green-600">이메일 주소 복사됨</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-5 h-5 text-gray-500" />
                      이메일 주소 복사
                    </>
                  )}
                </button>
              </div>
            </div>
            
            <div aria-live="polite" className="sr-only">
              {copied ? "이메일 주소가 클립보드에 복사되었습니다." : ""}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
