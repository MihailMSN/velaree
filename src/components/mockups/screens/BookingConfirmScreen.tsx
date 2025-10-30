import { CheckCircle, Download, Share2, Calendar } from "lucide-react";

const BookingConfirmScreen = () => {
  return (
    <div className="p-6 h-full bg-gradient-to-b from-accent/5 to-background flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center text-center">
        <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mb-6">
          <CheckCircle className="w-12 h-12 text-accent" />
        </div>
        
        <h2 className="text-2xl font-bold text-foreground mb-2">Booking Confirmed!</h2>
        <p className="text-sm text-muted-foreground mb-8">Your trip is all set</p>

        <div className="w-full bg-card border border-border rounded-xl p-6 mb-6">
          <div className="text-xs text-muted-foreground mb-2">Booking Reference</div>
          <div className="text-2xl font-bold text-foreground mb-6 tracking-wider">VLR2847K</div>
          
          <div className="space-y-3 text-left">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Route</span>
              <span className="font-medium text-foreground">JFK → LHR</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Date</span>
              <span className="font-medium text-foreground">Dec 15, 2024</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Passengers</span>
              <span className="font-medium text-foreground">2 Adults</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Total</span>
              <span className="font-bold text-accent">$589.00</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 w-full">
          <button className="flex items-center justify-center gap-2 bg-card border border-border rounded-xl py-3 text-sm font-medium text-foreground">
            <Download className="w-4 h-4" />
            Download
          </button>
          <button className="flex items-center justify-center gap-2 bg-card border border-border rounded-xl py-3 text-sm font-medium text-foreground">
            <Share2 className="w-4 h-4" />
            Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmScreen;
