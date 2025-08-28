import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";   // ← remove BrowserRouter
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ScrollToTop from "@/components/ui/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />

      {/* Router is provided by main.tsx (HashRouter) */}
      <Routes>
        <Route path="/" element={<Index />} />
        {/* Add your other routes above the catch-all */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      <ScrollToTop />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
