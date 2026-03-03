import React, { useState } from 'react';

const products = [
  {
    id: 'torix-vpn',
    name: 'Torix VPN – Fast & Secure',
    image: 'https://chestercheats.com/uploads/monthly_2026_02/01.png.23ae76bbde89dea97fa6cea6ff6e534b.png',
    description: 'Premium VPN service with military-grade encryption, unlimited bandwidth, and servers worldwide.',
    price: '$9.99',
    pricingOptions: [
      { duration: '1 Week', price: '$4.99', priceValue: 4.99 },
      { duration: '1 Month', price: '$9.99', priceValue: 9.99, popular: true },
      { duration: '3 Months', price: '$24.99', priceValue: 24.99 }
    ],
    features: [
      'Military-grade encryption',
      'Unlimited bandwidth',
      'Global server network',
      'No logs policy',
      '24/7 customer support'
    ]
  },
  {
    id: 'hwid-spoofers',
    name: 'HWID Spoofers',
    image: 'https://chestercheats.com/uploads/monthly_2025_07/HWID.jpg.9330fe6fcd0f43c797ccb853a7464e27.jpg',
    description: 'Advanced hardware ID spoofing to protect your system identity and bypass hardware bans.',
    price: '$19.99',
    pricingOptions: [
      { duration: '1 Day', price: '$9.99', priceValue: 9.99 },
      { duration: '1 Week', price: '$19.99', priceValue: 19.99, popular: true },
      { duration: '1 Month', price: '$49.99', priceValue: 49.99 }
    ],
    features: [
      'Full HWID protection',
      'Bypass hardware bans',
      'Easy one-click setup',
      'Regular updates',
      'Compatible with all major games'
    ]
  },
  {
    id: '8-ball-pool',
    name: '8 Ball Pool Cheats',
    image: 'https://chestercheats.com/uploads/monthly_2025_07/8BallPool.jpg.2d1b236ddf96d55abedcd35f9e58fcf9.jpg',
    description: 'Dominate 8 Ball Pool with advanced aiming assistance, extended guidelines, and auto-win features.',
    price: '$14.99',
    pricingOptions: [
      { duration: '1 Day', price: '$4.99', priceValue: 4.99 },
      { duration: '1 Week', price: '$14.99', priceValue: 14.99, popular: true },
      { duration: '1 Month', price: '$39.99', priceValue: 39.99 }
    ],
    features: [
      'Extended aim lines',
      'Auto-win capability',
      'Coin generator',
      'Anti-ban protection',
      'Works on all platforms'
    ]
  }
];

const PaymentMethodSelector: React.FC<{
  amount: number;
  productName: string;
  onClose: () => void;
}> = ({ amount, productName, onClose }) => {
  const skrillLink = `https://pay.skrill.com?pay_to_email=GOOSECHEATS@GMAIL.COM&amount=${amount}&currency=USD&detail1_description=${encodeURIComponent(
    productName
  )}&detail1_text=${encodeURIComponent(productName)}&return_url=https://moosecheats-3.onrender.com/success`;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-gray-900 rounded-lg p-8 max-w-md w-full mx-4">
        <h3 className="text-white text-xl font-bold mb-6">Select Payment Method</h3>
        <p className="text-gray-300 mb-6">
          Amount: <span className="text-violet-400 font-bold">${amount.toFixed(2)}</span>
        </p>

        <div className="space-y-3">
          <a
            href={skrillLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-violet-500 hover:bg-violet-600 text-white font-bold py-3 px-4 rounded-lg text-center transition-colors"
          >
            Pay with Skrill
          </a>

          <a
            href="https://cash.app/$MOOSECHEATS"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-lg text-center transition-colors"
          >
            Pay with Cash App
          </a>

          <button
            onClick={onClose}
            className="w-full bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-4 rounded-lg transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

const ProductGrid = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedPricing, setSelectedPricing] = useState<PricingOption | null>(null);
  const [showPayment, setShowPayment] = useState(false);

  const handleSelectPricing = (product: Product, pricing: PricingOption) => {
    setSelectedProduct(product);
    setSelectedPricing(pricing);
    setShowPayment(true);
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <ul className="box-border caret-transparent gap-x-[13px] grid grid-cols-[repeat(auto-fill,minmax(315px,1fr))] list-none gap-y-[13px] p-[26px]">
        {products.map((product) => (
          <li
            key={product.id}
            className="relative box-border caret-transparent z-[1] p-0.5 rounded-[5px]"
          >
            <div className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
              <div
                className="aspect-video bg-cover bg-center"
                style={{ backgroundImage: `url(${product.image})` }}
              />
              <div className="p-4 flex flex-col flex-grow">
                <h2 className="text-white font-bold text-lg mb-2">{product.name}</h2>
                <p className="text-gray-300 text-sm mb-4 flex-grow">{product.description}</p>
                <div className="space-y-2">
                  {product.pricingOptions?.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSelectPricing(product, option)}
                      className={`w-full py-2 px-3 rounded text-sm font-semibold transition-colors ${
                        option.popular
                          ? 'bg-violet-500 hover:bg-violet-600 text-white'
                          : 'bg-gray-700 hover:bg-gray-600 text-white'
                      }`}
                    >
                      {option.duration} - {option.price}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {showPayment && selectedProduct && selectedPricing && (
        <PaymentMethodSelector
          amount={selectedPricing.priceValue}
          productName={selectedProduct.name}
          onClose={() => {
            setShowPayment(false);
            setSelectedProduct(null);
            setSelectedPricing(null);
          }}
        />
      )}
    </div>
  );
};

export default ProductGrid;
