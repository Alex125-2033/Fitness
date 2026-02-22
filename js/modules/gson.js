function gson() {
    // 88 Подробно про npm и проект . JSON-server.

    fetch('db.json')
        .then(data => data.json())
        .then(res => console.log(res));
}

export default gson;