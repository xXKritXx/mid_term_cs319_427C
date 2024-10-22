function parseJSONData(jsonData: string): any {
    try {
        return JSON.parse(jsonData);
    } catch (error) {
        return 'Error parsing JSON data: ' + error.message; // Return custom error message
    }
}
