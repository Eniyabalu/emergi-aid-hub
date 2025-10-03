import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import SOS from "./pages/SOS";
import Volunteers from "./pages/Volunteers";
import Communication from "./pages/Communication";
import Ledger from "./pages/Ledger";
import Rewards from "./pages/Rewards";
import Insights from "./pages/Insights";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<SOS />} />
          <Route path="/volunteers" element={<Volunteers />} />
          <Route path="/communication" element={<Communication />} />
          <Route path="/ledger" element={<Ledger />} />
          <Route path="/rewards" element={<Rewards />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
