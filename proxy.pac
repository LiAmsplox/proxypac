function FindProxyForURL(url, host) {
// If the protocol or URL matches, send direct.
    if (url.startsWith("http://limneos.net")) {
            return "PROXY http://40.87.20.96:80";
    }
    else {
        return "DIRECT";
    }
}
