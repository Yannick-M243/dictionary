test('The data is example', () => {
    return fetch("https://www.dictionaryapi.com/api/v3/references/collegiate/json/example?key=68c296af-9158-486e-a10f-45a8de8d70da").then(res => res.json())
        .then((result) => {
        expect(result[0].fl).toBe("noun");
    });
});