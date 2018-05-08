function post(method, params) {
  //console.log(method,params);
  return new Promise((resolve, reject) => {
    $.ajax({
      url: '/rest/api/v1/' + method,
      type: 'POST',
      data: JSON.stringify(params),
      contentType: 'application/json',
      dataType: 'json',
      success: function(data) {
        resolve(data);
      },
      error: function(err) {
        reject(err);
      },
    });
  });
}

function put(method, params) {
  console.log(method, params);
  return new Promise((resolve, reject) => {
    $.ajax({
      url: '/rest/api/v1/' + method,
      type: 'PUT',
      data: JSON.stringify(params),
      contentType: 'application/json',
      dataType: 'json',
      success: function(data) {
        resolve(data);
      },
      error: function(err) {
        reject(err);
      },
    });
  });
}

function get(method) {
  //console.log(method,params);
  return new Promise((resolve, reject) => {
    $.ajax({
      url: '/rest/api/v1/' + method,
      type: 'GET',
      success: function(data) {
        resolve(data);
      },
      error: function(request, err) {
        console.log(err);
        reject(err);
      },
    });
  });
}

function getWithQuery(method, params) {
  //console.log(method,params);
  return new Promise((resolve, reject) => {
    $.ajax({
      url: '/rest/api/v1/' + method + '?query=' + params.query,
      type: 'GET',
      success: function(data) {
        resolve(data);
      },
      error: function(request, err) {
        console.log(err);
        reject(err);
      },
    });
  });
}

export { post, put, get, getWithQuery };
