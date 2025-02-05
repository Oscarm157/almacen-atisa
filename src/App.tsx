
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Existencia from "./pages/Existencia";
import Conteos from "./pages/Conteos";
import Ubicacion from "./pages/Ubicacion";
import Reportes from "./pages/Reportes";
import MaxMin from "./pages/MaxMin";
import Etiquetas from "./pages/Etiquetas";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Existencia />} />
          <Route path="/conteos" element={<Conteos />} />
          <Route path="/ubicacion" element={<Ubicacion />} />
          <Route path="/reportes" element={<Reportes />} />
          <Route path="/maxmin" element={<MaxMin />} />
          <Route path="/etiquetas" element={<Etiquetas />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
