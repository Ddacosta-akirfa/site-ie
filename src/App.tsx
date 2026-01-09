// import { Toaster, useToast } from "@/components/ui/sonner";
import { Toaster } from "sonner";
import { TooltipProvider } from "./components/ui/tooltip/Tooltip";
import NotFound from "./pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Pricing from "./pages/Pricing";
import Portfolio from "./pages/Portfolio";
import { ScrollToTop } from "./components/common/ScrollToTop";
// import Blog from "./pages/blog";

function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/sobre"} component={About} />
      {/* <Route path={"/blog"} component={Blog} /> */}
      <Route path={"/servicos"} component={Services} />
      <Route path={"/contato"} component={Contact} />
      <Route path={"/termos"} component={Terms} />
      <Route path={"/portfolio"} component={Portfolio} />
      <Route path={"/privacidade"} component={Privacy} />
      <Route path={"/precos"} component={Pricing} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <ScrollToTop />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
