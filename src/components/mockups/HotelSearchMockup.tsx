import MockupBrowser from "./MockupBrowser";
import { MapPin, Star, Wifi, Coffee, CheckCircle2 } from "lucide-react";

const HotelSearchMockup = () => {
  const hotels = [
    {
      name: "The Grand Plaza Hotel",
      location: "Manhattan, New York",
      stars: 5,
      rating: 4.8,
      reviews: 1247,
      image: "🏨",
      amenities: ["Free WiFi", "Breakfast", "Gym", "Pool"],
      suppliers: [
        { name: "TBO", price: 289 },
        { name: "RateHawk", price: 276, best: true },
        { name: "HotelBeds", price: 295 }
      ]
    },
    {
      name: "Riverside Boutique Inn",
      location: "Brooklyn, New York",
      stars: 4,
      rating: 4.6,
      reviews: 832,
      image: "🏩",
      amenities: ["Free WiFi", "Parking", "Restaurant"],
      suppliers: [
        { name: "TBO", price: 178 },
        { name: "RateHawk", price: 165, best: true },
        { name: "HotelBeds", price: 182 }
      ]
    }
  ];

  return (
    <MockupBrowser url="app.velaree.com/hotels/search">
      <div className="p-6 space-y-4">
        {/* Search Bar */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <div className="text-xs text-gray-500 mb-1">Destination</div>
              <div className="font-semibold">New York, NY</div>
            </div>
            <div className="flex-1">
              <div className="text-xs text-gray-500 mb-1">Check-in → Check-out</div>
              <div className="font-semibold">Dec 15 → Dec 18 (3 nights)</div>
            </div>
            <div className="flex-1">
              <div className="text-xs text-gray-500 mb-1">Guests</div>
              <div className="font-semibold">2 Adults, 1 Room</div>
            </div>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold">
              Search
            </button>
          </div>
        </div>

        {/* Results Header */}
        <div className="flex items-center justify-between px-2">
          <div className="text-sm text-gray-600">
            Searching <span className="font-semibold">2,147 hotels</span> across <span className="font-semibold">330+ suppliers</span>
          </div>
          <div className="text-xs text-green-600 flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3" />
            Response time: 612ms
          </div>
        </div>

        {/* Hotel Results */}
        {hotels.map((hotel, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <div className="flex gap-4">
              {/* Hotel Image */}
              <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center text-5xl">
                {hotel.image}
              </div>

              {/* Hotel Info */}
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">{hotel.name}</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="w-4 h-4" />
                      {hotel.location}
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(hotel.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                {/* Amenities */}
                <div className="flex gap-2 mb-3">
                  {hotel.amenities.map((amenity, i) => (
                    <span key={i} className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-700">
                      {amenity}
                    </span>
                  ))}
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 text-sm mb-3">
                  <div className="px-2 py-1 bg-blue-600 text-white rounded font-bold">
                    {hotel.rating}
                  </div>
                  <span className="text-gray-600">Excellent • {hotel.reviews} reviews</span>
                </div>

                {/* Supplier Prices */}
                <div className="border-t pt-3">
                  <div className="text-xs text-gray-500 mb-2">Compare rates from all suppliers:</div>
                  <div className="flex gap-3">
                    {hotel.suppliers.map((supplier, i) => (
                      <div 
                        key={i} 
                        className={`flex-1 p-2 rounded border ${
                          supplier.best 
                            ? 'border-green-500 bg-green-50' 
                            : 'border-gray-200 bg-gray-50'
                        }`}
                      >
                        <div className="text-xs text-gray-600">{supplier.name}</div>
                        <div className="font-bold text-gray-900">
                          ${supplier.price}
                          {supplier.best && (
                            <span className="ml-2 text-xs font-normal text-green-600">Best Rate</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  {hotel.suppliers.find(s => s.best) && (
                    <button className="w-full mt-2 px-4 py-2 bg-green-600 text-white rounded font-semibold text-sm">
                      Book Now at ${hotel.suppliers.find(s => s.best)!.price}/night
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </MockupBrowser>
  );
};

export default HotelSearchMockup;
