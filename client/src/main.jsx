import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "leaflet/dist/leaflet.css";
import App from "./App.jsx";
import { LoadScript } from "@react-google-maps/api";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./i18n";

const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <LoadScript googleMapsApiKey={apiKey} language="ka" region="GE">
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </StrictMode>
  </LoadScript>
);
