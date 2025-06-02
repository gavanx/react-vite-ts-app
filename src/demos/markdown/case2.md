# Markdown 预览示例

这是一个 **加粗文本** 和 *斜体文本* 的示例。

## 代码高亮演示

### JavaScriptfunction fetchData(url) {
  return fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log('获取的数据:', data);
      return data;
    })
    .catch(error => console.error('请求出错:', error));
}

// 异步函数示例
async function getUsers() {
  try {
    const users = await fetchData('https://api.example.com/users');
    return users.map(user => user.name);
  } catch (error) {
    console.error('获取用户失败:', error);
    throw error;
  }
}
### Pythondef calculate_average(numbers):
    """计算一组数字的平均值"""
    if not numbers:
        return 0
    return sum(numbers) / len(numbers)

# 使用示例
data = [10, 15, 20, 25, 30]
average = calculate_average(data)
print(f"平均值是: {average}")
### HTML & CSS<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
  <style>
    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background-color: #f0f0f0;
    }
    
    .button {
      padding: 10px 20px;
      background-color: #3498db;
      color: white;
      border-radius: 5px;
      transition: background-color 0.3s;
    }
    
    .button:hover {
      background-color: #2980b9;
    }
  </style>
</head>
<body>
  <div class="container">
    <button class="button">点击我</button>
  </div>
</body>
</html>
## 其他 Markdown 元素

### 列表
- 项目 1
- 项目 2
  - 子项目 A
  - 子项目 B
- 项目 3

### 表格
| 姓名 | 年龄 | 职业 |
|------|------|------|
| 张三 | 28   | 工程师 |
| 李四 | 32   | 设计师 |
| 王五 | 45   | 产品经理 |

### 引用
> 这是一段引用文本。
> 可以包含多行内容。

### 链接
[访问百度](https://www.baidu.com)

### 图片
![示例图片](https://picsum.photos/800/400)
          