# 前端代码规范

> 简介：使用 Eslint + Prettier + husky + lint-staged 提高前端项目质量和统一项目代码风格，参考资料：
>
> - [「使用 Eslint + Prettier + husky + lint-staged 提高前端项目质量、统一项目代码风格」](https://juejin.cn/post/6844903889670520845)
> - [「eslint + husky + prettier + lint-staged 提升前端应用质量」](https://juejin.cn/post/6844903778227847181)
> - [「从零配置 Eslint + Prettier + husky + lint-staged 构建前端代码工作流」](https://segmentfault.com/a/1190000022497035)



# 1. 插件介绍

- [eslint](https://eslint.org/)：可组装的 JavaScript 和 JSX 检查工具，用于校验我们的代码是否符合所定义的规范；
- [prettier](https://prettier.io/)：用于统一代码格式的，eslint 主要是用来对代码规范的扫描，而 prettier 则是专门用来对代码进行格式化；
- [lint-staged](https://github.com/okonet/lint-staged)：通过 lint-staged 来识别被加入到 stage 区文件，每次只对当前修改后的文件进行扫描即可，而不是全部文件；
- [husky](https://typicode.github.io/husky)：git hooks 工具，可以防止使用 Git hooks 的一些不好的 commit 或者 push；

# 2. 执行流程

1. 待提交的代码 git add 添加到暂存区；
2. 执行 git commit；
3. husky 注册在 git pre-commit 的钩子函数被调用，执行 lint-staged；
4. lint-staged 只对当前 add 到 git stage 区的文件进行扫描操作（ESLint 和 Prettier）
5. 如果有错误（没通过 ESlint 检查）则停止任务，同时打印错误信息，等待修复后再执行 commit；
6. 如果没有错误的话，则可push到远程。

# 3. 配置说明

> 以 Vue 项目为例进行说明！！！

安装 eslint，对 .vue 文件进行代码检测需要额外安装[「eslint-plugin-vue」](https://eslint.vuejs.org/)， 一般 vue cil 都已经安装了

```shell
$npm install eslint -D
$npm install eslint-plugin-vue -D
```

还可以额外选择规则包进行安装，规则包以 eslint-config- 开头，例如 eslint-config-ali，eslint-config-standard 等

```shell
$npm install eslint-config-ali -D
```

安装 prettier

```shell
$npm install prettier -D
```

使用 prettier 和 eslint 可能存在一些规则冲突，使用 eslint-plugin-prettier 和 eslint-config-prettier 进行解决

```shell
$npm install eslint-plugin-prettier eslint-config-prettier -D 
```

安装 lint-staged

```shell
$npm install lint-staged -D 
```

安装 husky

```shell
$npm install husky -D 
```

## 3.1 husky 配置

在表示在 pre-commit 和 pre-push 时执行 lint-staged

```json
// package.json
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged",
      "pre-push": "lint-staged"
    },
  }
}
```

## 3.2 lint-staged 配置

1. 执行 eslint --fix 操作，进行扫描，若发现工具可修复的问题进行 fix；
2. 执行 prettier 脚本，这是对代码进行格式化的；
3. 上述两项任务完成后对代码重新 add。

```json
// package.json
{
  "lint-staged": {
    "*.js": [
      "eslint --fix",
      "prettier --write",
      "git add"
    ],
    "*.vue": [
      "eslint --fix",
      "prettier --write",
      "git add"
    ]
  }
}
```

## 3.3 eslint 配置

配置 .eslintrc.js 文件或直接在 package.json 文件添加 `"eslintConfig": {}`

```javascript
// .eslintrc.js
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/essential",
    "eslint:recommended",
    "@vue/prettier",
    "prettier",
  ],
  parserOptions: {
    parser: "babel-eslint",
  },
  "plugins": ["prettier"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    // 举例说明，具体自行配置
    "prettier/prettier": "error", // 表示被 prettier 标记的地方抛出错误
  },
};
```

## 3.4 prettier 配置

配置 .prettierrc.js 文件或直接在 package.json 文件添加 `"prettier": {}`

```javascript
// .prettierrc.js
module.exports = {
  "#": "prettier config in here :)",
  "singleQuote": true, // 字符串是否使用单引号，默认为false，使用双引号
  "semi": false, // 行位是否使用分号，默认为true
  "trailingComma": "none", // 是否使用尾逗号，有三个可选值"<none|es5|all>"
  "htmlWhitespaceSensitivity": "ignore" // 不使用的话结束标签 > 会跑到下一行，迷惑行为
}
```



------

项目内容有错误或存在侵权，请提交 issues 进行指正，合作请邮件 <a href="mailto:EnvisionShen@gmail.com">EnvisionShen@gmail.com </a>联系。

