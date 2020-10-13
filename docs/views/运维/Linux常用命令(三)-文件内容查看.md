---
title: Linux常用命令之文件内容查看
date: 2020-07-25
categories:
 - 运维
tags:
 - linux
---

### 文件内容查看

> 概述

Linux系统中使用以下命令来查看文件的内容：

- cat： 由第一行开始显示文件内容（用来读文章或者读取配置文件）
- tac ：从最后一行开始显示，可以看出 tac 是 cat 的倒着写！

![](https://sidchai.oss-cn-beijing.aliyuncs.com/note/Linux/21.png)

- nl ： 显示的时候，顺道输出行号！ 看代码的时候，希望显示行号

![](https://sidchai.oss-cn-beijing.aliyuncs.com/note/Linux/22.png)

- more ：一页一页的显示文件内容，带余下内容的（空格代表翻页，enter代表向下看一行，:f 行号配置）

![](https://sidchai.oss-cn-beijing.aliyuncs.com/note/Linux/23.png)

- less 与 more 类似，但是比 more 更好的是，他可以往前翻页！（空格代表翻页，pageUp、pageDown代表翻动页面；q：退出页面；查找字符串  /要查询的字符向下查询，向上查询使用? 要查询的字符串，n 继续向下查询下一个，N继续向上查询）

![](https://sidchai.oss-cn-beijing.aliyuncs.com/note/Linux/25.png)

- head ：只看头几行   通过 -n 参数来控制显示几行

![](https://sidchai.oss-cn-beijing.aliyuncs.com/note/Linux/24.png)

- tail ：只看尾巴几行  -n 参数来控制显示几行

你可以使用 *man [命令]*来查看各个命令的使用文档，如 ：man cp。

网络配置目录：`cd /etc/sysconfig/network-scripts`

![](https://sidchai.oss-cn-beijing.aliyuncs.com/note/Linux/20.png)

ifconfig 命令查看网络地址



> Linux 链接概念

Linux的链接分为两种：硬链接、软链接

- 硬链接：A---B,假设B是A的硬链接,那么他们两个指向了同一个文件!允许一个文件拥有多个路径,用户可以通过这种机制建立硬链接到一些重要文件上。防止误删!
- 软连接：类似Window下的快捷方式,删除的源文件,快捷方式也访问不了!

创建链接  ln命令

`touch `命令 创建文件

`echo `输入字符串, 也可以输入到文件中

```bash
[root@JackeyLov9 home]# touch f1    #创建一个f1文件
[root@JackeyLov9 home]# ls
f1  redis  sidchai  www
[root@JackeyLov9 home]# ln f1 f2    #创建一个硬链接 f2
f1  f2     redis  sidchai  www
[root@JackeyLov9 home]# ln -s f1 f3    #创建一个软链接(符号链接) f3
f1  f2     f3     redis  sidchai  www
[root@JackeyLov9 home]# ll
总用量 20
-rw-r--r-- 2 root  root     8 5月   6 16:59 f1
-rw-r--r-- 2 root  root     8 5月   6 16:59 f2
lrwxrwxrwx 1 root  root     2 5月   6 16:58 f3 -> f1
drwx------ 2 redis redis 4096 5月   5 21:31 redis
drwxr-xr-x 2 root  root  4096 5月   6 16:05 sidchai
drwx------ 3 www   www   4096 5月   5 21:31 www
[root@JackeyLov9 home]# echo "sidchai" >>f1   #给f1文件中写入一些字符串
[root@JackeyLov9 home]# ls
f1  f2     f3     redis  sidchai  www
[root@JackeyLov9 home]# cat f1  #查看f1
sidchai
[root@JackeyLov9 home]# cat f2  #查看f2
sidchai
[root@JackeyLov9 home]# cat f3  #查看f3
sidchai
```

删除f1之后，查看f2和f3的区别

~~~bash
[root@JackeyLov9 home]# rm -rf f1
[root@JackeyLov9 home]# ls
f2  f3  redis  sidchai  www
[root@JackeyLov9 home]# cat f2   #f2 硬链接还在
sidchai
[root@JackeyLov9 home]# cat f3   #f3(软连接、符号链接) 快捷方式失效
cat: f3: 没有那个文件或目录
~~~

