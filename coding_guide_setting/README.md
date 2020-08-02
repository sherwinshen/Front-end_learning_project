# 代码规范

> 简介：本文主要介绍前端代码规范，以及如何在项目中进行配置。
>
> 本文作者：[SherwinShen](https://github.com/MrEnvision)   创建日期：2020-08-01
>



## 1. 规范参考

### 1.1 HTML/CSS/JS规范

> 参考资料：[Code Guide by @AlloyTeam](http://alloyteam.github.io/CodeGuide/)（仅供参考，有点老） [CSS-BEM规范](http://getbem.com)

1）命名：

- 文件命名采用小写方式， 以下划线分隔，有复数结构时，要采用复数命名法。例如：my_project_name，account_models.js，retina_sprites.scss...
- CSS 类名使用小写字母，以中划线分隔；id 使用驼峰式命名；scss中的变量、函数、混合、placeholder采用驼峰式命名。

```scss
/* class */
.element-content {
    ...
}

/* id */
#myDialog {
    ...
}

/* 变量 */
$colorBlack: #000;

/* 函数 */
@function pxToRem($px) {
    ...
}

/* 混合 */
@mixin centerBlock {
    ...
}

/* placeholder */
%myDialog {
    ...
}
```

- JS 命名：标准变量采用驼峰式命名；常量全大写，用下划线连接；构造函数，大写第一个字母。

```js
let thisIsMyName;

const MAX_COUNT = 10;

function Person(name) {
    this.name = name;
}
```

2）标签属性顺序：

- `class`
- `id`
- `name`
- `data-*`
- `src`, `for`, `type`, `href`, `value` , `max-length`, `max`, `min`, `pattern`
- `placeholder`, `title`, `alt`
- `aria-*`, `role`
- `required`, `readonly`, `disabled`

3）CSS 书写顺序详见参考资料

4）双引号、单引号：

- HTML 标签属性使用双引号；
- CSS 最外层使用双引号；
- JS 最外层使用**单引号**；

### 1.2 Vue规范

> 参考资料：[Vue风格指南](https://cn.vuejs.org/v2/style-guide/)

1）命名（更具体详见参考资料）：

- 组件名要是多个单词的，例如：TodoItem 通过 todo-item 调用......
- 单文件组件的文件名应该要么始终是单词大写开头 (PascalCase)，要么始终是横线连接 (kebab-case)，例如MyComponent.vue，my-component.vue......
- 应用特定样式和约定的基础组件 (也就是展示类的、无逻辑的或无状态的组件) 应全部以一个特定前缀开头，比如 `Base`、`App` 或 `V`

```
components/
|- BaseButton.vue
|- BaseTable.vue
|- BaseIcon.vue
components/
|- AppButton.vue
|- AppTable.vue
|- AppIcon.vue
components/
|- VButton.vue
|- VTable.vue
|- VIcon.vue
```

- props命名：

```
props: {
  greetingText: String
}
<WelcomeMessage greeting-text="hi"/>
```

2）组件/实例的书写顺序：常用 name -> components -> props -> data -> computed -> watch -> methods

**副作用** (触发组件外的影响)

- `el`

**全局感知** (要求组件以外的知识)

- `name`
- `parent`

**组件类型** (更改组件的类型)

- `functional`

**模板修改器** (改变模板的编译方式)

- `delimiters`
- `comments`

**模板依赖** (模板内使用的资源)

- `components`
- `directives`
- `filters`

**组合** (向选项里合并 property)

- `extends`
- `mixins`

**接口** (组件的接口)

- `inheritAttrs`
- `model`
- `props`/`propsData`

**本地状态** (本地的响应式 property)

- `data`
- `computed`

**事件** (通过响应式事件触发的回调)

- `watch`
- 生命周期钩子 (按照它们被调用的顺序)
  - `beforeCreate`
  - `created`
  - `beforeMount`
  - `mounted`
  - `beforeUpdate`
  - `updated`
  - `activated`
  - `deactivated`
  - `beforeDestroy`
  - `destroyed`

**非响应式的 property** (不依赖响应系统的实例 property)

- `methods`

**渲染** (组件输出的声明式描述)

- `template`/`render`
- `renderError`



## 2. 自动代码规范配置

> 我们主要采用 **eslint + husky + prettier + lint-staged** 来配置我们的自动化代码规范。

### 2.1 插件说明

- eslint：可组装的JavaScript和JSX检查工具，用于校验我们的代码是否符合所定义的规范；

- lint-staged：通过 lint-staged 来识别被加入到stage区文件，每次只对当前修改后的文件进行扫描即可；

- prettier：用于统一代码格式的，eslint 主要是用来对代码规范的扫描，而prettier则是专门用来对代码进行格式化；

- husky：git hooks 工具，可以防止使用 Git hooks 的一些不好的 commit 或者 push；

### 2.2 配置（仅供参考）

安装依赖

```shell
// 安装 eslint (一般 vue cil 已经安装了)
npm install eslint -D
npm install eslint-plugin-vue -D // 对 .vue 文件中的 js 代码进行检测
npm install @vue/eslint-config-prettier -D // （可选）规则包以eslint-config-开头，如eslint-config-ali,eslint-config-standard等

// 安装 prettier
npm install prettier -D
npm install eslint-plugin-prettier eslint-config-prettier -D // 配合 eslint 的插件

// 安装 lint-staged
npm install lint-staged -D 

// 安装 husky
npm install husky -D 
```

配置 .eslintrc.js 文件或直接在 package.json 文件添加 `"eslintConfig": {}`

```json
// package.json
{
  "eslintConfig": {
    "root": true,
    "env": {
      "node": true
    },
    "extends": [
      "plugin:vue/essential",
      "eslint:recommended",
      "prettier",
      "@vue/prettier"
    ],
    "parserOptions": {
      "parser": "babel-eslint"
    },
    "rules": {
      "prettier/prettier": [
        "warn",
        {
          "#": "prettier config in here :)",
          "singleQuote": true,
          "semi": false,
          "trailingComma": "none"
        }
      ]
    }
  },
}
```

配置 husky

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

配置 prettier

```json
// package.json
{
  "prettier": {
    "#": "prettier config in here :)",
    "singleQuote": true, // 字符串是否使用单引号，默认为false，使用双引号
    "semi": false, // 行位是否使用分号，默认为true
    "trailingComma": "none", // 是否使用尾逗号，有三个可选值"<none|es5|all>"
    "arrowParens": "as-needed", // "as-needed" 当箭头函数只有一个参数时允许省略参数
    "htmlWhitespaceSensitivity": "ignore" // 不使用的话结束标签 > 会跑到下一行，迷惑行为
  },
}
```

配置 lint-staged

> 1. 执行eslint --fix操作，进行扫描，若发现工具可修复的问题进行fix；
> 2. 执行prettier脚本，这是对代码进行格式化的；
> 3. 上述两项任务完成后对代码重新add。

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
  },
}
```



------

如果发现本项目有内容上的错误，欢迎提交 issues 进行指正，相关合作请邮件<a href="mailto:EnvisionShen@gmail.com">EnvisionShen@gmail.com</a>联系