function FindProxyForURL(url, host) {
// If the protocol or URL matches, send direct.
    if (url.startsWith("http://limneos.net")) {
            return "PROXY 138.201.29.87:8080";
    }
    else {
        return "DIRECT";
    }
}
