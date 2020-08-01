const newAjax = function (url) {
    return new Promise(function (resolve, reject) {
        const xhr = new XMLHttpRequest();
        xhr.open('get', url);
        xhr.send(data);
        xhr.onreadystatechange = function () {
            if (xhr.status == 200 && readyState == 4) {
                const json = JSON.parse(xhr.responseText);
                resolve(json)
            } else if (xhr.readyState == 4 && xhr.status != 200) {
                reject('error');
            }
        }
    })
}

const getJSON = function(url) {
  const promise = new Promise(function(resolve, reject){
    const handler = function() {
      if (this.readyState !== 4) {
        return;
      }
      if (this.status === 200) {
        resolve(this.response);
      } else {
        reject(new Error(this.statusText));
      }
    };
    const client = new XMLHttpRequest();
    client.open("GET", url);
    client.onreadystatechange = handler;
    client.responseType = "json";
    client.setRequestHeader("Accept", "application/json");
    client.send();

  });

  return promise;
};

getJSON("/posts.json").then(function(json) {
  console.log('Contents: ' + json);
}, function(error) {
  console.error('出错了', error);
});