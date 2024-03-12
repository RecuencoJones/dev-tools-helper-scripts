globalThis.hack = globalThis.hack || {};

globalThis.hack.extractJSON = async (promise) => {
  const r = await promise;

  return r.json();
};

globalThis.hack.fetchJSON = async (...fetchOptions) => {
  return globalThis.hack.extractJSON(fetch(...fetchOptions));
};

globalThis.hack.log = async (promiseOrData) => {
  console.log(await promiseOrData);
};

globalThis.hack.logJSON = async (fetchPromise) => {
  globalThis.hack.log(globalThis.hack.extractJSON(fetchPromise));
};
