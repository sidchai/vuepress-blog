---
title: 解决VsCode安装Go相关插件失败问题
date: 2020-07-29
categories:
 - 其他other
tags:
 - go
 - vscode
---

## 解决VsCode安装Go相关插件失败问题
学习Go的过程中，由于使用的是vscode，为了提升开发效率，我选择安装相关插件。但是出现了问题，一直Failed。在百度上搜索了许多，基本都是你复制我，我复制你，很烦。无意间看到一位博主分享的方法，他也是饱受上述的垃圾博文困扰，然后找到了解决方法，这里向他致敬，秉着让更多人看到正确解决方法的心，我写下正确的解决方法，希望对你有所帮助，也可以点开原博主链接参考：[点我](https://www.cnblogs.com/xll970105/p/11906899.html)

Go有一个全球模块代理，设置一下代理再去安装，就可以十分顺利的进行。，分享一下[原网站](https://goproxy.io/)

设置流程如下，首先Windows用户打开Powershell（Mac用户可以去网站上看，都是十分的简单）
![](https://sidchai.oss-cn-beijing.aliyuncs.com/note/Golang/5.png)

```shell
$env:GO111MODULE="on"
$env:GOPROXY="https://goproxy.io"
go env -w GOPROXY=https://goproxy.io,direct
go env -w GOPRIVATE=*.corp.example.com
```

设置完成之后，再去VsCode中重新安装即可
![](https://sidchai.oss-cn-beijing.aliyuncs.com/note/Golang/6.png)
