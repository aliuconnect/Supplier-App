export class ApiHelper {
    constructor(){
        this.apiUrl = "http://192.168.1.135:9000/v1/";
    }
    async FetchFromPortal(
        endpoint,
        method,
        authenticated,
        queryOptions,
        body,
    ) {
        let options = { method: method };
        let url = this.url + endpoint;
        options.headers = new Headers();
        options.headers.append("Content-Type", "application/json");
        if (queryOptions && typeof queryOptions === "object") {
            let queryParams = [] ;
            Object.keys(queryOptions).forEach(key => {
                queryParams.push(`${key}=${(queryOptions)[key]}`);
            });
            url += `?${queryParams.join("&")}`;
        }
        if (body) {
                options.body = JSON.stringify(body);
            }
        try {
            const response = await fetch(url, options);
            const jsonResponse =
                response.status === 204
                    ? null
                    : await response
                          .text()
                          .then(text => (text && text.length ? JSON.parse(text) : null));
            if (response.ok === false || response.status < 200 || response.status > 204) {
                throw {
                    code: response.status,
                    response,
                    responseObject: jsonResponse,
                };
            }
            return data.responseModel;
        } catch (err) {
            console.log("error", err);
        }
    }
}