import { QueryClient, QueryClientProvider } from "react-query";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RecoilRoot } from "recoil";


// Create a client
const queryClient = new QueryClient();

// Provide the client to your App
// QueryClientProvider client={queryClient}

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Faliled to find the root element");
const root = ReactDOM.createRoot(rootElement);
root.render(
  <>
 <RecoilRoot>
    <QueryClientProvider client={queryClient}>
        <App />
    </QueryClientProvider>
 </RecoilRoot>
  </>
);
