import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// ✅ You forgot to import this:
import { ContactFormProvider } from "@/context/ContactFormContext"; // Adjust the path if needed

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Trendwise from "./pages/Trendwise";
import Navbar from "./components/Navbar";
import Subscription from "./pages/Subscription";
import Subscriptionplatinum from "./pages/Subscriptionplatinum";
import Footer from "./components/Footer";
import Letstalk from "./pages/Letstalk";
import Movingtext from "./components/Movingtext";
import StandardDoandDon from "./pages/StandardDoandDon";
import TermsandConditions from "./pages/TermsandConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import Charter from "./pages/Charter";
import LegalDisclaimer from "./pages/LegalDisclaimer";
import GrievanceRedressalProcess from "./pages/GrievanceRedressalProcess";
import AdvertisementDisclaimer from "./pages/AdvertisementDisclaimer";
import RegisteredResearchAnalyst from "./pages/RegisteredResearchAnalyst";
import Disclosure from "./pages/Disclosure";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
        <BrowserRouter>
          <Navbar />
          <ContactFormProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/Trendwise" element={<Trendwise />} />
            <Route path="/Subscription" element={<Subscription />} />
            <Route path="/Subscriptionplatinum" element={<Subscriptionplatinum />} />
            <Route path="/Letstalk" element={<Letstalk />} />
            <Route path="*" element={<NotFound />} />
             <Route path="/Movingtext" element={<Movingtext />} />
             <Route path="/StandardDoandDon" element={<StandardDoandDon />} />
             <Route path="/TermsandConditions" element={<TermsandConditions />} />
             <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
             <Route path="/RefundPolicy" element={<RefundPolicy />} />
             <Route path="/Charter" element={<Charter />} />
             <Route path="/LegalDisclaimer" element={<LegalDisclaimer />} />
             <Route path="/GrievanceRedressalProcess" element={<GrievanceRedressalProcess />} />
             <Route path="/AdvertisementDisclaime" element={<AdvertisementDisclaimer />} />
             <Route path="/RegisteredResearchAnalyst" element={<RegisteredResearchAnalyst />} />
             <Route path="/Disclosure" element={<Disclosure />} />
          </Routes>
          </ContactFormProvider>
          <Footer />
        </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
