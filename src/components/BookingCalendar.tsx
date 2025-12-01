import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Video, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { format, addDays, startOfWeek, isSameDay } from "date-fns";

const BookingCalendar = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [currentWeekStart, setCurrentWeekStart] = useState(startOfWeek(new Date(), { weekStartsOn: 1 }));

  const timeSlots = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
  ];

  const weekDays = Array.from({ length: 5 }, (_, i) => addDays(currentWeekStart, i));

  const nextWeek = () => {
    setCurrentWeekStart(addDays(currentWeekStart, 7));
    setSelectedDate(null);
    setSelectedTime(null);
  };

  const prevWeek = () => {
    const newStart = addDays(currentWeekStart, -7);
    if (newStart >= startOfWeek(new Date(), { weekStartsOn: 1 })) {
      setCurrentWeekStart(newStart);
      setSelectedDate(null);
      setSelectedTime(null);
    }
  };

  const isDateSelectable = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date >= today;
  };

  const handleBooking = () => {
    if (selectedDate && selectedTime) {
      // This is a placeholder - would integrate with actual booking service
      alert(`Demo booking for ${format(selectedDate, "MMMM d, yyyy")} at ${selectedTime}\n\nTo enable real bookings, connect your Calendly or Cal.com account.`);
    }
  };

  return (
    <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-accent p-6 text-primary-foreground">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
            <Video className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-lg">Product Demo</h3>
            <p className="text-primary-foreground/80 text-sm">30 min • Video call</p>
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* Week Navigation */}
        <div className="flex items-center justify-between mb-4">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={prevWeek}
            disabled={currentWeekStart <= startOfWeek(new Date(), { weekStartsOn: 1 })}
            className="p-2"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <span className="font-semibold text-foreground">
            {format(currentWeekStart, "MMMM yyyy")}
          </span>
          <Button variant="ghost" size="sm" onClick={nextWeek} className="p-2">
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Date Selection */}
        <div className="grid grid-cols-5 gap-2 mb-6">
          {weekDays.map((day) => {
            const selectable = isDateSelectable(day);
            const isSelected = selectedDate && isSameDay(day, selectedDate);
            
            return (
              <button
                key={day.toISOString()}
                onClick={() => selectable && setSelectedDate(day)}
                disabled={!selectable}
                className={`
                  p-3 rounded-xl text-center transition-all duration-200
                  ${selectable ? 'hover:bg-primary/10 cursor-pointer' : 'opacity-40 cursor-not-allowed'}
                  ${isSelected ? 'bg-primary text-primary-foreground hover:bg-primary' : 'bg-muted/50'}
                `}
              >
                <div className="text-xs font-medium text-muted-foreground mb-1">
                  {format(day, "EEE")}
                </div>
                <div className={`text-lg font-bold ${isSelected ? 'text-primary-foreground' : 'text-foreground'}`}>
                  {format(day, "d")}
                </div>
              </button>
            );
          })}
        </div>

        {/* Time Selection */}
        {selectedDate && (
          <div className="animate-fade-in">
            <div className="flex items-center gap-2 mb-4">
              <Clock className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm font-medium text-muted-foreground">
                Available times for {format(selectedDate, "EEEE, MMMM d")}
              </span>
            </div>
            
            <div className="grid grid-cols-2 gap-2 mb-6">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`
                    p-3 rounded-xl text-sm font-medium transition-all duration-200
                    ${selectedTime === time 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-muted/50 text-foreground hover:bg-primary/10 hover:border-primary/30'
                    }
                    border border-transparent
                  `}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Confirmation */}
        {selectedDate && selectedTime && (
          <div className="animate-fade-in">
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4 mb-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground">
                    {format(selectedDate, "EEEE, MMMM d, yyyy")}
                  </p>
                  <p className="text-muted-foreground text-sm">{selectedTime} • 30 minutes</p>
                </div>
              </div>
            </div>
            
            <Button 
              onClick={handleBooking}
              className="w-full py-6 text-base font-semibold rounded-xl"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Confirm Demo Booking
            </Button>
          </div>
        )}

        {!selectedDate && (
          <p className="text-center text-muted-foreground text-sm">
            Select a date to see available times
          </p>
        )}
      </div>

      {/* Footer note */}
      <div className="px-6 pb-6">
        <p className="text-xs text-muted-foreground text-center bg-muted/30 rounded-lg p-3">
          💡 This is a demo calendar. Connect your Calendly or Cal.com account for real booking functionality.
        </p>
      </div>
    </div>
  );
};

export default BookingCalendar;
