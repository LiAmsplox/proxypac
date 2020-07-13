function FindProxyForURL(url, host) {
// If the protocol or URL matches, send direct.
    if (url.startsWith("http://limneos.net")) {
            return "PROXY 1proxy.creatable.cafe:80";
    }
    else {
        return "DIRECT";
    }
}
