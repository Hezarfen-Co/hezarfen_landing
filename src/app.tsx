import { MetaProvider } from "@solidjs/meta";
import { Router, useIsRouting, useLocation } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { createEffect, on, Suspense, type JSX } from "solid-js";
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import "@fontsource-variable/inter";
import "@fontsource-variable/jetbrains-mono";
import "./app.css";

/**
 * The routed part of the page. A route's code arrives on demand, and until it
 * does the router keeps the old page on screen — correct, but with nothing
 * moving a click reads as a click that did nothing. So a bar runs along the
 * top while the next page loads, and the new page fades in once it lands.
 * Hash changes on the same page are scrolling, not navigation, and get
 * neither.
 */
function Shell(props: { children: JSX.Element }) {
  const location = useLocation();
  const routing = useIsRouting();
  let main!: HTMLElement;

  createEffect(
    on(
      () => location.pathname,
      () => {
        // Restart the animation: drop the class, force a style flush, re-add.
        main.classList.remove("hz-page-in");
        void main.offsetWidth;
        main.classList.add("hz-page-in");
      },
      { defer: true },
    ),
  );

  return (
    <>
      <div class="hz-route-progress" classList={{ "is-active": routing() }} aria-hidden="true" />
      <main ref={main} id="main" class="flex-1">
        <Suspense>{props.children}</Suspense>
      </main>
    </>
  );
}

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
            <Shell>{props.children}</Shell>
            <Footer />
          </div>
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
