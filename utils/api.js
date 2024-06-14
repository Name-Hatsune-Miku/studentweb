const baseURL = 'https://testshool.zzgoodqc.cn/';
// 封装 GET 请求
export function get(url, params) {
  return new Promise((resolve, reject) => {
    uni.request({
      url: baseURL + url,
      method: 'GET',
      data: params,
      success: res => {
        resolve(res.data);
      },
      fail: err => {
        reject(err);
      }
    });
  });
}

// 封装 POST 请求
export function post(url, data) {
  return new Promise((resolve, reject) => {
    uni.request({
      url: baseURL + url,
      method: 'POST',
      data: data,
      success: res => {
        resolve(res.data);
      },
      fail: err => {
        reject(err);
      }
    });
  });
}