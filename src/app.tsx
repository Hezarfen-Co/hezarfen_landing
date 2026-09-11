import { MetaProvider } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import "@fontsource-variable/inter";
import "@fontsource-variable/jetbrains-mono";
import "./app.css";

export default function App() {
  return (
    <Router
      root={props => (
        <MetaProvider>
          <div class="flex min-h-screen flex-col">
            <a
              href="#main"
              class="sr-only focus:not-sr-only focus:absolute focus:left-0 focus:top-0 focus:z-100 focus:rounded-br-md focus:bg-[var(--brand)] focus:px-4 focus:py-3 focus:text-white"
            >
              İçeriğe geç
            </a>
            <Header />
            <main id="main" class="flex-1">
              <Suspense>{props.children}</Suspense>
            </main>
            <Footer />
          </div>
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
