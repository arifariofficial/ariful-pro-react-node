import Footer from "./components/footer/footer";
import HomePage from "./components/home";
import NavBar from "./components/nav/nav-main";
import { ThemeProvider } from "./components/theme/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex flex-col">
        <NavBar />
        <HomePage />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
