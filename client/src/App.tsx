import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactFlowProvider } from "@xyflow/react";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import HomePage from "@/pages/HomePage";
import EditorPage from "@/pages/EditorPage";


function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/editor" component={EditorPage} />

      {/* Ruta por defecto para capturar errores 404 internos */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactFlowProvider>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ReactFlowProvider>
    </QueryClientProvider>
  );
}

export default App;