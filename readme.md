
### 文件路径

├── dist
│   ├── build.js
│   ├── index.html
│   └── main.js
├── index.html
├── package.json
├── src
│   ├── components                  // 组件文件夹
│   │   ├── app.vue
│   │   └── hello.vue
│   ├── main.js
│   ├── router                      //路由文件夹
│   │   ├── index.js
│   │   └── routes.js
│   ├── store                      //vuex文件:vuex通常用于存放和管理不同组件中的共用状态，例如不同路由页面之间的公共数据
│   │   ├── index.js
│   │   ├── modules
│   │   │   └── counter
│   │   │       ├── actions.js
│   │   │       └── index.js
│   │   └── types.js
│   └── views
│       └── Home.vue
├── webpack.config                 //webpack配置文件
│   ├── base.js
│   ├── dev.js
│   └── pro.js
└── yarn.lock
