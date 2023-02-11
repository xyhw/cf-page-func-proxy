export default {
    async fetch(request, env) {
      let url = new URL(request.url);
      if (url.pathname.startsWith('/')) {
        url.hostname="http://144.24.85.65";
        let new_request=new Request(url,request);
        return fetch(new_request);
      }
      // Otherwise, serve the static assets.
      return env.ASSETS.fetch(request);
    }
  };
