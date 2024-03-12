function inject(src) {
  const host = document.body || document.head || document.documentElement;
  const script = document.createElement('script');

  script.setAttribute('type', 'text/javascript');
  script.setAttribute('src', src);

  host.appendChild(script);
}

const browser = globalThis.chrome || globalThis.edge;

inject(browser.runtime.getURL('scripts.js'));
