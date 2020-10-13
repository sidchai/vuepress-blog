---
title: 'VMware安装Centos7（图文）'
date: 2020-08-20
# 文章访问密码
keys: 
 -  'e10adc3949ba59abbe56e057f20f883e'
tags:
-  'Linux'
-  'Centos'
-  'VMware'
categories:
- '笔记'
---


原文出处：[https://www.jianshu.com/p/ce08cdbc4ddb?utm_source=tuicool&utm_medium=referral](https://www.jianshu.com/p/ce08cdbc4ddb?utm_source=tuicool&utm_medium=referral)
<!-- more -->


## 软硬件准备

软件：推荐是要VMware

镜像：Centos7，如果没有的可以在官网下载：[点我下载](http://isoredirect.centos.org/centos/7/isos/x86_64/)

硬件：因为是在宿主机上运行虚拟化软件安装centos，所以对宿主机的配置有一定的要求。最起码I5CPU双核、硬盘500G、内存4G以上。

![](https://sidchai.oss-cn-beijing.aliyuncs.com/note/Centos/39.png)



## 虚拟机准备

### 1.打开VMwear选择新建虚拟机

![](https://sidchai.oss-cn-beijing.aliyuncs.com/note/Centos/1.png)



### 2.典型安装与自定义安装

典型安装：VMwear会将主流的配置应用在虚拟机的操作系统上，对于新手来很友好。

自定义安装：自定义安装可以针对性的把一些资源加强，把不需要的资源移除。避免资源的浪费。

这里我选择自定义安装。

![](https://sidchai.oss-cn-beijing.aliyuncs.com/note/Centos/2.png)



### 3.虚拟机兼容性选择

这里要注意兼容性，如果是VMwear12创建的虚拟机复制到VM11、10或者更低的版本会出现一不兼容的现象。如果是用VMwear10创建的虚拟机在VMwear12中打开则不会出现兼容性问题。

![](https://sidchai.oss-cn-beijing.aliyuncs.com/note/Centos/3.png)



### 4.选择稍后安装操作系统

![](https://sidchai.oss-cn-beijing.aliyuncs.com/note/Centos/4.png)



### 5.操作系统的选择

这里选择之后安装的操作系统，正确的选择会让vm tools更好的兼容。这里选择linux下的CentOS

![](https://sidchai.oss-cn-beijing.aliyuncs.com/note/Centos/5.png)



### 6.虚拟机位置与命名

虚拟机名称就是一个名字，在虚拟机多的时候方便自己找到。

VMwear的默认位置是在C盘下，我这里改成E盘。

![](https://sidchai.oss-cn-beijing.aliyuncs.com/note/Centos/6.png)



### 7.处理器与内存的分配

处理器分配要根据自己的实际需求来分配。在使用过程中CPU不够的话是可以再增加的。这次只做安装CentOS演示，所以处理器与核心都选1.

![](https://sidchai.oss-cn-beijing.aliyuncs.com/note/Centos/7.png)

内存也是要根据实际的需求分配。我的宿主机内存是8G所以我给虚拟机分配2G内存。

![](https://sidchai.oss-cn-beijing.aliyuncs.com/note/Centos/8.png)



### 8.网络连接类型的选择

网络连接类型一共有桥接、NAT、仅主机和不联网四种。

桥接：选择桥接模式的话虚拟机和宿主机在网络上就是平级的关系，相当于连接在同一交换机上。

NAT：NAT模式就是虚拟机要联网得先通过宿主机才能和外面进行通信。

仅主机：虚拟机与宿主机直接连起来

桥接与NAT模式访问互联网过程，如下图所示

![](https://sidchai.oss-cn-beijing.aliyuncs.com/note/Centos/40.png)

桥接与NAT区别

这里选择桥接模式

![](https://sidchai.oss-cn-beijing.aliyuncs.com/note/Centos/9.png)



### 9.其余两项按虚拟机默认选项即可

![](https://sidchai.oss-cn-beijing.aliyuncs.com/note/Centos/10.png)

![](https://sidchai.oss-cn-beijing.aliyuncs.com/note/Centos/11.png)

![](https://sidchai.oss-cn-beijing.aliyuncs.com/note/Centos/12.png)



### 10.磁盘容量

磁盘容量暂时分配100G即可后期可以随时增加，不要勾选立即分配所有磁盘，否则虚拟机会将100G直接分配给CentOS，会导致宿主机所剩硬盘容量减少。

勾选将虚拟磁盘拆分成多个文件，这样可以使虚拟机方便用储存设备拷贝复制。

![](https://sidchai.oss-cn-beijing.aliyuncs.com/note/Centos/13.png)



### 11.磁盘名称，默认即可

![](https://sidchai.oss-cn-beijing.aliyuncs.com/note/Centos/14.png)



### 12.取消不需要的硬件

点击自定义硬件

![](https://sidchai.oss-cn-beijing.aliyuncs.com/note/Centos/15.png)

选择声卡、打印机等不需要的硬件然后移除。

![](https://sidchai.oss-cn-beijing.aliyuncs.com/note/Centos/16.png)



### 13.点击完成，已经创建好虚拟机。

![](https://sidchai.oss-cn-beijing.aliyuncs.com/note/Centos/17.png)



## 安装Centos

### 1.连接光盘

右击刚创建的虚拟机，选择设置

![](https://sidchai.oss-cn-beijing.aliyuncs.com/note/Centos/18.png)

先选择CD/DVD，再选择使用ISO映像文件，最后选择浏览找到下载好的镜像文件。启动时连接一定要勾选上后确定

![](https://sidchai.oss-cn-beijing.aliyuncs.com/note/Centos/19.png)



### 2.开启虚拟机

![](https://sidchai.oss-cn-beijing.aliyuncs.com/note/Centos/20.png)



### 3.安装操作系统

开启虚拟机后会出现以下界面

1. Install CentOS 7 安装CentOS 7
2. Test this media & install CentOS 7 测试安装文件并安装CentOS 7
3. Troubleshooting 修复故障

1.选择第一项，安装直接CentOS 7，回车，进入下面的界面

![](https://sidchai.oss-cn-beijing.aliyuncs.com/note/Centos/21.png)

2.选择安装过程中使用的语言，这里选择英文、键盘选择美式键盘。点击Continue

![](https://sidchai.oss-cn-beijing.aliyuncs.com/note/Centos/22.png)

3.首先设置时间

![](https://sidchai.oss-cn-beijing.aliyuncs.com/note/Centos/23.png)

时区选择上海，查看时间是否正确。然后点击Done

![](https://sidchai.oss-cn-beijing.aliyuncs.com/note/Centos/24.png)

4.选择需要安装的软件

![](https://sidchai.oss-cn-beijing.aliyuncs.com/note/Centos/25.png)

选择 Server with Gui，然后点击Done

![](https://sidchai.oss-cn-beijing.aliyuncs.com/note/Centos/26.png)

5.选择安装位置，在这里可以进行磁盘划分。

![](https://sidchai.oss-cn-beijing.aliyuncs.com/note/Centos/41.png)

选择i will configure partitioning（我将会配置分区），然后点击done

![](https://sidchai.oss-cn-beijing.aliyuncs.com/note/Centos/27.png)

如下图所示，点击加号，选择/boot，给boot分区分200M。最后点击Add

![](https://sidchai.oss-cn-beijing.aliyuncs.com/note/Centos/28.png)

然后以同样的办法给其他三个区分配好空间后点击Done

![](https://sidchai.oss-cn-beijing.aliyuncs.com/note/Centos/29.png)

然后会弹出摘要信息，点击AcceptChanges(接受更改)

![](https://sidchai.oss-cn-beijing.aliyuncs.com/note/Centos/30.png)

6.设置主机名与网卡信息

![](https://sidchai.oss-cn-beijing.aliyuncs.com/note/Centos/31.png)

首先要打开网卡，然后查看是否能获取到IP地址(我这里是桥接)，再更改主机名后点击Done。

![](https://sidchai.oss-cn-beijing.aliyuncs.com/note/Centos/32.png)

7.最后选择Begin Installation(开始安装)

![](https://sidchai.oss-cn-beijing.aliyuncs.com/note/Centos/33.png)

8.设置root密码

![](https://sidchai.oss-cn-beijing.aliyuncs.com/note/Centos/34.png)

设置root密码后点击Done（如果您的密码类似于我的过于简单，则需点击两下）

![](https://sidchai.oss-cn-beijing.aliyuncs.com/note/Centos/35.png)

9.点击USER CREATION 创建管理员用户

![](https://sidchai.oss-cn-beijing.aliyuncs.com/note/Centos/36.png)

输入用户名密码后点击Done（如果您的密码类似于我的过于简单，则需点击两下）

![](https://sidchai.oss-cn-beijing.aliyuncs.com/note/Centos/37.png)

10.等待系统安装完毕重启系统即可

![](https://sidchai.oss-cn-beijing.aliyuncs.com/note/Centos/38.png)

11.安装完成，点击Reboot重启

![](https://sidchai.oss-cn-beijing.aliyuncs.com/note/Centos/42.png)

12.点击 LICENSING

![](https://sidchai.oss-cn-beijing.aliyuncs.com/note/Centos/43.png)

勾选同意阅读协议，然后点击Done

![](https://sidchai.oss-cn-beijing.aliyuncs.com/note/Centos/44.png)

13.点击 FINSH CONFIGURATION，等待即可

![](https://sidchai.oss-cn-beijing.aliyuncs.com/note/Centos/45.png)

14.选择要登录的账号，默认选择管理员用户登录

![](https://sidchai.oss-cn-beijing.aliyuncs.com/note/Centos/46.png)

15.到了这一步，就说明我们已经安装并登录成功辣！

![](https://sidchai.oss-cn-beijing.aliyuncs.com/note/Centos/47.png)