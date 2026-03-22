import { Toaster } from "@/components/ui/toaster";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClientInstance } from "@/lib/query-client";
import NavigationTracker from "@/lib/NavigationTracker";
import { pagesConfig } from "./pages.config";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PageNotFound from "./lib/PageNotFound";
import { SidebarProvider } from "./contexts/SidebarContext";
import HamburgerButton from "./components/HamburgerButton";
import MobileSidebar from "./components/MobileSidebar";

const { Pages, mainPage } = pagesConfig;
const mainPageKey = mainPage ?? Object.keys(Pages)[0];
const MainPage = mainPageKey ? Pages[mainPageKey] : <></>;

function App() {
  return (
    <QueryClientProvider client={queryClientInstance}>
      <Router>
        <NavigationTracker />
        <SidebarProvider>
          <HamburgerButton />
          <MobileSidebar />
          <div className="pt-16 pl-4 md:pl-20 min-h-screen">
            <Routes>
              <Route path="/" element={<MainPage />} />
              {Object.entries(Pages).map(([path, Page]) => (
                <Route
                  key={path}
                  path={`/${path}`}
                  element={<Page />}
                />
              ))}
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </div>
        </SidebarProvider>
      </Router>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
