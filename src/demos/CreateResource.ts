/*
实现一个createResource函数 
基本原理是执行传入的promise，promise未resolved时将其throw出去，否则将结果存起来
供下次render时使用
 */
const cache = {};
export function createResource(fetch) {
  const resource = {
    read: (params) => {
      // 临时用id做个缓存
      if (!cache[params]) {
        const promise = fetch(params);
        let suspender = promise.then(
          (r) => {
            cache[params].status = "resolved";
            cache[params].result = r;
          },
          (e) => {
            cache[params].status = "rejected";
            cache[params].result = e;
          }
        );
        cache[params] = {
          promise: suspender,
          status: "pending",
          result: null
        };
        throw suspender;
      } else {
        if (cache[params].status === "resolved") {
          return cache[params].result;
        }
        throw cache[params].promise;
      }
    }
  };
  return resource;
}
