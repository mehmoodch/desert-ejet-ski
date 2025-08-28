import { Outlet } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "@/components/ui/ScrollToTop";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function AppLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {/* global ui */}
        <Toaster />
        <Sonner />

        {/* your pages render here */}
        <Outlet />

        {/* helpers */}
        <ScrollToTop />
      </TooltipProvider>
    </QueryClientProvider>
  );
}
