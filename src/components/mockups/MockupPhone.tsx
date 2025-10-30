import { ReactNode } from "react";

interface MockupPhoneProps {
  children: ReactNode;
  className?: string;
}

const MockupPhone = ({ children, className = "" }: MockupPhoneProps) => {
  return (
    <div className={`relative ${className}`} style={{ width: '280px', height: '560px' }}>
      {/* Phone Frame */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] shadow-2xl">
        {/* Screen */}
        <div className="absolute inset-3 bg-background rounded-[2.5rem] overflow-hidden">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl z-10"></div>
          
          {/* Status Bar */}
          <div className="absolute top-0 left-0 right-0 h-12 px-6 flex items-center justify-between text-xs text-foreground z-10">
            <span className="font-medium">9:41</span>
            <div className="flex items-center gap-1">
              <div className="w-4 h-3 border border-current rounded-sm relative">
                <div className="absolute inset-0.5 bg-current rounded-[1px]"></div>
              </div>
            </div>
          </div>
          
          {/* Screen Content */}
          <div className="pt-12 h-full overflow-hidden">
            {children}
          </div>
        </div>
        
        {/* Side Button */}
        <div className="absolute right-0 top-32 w-1 h-16 bg-gray-700 rounded-l"></div>
        <div className="absolute left-0 top-28 w-1 h-8 bg-gray-700 rounded-r"></div>
        <div className="absolute left-0 top-40 w-1 h-12 bg-gray-700 rounded-r"></div>
      </div>
    </div>
  );
};

export default MockupPhone;
