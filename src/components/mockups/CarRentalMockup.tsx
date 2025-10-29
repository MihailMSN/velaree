import MockupBrowser from "./MockupBrowser";
import { MapPin, Users, Briefcase, CheckCircle2, Fuel } from "lucide-react";

const CarRentalMockup = () => {
  const cars = [
    {
      name: "Toyota Camry",
      category: "Standard",
      image: "🚗",
      specs: { seats: 5, bags: 3, transmission: "Automatic", fuel: "Hybrid" },
      suppliers: [
        { name: "Hertz", price: 67, logo: "🚗" },
        { name: "Enterprise", price: 62, logo: "🚙", best: true },
        { name: "Budget", price: 71, logo: "🚕" }
      ]
    },
    {
      name: "BMW X5",
      category: "Luxury SUV",
      image: "🚙",
      specs: { seats: 7, bags: 5, transmission: "Automatic", fuel: "Premium" },
      suppliers: [
        { name: "Hertz", price: 142, logo: "🚗", best: true },
        { name: "Avis", price: 156, logo: "🚗" },
        { name: "Sixt", price: 149, logo: "🚙" }
      ]
    }
  ];

  return (
    <MockupBrowser url="app.velaree.com/cars/search">
      <div className="p-6 space-y-4">
        {/* Search Bar */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <div className="text-xs text-gray-500 mb-1">Pick-up Location</div>
              <div className="font-semibold flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                JFK Airport, New York
              </div>
            </div>
            <div className="flex-1">
              <div className="text-xs text-gray-500 mb-1">Pick-up → Drop-off</div>
              <div className="font-semibold">Dec 15, 10:00 AM → Dec 18, 10:00 AM</div>
            </div>
            <div className="flex-1">
              <div className="text-xs text-gray-500 mb-1">Driver Age</div>
              <div className="font-semibold">30 years</div>
            </div>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold">
              Search
            </button>
          </div>
        </div>

        {/* Results Header */}
        <div className="flex items-center justify-between px-2">
          <div className="text-sm text-gray-600">
            Found <span className="font-semibold">47 vehicles</span> from <span className="font-semibold">20+ suppliers</span>
          </div>
          <div className="text-xs text-green-600 flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3" />
            Response time: 423ms
          </div>
        </div>

        {/* Car Results */}
        {cars.map((car, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <div className="flex gap-4">
              {/* Car Image */}
              <div className="w-40 h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center text-6xl">
                {car.image}
              </div>

              {/* Car Info */}
              <div className="flex-1">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">{car.name}</h3>
                    <div className="text-sm text-gray-600">{car.category}</div>
                  </div>
                </div>

                {/* Specs */}
                <div className="flex gap-4 mb-4 text-sm">
                  <div className="flex items-center gap-1 text-gray-600">
                    <Users className="w-4 h-4" />
                    {car.specs.seats} Seats
                  </div>
                  <div className="flex items-center gap-1 text-gray-600">
                    <Briefcase className="w-4 h-4" />
                    {car.specs.bags} Bags
                  </div>
                  <div className="flex items-center gap-1 text-gray-600">
                    <Fuel className="w-4 h-4" />
                    {car.specs.fuel}
                  </div>
                  <div className="text-gray-600">
                    {car.specs.transmission}
                  </div>
                </div>

                {/* Supplier Prices */}
                <div className="border-t pt-3">
                  <div className="text-xs text-gray-500 mb-2">Available from multiple suppliers:</div>
                  <div className="grid grid-cols-3 gap-3">
                    {car.suppliers.map((supplier, i) => (
                      <div 
                        key={i} 
                        className={`p-3 rounded border ${
                          supplier.best 
                            ? 'border-green-500 bg-green-50' 
                            : 'border-gray-200 bg-gray-50'
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-lg">{supplier.logo}</span>
                          <span className="text-xs text-gray-600 font-medium">{supplier.name}</span>
                        </div>
                        <div className="font-bold text-gray-900">
                          ${supplier.price}/day
                        </div>
                        {supplier.best && (
                          <div className="text-xs font-semibold text-green-600 mt-1">Best Rate</div>
                        )}
                        <div className="text-xs text-gray-500 mt-1">Free cancellation</div>
                      </div>
                    ))}
                  </div>
                  {car.suppliers.find(s => s.best) && (
                    <button className="w-full mt-3 px-4 py-2 bg-blue-600 text-white rounded font-semibold text-sm">
                      Reserve Now - ${car.suppliers.find(s => s.best)!.price * 3} total (3 days)
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Features Footer */}
        <div className="bg-blue-50 rounded-lg p-4">
          <div className="grid grid-cols-3 gap-4 text-center text-sm">
            <div>
              <div className="font-semibold text-blue-900">Free Cancellation</div>
              <div className="text-blue-700">Up to 48 hours before pickup</div>
            </div>
            <div>
              <div className="font-semibold text-blue-900">No Hidden Fees</div>
              <div className="text-blue-700">All taxes & fees included</div>
            </div>
            <div>
              <div className="font-semibold text-blue-900">24/7 Support</div>
              <div className="text-blue-700">Call or chat anytime</div>
            </div>
          </div>
        </div>
      </div>
    </MockupBrowser>
  );
};

export default CarRentalMockup;
