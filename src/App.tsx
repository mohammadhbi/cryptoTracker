// App.tsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; // اضافه شده
import Home from "./components/pages/Home";
import CoinDetail from "./components/pages/CoinDetail";
import CoinPage from "./components/pages/coinPage";
import News from "./components/pages/News";
import Watchlist from "./components/pages/Watchlist";
import Admin from "./components/pages/Admin";
import Navbar from "./components/layout/Navbar";

// یه QueryClient بساز
const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}> {/* دور همه‌چیز */}
   
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coins" element={<CoinDetail />} />
           <Route path="/coin/:id" element={<CoinPage />} /> 
          <Route path="/news" element={<News />} />
          <Route path="/watchlist" element={<Watchlist />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      
    </QueryClientProvider>
  );
};

export default App;