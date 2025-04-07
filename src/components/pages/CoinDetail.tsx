import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

interface Coin {
  id: string;
  name: string;
  image: string;
  current_price: number;
}

const fetchCoins = async (): Promise<Coin[]> => {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false"
  );
  if (!res.ok) throw new Error("Network response was not ok");
  return res.json();
};

function CoinDetail() {
  const {
    data: coins,
    isLoading,
    isError,
  } = useQuery<Coin[]>({
    queryKey: ["coins"],
    queryFn: fetchCoins,
  });

  const [selectedCoin, setSelectedCoin] = useState<Coin | null>(null);

  if (isLoading)
    return <div className="p-4 text-center text-xl animate-pulse">Loading...</div>;

  if (isError)
    return (
      <div className="p-4 text-center text-red-500 text-xl">
        Something went wrong!
      </div>
    );

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold text-center mb-8">Top Coins</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {coins.map((coin, index) => (
          <motion.div
            key={coin.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gradient-to-br from-zinc-900 to-zinc-800 border border-zinc-700 rounded-2xl p-6 shadow-xl relative overflow-hidden group hover:scale-105 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            onClick={() => setSelectedCoin(coin)}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none blur-md" />
            <img
              src={coin.image}
              alt={coin.name}
              className="w-16 h-16 mx-auto mb-4 transition-transform duration-300 group-hover:scale-110"
            />
            <h2 className="text-xl font-semibold text-center text-white">{coin.name}</h2>
            <p className="text-center text-gray-400 text-sm mb-2">${coin.current_price}</p>
            <button className="text-xs bg-white text-zinc-800 px-3 py-1 rounded-full mt-2 hover:bg-yellow-300 transition-all">
              ☆ Add to Favorite
            </button>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {selectedCoin && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-zinc-900 p-6 rounded-xl text-white w-[90%] max-w-md relative">
            <button
              className="absolute top-2 right-2 text-white text-2xl hover:text-red-400"
              onClick={() => setSelectedCoin(null)}
            >
              &times;
            </button>
            <img src={selectedCoin.image} alt={selectedCoin.name} className="w-20 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-center">{selectedCoin.name}</h2>
            <p className="text-center text-lg text-gray-300 mb-2">
              Price: ${selectedCoin.current_price}
            </p>
            <p className="text-center text-sm text-gray-500">More info coming soon...</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default CoinDetail;
