# 实现效果

1.使用相应的WebAPI接口获得浏览器支持的语言种类列表，并填充至页面的下拉菜单中，选择中文;
2.在文本域中输入对应语言的文字，点击`speak`按钮后浏览器会播放输入的文字；
3.在浏览器阅读时，点击`stop`按钮，浏览器会停止阅读；
4.拖动`rate`和`pitch`滑块可改变阅读速度和音高。



# 解决步骤

speechSynthesis接口的最基本功能即可实现



# 知识点

#### 1. speechSynthesisUtterance接口

> 本接口用于设置阅读器阅读的配置参数，包括语言，阅读速度，语调等，实例化`SpeechSynthesisUtterance`后，可以通过为其属性赋值来完成参数配置，详细信息请直接参考MDN中的[SpeechSynthesisUtterance接口说明](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance)。

#### 2.SpeechSynthesis接口

> 本接口用于控制阅读器行为，包括获取浏览器支持的朗读语言，文本朗读，暂停，停止等，接口属性中定义有paused,speaking等只读属性来表明当前的状态,详细使用方式请参考MDN中的[SpeechSynthesis接口说明](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis)。