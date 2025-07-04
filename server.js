'use strict';

const express = require('express');
const app = express();
const port = process.env.PORT || 3301;
const store = require('./index');
const bodyParser = require('body-parser');

// 解析 JSON 请求体
app.use(bodyParser.json());

// 定义 app 接口
app.get('/app', async (req, res) => {
  try {
    const result = await store.app(req.query);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 定义 list 接口
app.get('/list', async (req, res) => {
  try {
    const result = await store.list(req.query);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 可按需添加其他接口，如 search、developer 等

// 启动服务器
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
