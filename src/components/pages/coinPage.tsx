import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const fetchCoin = async (id:string)=>{
    const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
    if(!res.ok)throw new Error("Failed to fetch coin detail");
    return res.json();
}
function CoinPage() {
    const {id}= useParams();
    const {
        data: coin,
        isLoading,
        isError
    }=useQuery({
        queryKey:["coindetails", id],
        queryFn: ()=>fetchCoin(id!)
    });
    if (isLoading) return <div className="text-center mt-4">Loading...</div>;
    if (isError || !coin) return <div className="text-center mt-4 text-red-500">Something went wrong</div>;

  return (
    <div>
      <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-4">{coin.name}</h1>
      <img src={coin.image.large} alt={coin.name} className="w-32 h-32 mx-auto" />
      <p className="text-center text-lg mt-2">{coin.description.en.split(".")[0]}</p>
      <p className="text-center font-semibold text-xl mt-4">Current Price: ${coin.market_data.current_price.usd}</p>
      <p className="text-center text-gray-500 mt-2">Rank: {coin.market_cap_rank}</p>
    </div> 
    </div>
  )
}

export default CoinPage
