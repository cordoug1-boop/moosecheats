import React, { useState } from "react";

// Sample products with multiple tiers
const products = [
  {
    id: 1,
    name: "Moose Cheat Basic",
    tiers: [
      { label: "Basic", price: 5 },
      { label: "Pro", price: 10 },
      { label: "Premium", price: 20 },
    ],
  },
  {
    id: 2,
    name: "Moose Cheat Advanced",
    tiers: [
      { label: "Starter", price: 7 },
      { label: "Elite", price: 15 },
    ],
  },
  {
    id: 3,
    name: "Moose Cheat Pro",
    tiers: [
      { label: "Standard", price: 12 },
      { label: "Professional", price: 25 },
      { label: "Enterprise", price: 50 },
    ],
  },
  {
    id: 4,
    name: "Moose Cheat VIP",
    tiers: [
      { label: "VIP Bronze", price: 15 },
      { label: "VIP Silver", price: 30 },
      { label: "VIP Gold", price: 60 },
    ],
  },
  // Add more products here
];

export default function ProductGrid() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedTier, setSelectedTier] = useState(null);

  const openModal = (product) => {
    setSelectedProduct(product);
    setSelectedTier(null);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setSelectedTier(null);
  };

  const generateSkrillLink = () => {
    if (!selectedProduct || !selectedTier) return "#";
    const amount = selectedTier.price;
    const productName = encodeURIComponent(selectedProduct.name + " - " + selectedTier.label);
    return `https://www.skrill.com/pay?pay_to=GOOSECHEATS@GMAIL.COM&amount=${amount}&currency=USD&item_name=${productName}&return_url=https://moosecheats-3.onrender.com/success&cancel_url=https://moosecheats-3.onrender.com/cancel`;
  };

  const generateCashAppLink = () => {
    if (!selectedTier) return "#";
    const amount = selectedTier.price;
    return `https://cash.app/$MOOSECHEATS/${amount}`;
  };

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white">
      <h1 className="text-3xl mb-6">Moose Cheats Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-gray-800 p-4 rounded shadow hover:shadow-lg cursor-pointer"
            onClick={() => openModal(product)}
          >
            <h2 className="text-xl font-bold">{product.name}</h2>
            <p>{product.tiers.map(t => t.label).join(", ")}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-gray-800 p-6 rounded w-96">
            <h2 className="text-2xl mb-4">{selectedProduct.name}</h2>
            <div className="mb-4">
              <p>Select a Tier:</p>
              {selectedProduct.tiers.map((tier, idx) => (
                <button
                  key={idx}
                  className={`block w-full py-2 my-1 rounded ${
                    selectedTier === tier ? "bg-green-600" : "bg-gray-700"
                  } hover:bg-green-500`}
                  onClick={() => setSelectedTier(tier)}
                >
                  {tier.label} - ${tier.price}
                </button>
              ))}
            </div>
            <div className="flex justify-between">
              <a
                href={generateSkrillLink()}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-4 py-2 rounded bg-blue-600 hover:bg-blue-500 ${
                  !selectedTier && "opacity-50 pointer-events-none"
                }`}
              >
                Pay with Skrill
              </a>
              <a
                href={generateCashAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-4 py-2 rounded bg-purple-600 hover:bg-purple-500 ${
                  !selectedTier && "opacity-50 pointer-events-none"
                }`}
              >
                Pay with Cash App
              </a>
            </div>
            <button
              onClick={closeModal}
              className="mt-4 w-full py-2 rounded bg-red-600 hover:bg-red-500"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
