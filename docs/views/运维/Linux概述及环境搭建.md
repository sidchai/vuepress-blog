---
title: Linux概述及环境搭建
date: 2020-07-25
categories:
 - 运维
tags:
 - linux
---

## Linux

<p style='color:red'>Linux一切皆文件：文件就是 读、写、（权限）</p>

## 入门概述

> 我们为什么要学习Linux

linux诞生了这么多年，以前还喊着如何能取代windows系统，现在这个口号已经小多了，任何事物发展都有其局限性都有其天花板。就如同在国内再搞一个社交软件取代腾讯一样，想想而已基本不可能，因为用户已经习惯于使用微信交流，不是说技术上实现不了解而是老百姓已经习惯了，想让他们不用，即使他们自己不用亲戚朋友还是要用，没有办法的事情。

用习惯了windows操作系统，再让大家切换到别的操作系统基本上是不可能的事情，改变一个人已经养成的习惯太难。没有办法深入到普通老百姓的生活中，并不意味着linux就没有用武之地了。在服务器端，在开发领域linux倒是越来越受欢迎，很多程序员都觉得不懂点linux都觉得不好意思，linux在开源社区的地位依然岿然不动。

尤其是作为一个后端程序员，是必须要掌握Linux的，因为这都成为了你找工作的基础门槛了，所以不得不学习！

> Linux 简介

Linux 内核最初只是由芬兰人林纳斯·托瓦兹（Linus Torvalds）在赫尔辛基大学上学时出于个人爱好而编写的。

Linux 是一套免费使用和自由传播的类 Unix 操作系统，是一个基于 POSIX（可移植操作系统接口） 和 UNIX 的多用户、多任务、支持多线程和多 CPU 的操作系统。

Linux 能运行主要的 UNIX 工具软件、应用程序和网络协议。它支持 32 位和 64 位硬件。Linux 继承了 Unix 以网络为核心的设计思想，是一个性能稳定的多用户网络操作系统。

> Linux 发行版

Linux 的发行版说简单点就是将 Linux 内核与应用软件做一个打包。

kali linux : 安全渗透测试使用！

![](https://sidchai.oss-cn-beijing.aliyuncs.com/note/Linux/1.jpg)

目前市面上较知名的发行版有：Ubuntu、RedHat、CentOS、Debian、Fedora、SuSE、OpenSUSE、Arch Linux、SolusOS 等。

![](https://sidchai.oss-cn-beijing.aliyuncs.com/note/Linux/2.jpg)

> Linux 应用领域

今天各种场合都有使用各种 Linux 发行版，从嵌入式设备到超级计算机，并且在服务器领域确定了地位，通常服务器使用 LAMP（Linux + Apache + MySQL + PHP）或 LNMP（Linux + Nginx+ MySQL + PHP）组合。

目前 Linux 不仅在家庭与企业中使用，并且在政府中也很受欢迎。

- 巴西联邦政府由于支持 Linux 而世界闻名。
- 有新闻报道俄罗斯军队自己制造的 Linux 发布版的，做为 G.H.ost 项目已经取得成果。
- 印度的 Kerala 联邦计划在向全联邦的高中推广使用 Linux。
- 中华人民共和国为取得技术独立，在龙芯处理器中排他性地使用 Linux。
- 在西班牙的一些地区开发了自己的 Linux 发布版，并且在政府与教育领域广泛使用，如 Extremadura 地区的 gnuLinEx 和 Andalusia 地区的 Guadalinex。
- 葡萄牙同样使用自己的 Linux 发布版 Caixa Mágica，用于 Magalh?es 笔记本电脑和 e-escola 政府软件。
- 法国和德国同样开始逐步采用 Linux。

> Linux vs Windows

![](https://sidchai.oss-cn-beijing.aliyuncs.com/note/Linux/3.jpg)



## 环境搭建

Linux 的安装，安装步骤比较繁琐(操作系统本身也是一个软件)，现在其实云服务器挺普遍的，价格也便宜，如果直接不想搭建，也可以直接买一台学习用用！

> 安装CentOS（虚拟机安装，耗资源）

Linux是一个操作系统

1、可以通过镜像进行安装！下载地址: [http://mirrors.aliyun.com/centos/7/isos/x86_64/](http://mirrors.aliyun.com/centos/7/isos/x86_64/),下载完成后安装即可！安装操作系统和安装软件是一样的，注意：Linux磁盘分区的时候需要注意分区名即可！/boot/home

2、可以使用我已经制作好的镜像！

3、安装 VMware 虚拟机软件，然后打开我们的镜像即可使用！

打开后的样子：

![](https://sidchai.oss-cn-beijing.aliyuncs.com/note/Linux/5.png)

**VMware的使用方式：**

点击屏幕进入虚拟机、Ctrl+Alt将聚焦退出虚拟机

登录账户

![](https://sidchai.oss-cn-beijing.aliyuncs.com/note/Linux/6.png)

密码默认123456



> 购买云服务器（推荐,这才是最接近公司中原生环境）

服务器一般不会关机

虚拟机安装后占用空间，也会有些卡顿，我们作为程序员其实可以选择购买一台自己的服务器，这样的话更加接近真实线上工作；

1、阿里云购买服务器：https://www.aliyun.com/minisite/goods?userCode=0phtycgr

2、购买完毕后，获取服务器的ip地址，重置服务器密码，就可以远程登录了

- 获取公网IP地址
- 修改自己的登录密码

![](https://sidchai.oss-cn-beijing.aliyuncs.com/note/Linux/9.png)

关于安全组的说明：(在阿里云这个很重要，自己需要开放什么端口来这里配置就好了)

![](https://sidchai.oss-cn-beijing.aliyuncs.com/note/Linux/7.png)

![](https://sidchai.oss-cn-beijing.aliyuncs.com/note/Linux/8.png)

3、下载 FinalShell 工具，进行远程连接使用！

4、使用FinalShell连接远程服务器

![](https://sidchai.oss-cn-beijing.aliyuncs.com/note/Linux/10.png)

5、登录成功

![](https://sidchai.oss-cn-beijing.aliyuncs.com/note/Linux/4.png)

这里就是我们的Linux系统了！以后的操作都在这里使用，项目也在这里发布
