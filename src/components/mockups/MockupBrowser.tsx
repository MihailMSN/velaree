import { ReactNode } from "react";

interface MockupBrowserProps {
  children: ReactNode;
  url?: string;
  className?: string;
}

const MockupBrowser = ({ children, url = "app.velaree.com", className = "" }: MockupBrowserProps) => {
  return (
    <div className={`bg-card border border-border rounded-lg shadow-2xl overflow-hidden ${className}`}>
      {/* Browser Chrome */}
      <div className="bg-muted border-b border-border px-4 py-3 flex items-center gap-3">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
        </div>
        <div className="flex-1 bg-background rounded px-3 py-1.5 text-xs text-muted-foreground flex items-center gap-2">
          <div className="w-3 h-3 text-muted-foreground/50">🔒</div>
          <span>{url}</span>
        </div>
      </div>
      
      {/* Content Area */}
      <div className="bg-[#FAFAFA]">
        {children}
      </div>
    </div>
  );
};

export default MockupBrowser;
