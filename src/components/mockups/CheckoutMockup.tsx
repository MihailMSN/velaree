import MockupBrowser from "./MockupBrowser";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Plane, User, CreditCard, Shield, CheckCircle2, Plus } from "lucide-react";

const ancillaries = [
  { id: "baggage", name: "Extra Baggage (23kg)", price: 45, selected: true },
  { id: "meal", name: "Premium Meal", price: 25, selected: true },
  { id: "seat", name: "Seat Selection (Exit Row)", price: 35, selected: true },
  { id: "priority", name: "Priority Boarding", price: 20, selected: false },
  { id: "lounge", name: "Airport Lounge Access", price: 60, selected: false },
];

const CheckoutMockup = () => {
  const selectedAncillaries = ancillaries.filter(a => a.selected);
  const ancillariesTotal = selectedAncillaries.reduce((sum, a) => sum + a.price, 0);
  const flightPrice = 1374; // 2 x $687
  const taxes = 186;
  const total = flightPrice + taxes + ancillariesTotal;

  return (
    <MockupBrowser url="app.velaree.com/checkout">
      <div className="p-8">
        <div className="grid grid-cols-3 gap-6">
          {/* Main Checkout Form */}
          <div className="col-span-2 space-y-6">
            {/* Passenger Details */}
            <Card className="p-6 bg-card border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                  <User className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">Passenger Details</h3>
                  <p className="text-xs text-muted-foreground">Enter traveler information</p>
                </div>
              </div>

              {/* Passenger 1 */}
              <div className="mb-6 pb-6 border-b border-border">
                <div className="text-sm font-semibold text-foreground mb-4">Passenger 1 (Adult)</div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="text-xs text-muted-foreground">First Name</Label>
                    <Input value="John" className="mt-1" />
                  </div>
                  <div>
                    <Label className="text-xs text-muted-foreground">Last Name</Label>
                    <Input value="Smith" className="mt-1" />
                  </div>
                  <div>
                    <Label className="text-xs text-muted-foreground">Date of Birth</Label>
                    <Input value="15/03/1985" className="mt-1" />
                  </div>
                  <div>
                    <Label className="text-xs text-muted-foreground">Passport Number</Label>
                    <Input value="N1234567" className="mt-1" />
                  </div>
                </div>
              </div>

              {/* Passenger 2 */}
              <div>
                <div className="text-sm font-semibold text-foreground mb-4">Passenger 2 (Adult)</div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="text-xs text-muted-foreground">First Name</Label>
                    <Input value="Sarah" className="mt-1" />
                  </div>
                  <div>
                    <Label className="text-xs text-muted-foreground">Last Name</Label>
                    <Input value="Smith" className="mt-1" />
                  </div>
                  <div>
                    <Label className="text-xs text-muted-foreground">Date of Birth</Label>
                    <Input value="22/07/1987" className="mt-1" />
                  </div>
                  <div>
                    <Label className="text-xs text-muted-foreground">Passport Number</Label>
                    <Input value="N7654321" className="mt-1" />
                  </div>
                </div>
              </div>
            </Card>

            {/* Contact Information */}
            <Card className="p-6 bg-card border-border">
              <h3 className="text-lg font-bold text-foreground mb-4">Contact Information</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-xs text-muted-foreground">Email</Label>
                  <Input value="john.smith@email.com" className="mt-1" />
                </div>
                <div>
                  <Label className="text-xs text-muted-foreground">Phone</Label>
                  <Input value="+1 (555) 123-4567" className="mt-1" />
                </div>
              </div>
            </Card>

            {/* Ancillaries */}
            <Card className="p-6 bg-card border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                  <Plus className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">Add-ons & Extras</h3>
                  <p className="text-xs text-muted-foreground">Enhance your travel experience</p>
                </div>
              </div>

              <div className="space-y-3">
                {ancillaries.map((ancillary) => (
                  <div 
                    key={ancillary.id}
                    className={`flex items-center justify-between p-4 rounded-lg border-2 transition-all ${
                      ancillary.selected 
                        ? 'border-accent bg-accent/10' 
                        : 'border-border bg-background'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Checkbox checked={ancillary.selected} />
                      <div>
                        <div className="text-sm font-semibold text-foreground">{ancillary.name}</div>
                        <div className="text-xs text-muted-foreground">Per person</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-foreground">+${ancillary.price}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Payment */}
            <Card className="p-6 bg-card border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">Payment Details</h3>
                  <p className="text-xs text-muted-foreground">Secure payment processing</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <Label className="text-xs text-muted-foreground">Card Number</Label>
                  <Input value="4532 •••• •••• 1234" className="mt-1" />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-2">
                    <Label className="text-xs text-muted-foreground">Expiry Date</Label>
                    <Input value="12/26" className="mt-1" />
                  </div>
                  <div>
                    <Label className="text-xs text-muted-foreground">CVV</Label>
                    <Input value="•••" type="password" className="mt-1" />
                  </div>
                </div>
                <div>
                  <Label className="text-xs text-muted-foreground">Cardholder Name</Label>
                  <Input value="John Smith" className="mt-1" />
                </div>
              </div>

              <div className="flex items-center gap-2 mt-6 p-3 rounded-lg bg-muted/30">
                <Shield className="w-4 h-4 text-green-600" />
                <span className="text-xs text-muted-foreground">
                  Your payment is secured with 256-bit SSL encryption
                </span>
              </div>
            </Card>
          </div>

          {/* Order Summary Sidebar */}
          <div>
            <Card className="p-6 bg-card border-border sticky top-8">
              <h3 className="text-lg font-bold text-foreground mb-6">Booking Summary</h3>

              {/* Flight Details */}
              <div className="mb-6 pb-6 border-b border-border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                    <Plane className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">JFK → LHR</div>
                    <div className="text-xs text-muted-foreground">British Airways • Economy</div>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Outbound</span>
                    <span className="text-foreground">Dec 15, 08:30</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Return</span>
                    <span className="text-foreground">Dec 22, 14:20</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Passengers</span>
                    <span className="text-foreground">2 Adults</span>
                  </div>
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Flight (2 × $687)</span>
                  <span className="text-foreground">${flightPrice}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Taxes & Fees</span>
                  <span className="text-foreground">${taxes}</span>
                </div>
                {selectedAncillaries.length > 0 && (
                  <>
                    <div className="pt-3 border-t border-border">
                      <div className="text-xs font-semibold text-muted-foreground mb-2">Add-ons</div>
                      {selectedAncillaries.map((ancillary) => (
                        <div key={ancillary.id} className="flex justify-between text-sm mb-2">
                          <span className="text-muted-foreground">{ancillary.name}</span>
                          <span className="text-foreground">${ancillary.price * 2}</span>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>

              <div className="pt-4 border-t border-border mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-foreground">Total</span>
                  <span className="text-2xl font-bold text-foreground">${total}</span>
                </div>
              </div>

              <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 h-12">
                <CheckCircle2 className="w-5 h-5 mr-2" />
                Complete Booking
              </Button>

              <div className="mt-4 text-center text-xs text-muted-foreground">
                Instant confirmation • 60-second checkout
              </div>
            </Card>
          </div>
        </div>
      </div>
    </MockupBrowser>
  );
};

export default CheckoutMockup;