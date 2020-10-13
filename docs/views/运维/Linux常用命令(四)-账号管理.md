---
title: Linux常用命令之账号管理
date: 2020-07-25
categories:
 - 运维
tags:
 - linux
---

### 账号管理

> 简介

Linux系统是一个多用户多任务的分时操作系统，任何一个要使用系统资源的用户，都必须首先向系统管理员申请一个账号，然后以这个账号的身份进入系统。

用户的账号一方面可以帮助系统管理员对使用系统的用户进行跟踪，并控制他们对系统资源的访问；另一方面也可以帮助用户组织文件，并为用户提供安全性保护。

每个用户账号都拥有一个唯一的用户名和各自的口令。

用户在登录时键入正确的用户名和口令后，就能够进入系统和自己的主目录。

实现用户账号的管理，要完成的工作主要有如下几个方面：

- 用户账号的添加、删除与修改。
- 用户口令的管理。
- 用户组的管理。



> 用户账号的管理

用户账号的管理工作主要涉及到用户账号的添加、修改和删除。

添加用户账号就是在系统中创建一个新账号，然后为新账号分配用户号、用户组、主目录和登录Shell等资源。

属主，属组



> 添加账号 useradd

```
useradd -选项 用户名
```

参数说明：

- 选项 :

- - -c comment 指定一段注释性描述。
  - -d 目录 指定用户主目录，如果此目录不存在，则同时使用-m选项，可以创建主目录。
  - -g 用户组 指定用户所属的用户组。
  - -G 用户组，用户组 指定用户所属的附加组。
  - -m　自动创建这个用户的主目录 /home/starchai

- ```bash
  [root@JackeyLov9 home]# useradd -m starchai    #创建一个用户
  [root@JackeyLov9 home]# ls
  redis  sidchai  starchai  www
  ```

- 理解一下本质: Linux中一切皆文件,这里的添加用户说白了就是往某一个文件中写入用户的信息了! /etc/passwd

- - -s Shell文件 指定用户的登录Shell。
  - -u 用户号 指定用户的用户号，如果同时有-o选项，则可以重复使用其他用户的标识号。



> 删除用户  userdel

userdel -r starchai  删除用户的时候将他的目录一并删掉

```bash
[root@JackeyLov9 home]# userdel -r starchai
[root@JackeyLov9 home]# ls
redis  sidchai  www
```



> 修改用户   usermod

修改用户  usermod  对应修改的内容  修改哪个用户

```bash
usermod -选项 用户名
```

 ```bash
[root@JackeyLov9 home]# usermod -d /home/22 starchai
 ```

修改完毕之后查看配置文件



> 切换用户

root用户

![](https://sidchai.oss-cn-beijing.aliyuncs.com/note/Linux/32.png)

1.切换用户的命令为：su username 【username是你的用户名哦】

2.从普通用户切换到root用户，还可以使用命令：sudo su

![](https://sidchai.oss-cn-beijing.aliyuncs.com/note/Linux/33.png)

3.在终端输入exit或logout或使用快捷方式ctrl+d，可以退回到原来用户，其实ctrl+d也是执行的exit命令

![](https://sidchai.oss-cn-beijing.aliyuncs.com/note/Linux/34.png)

4.在切换用户时，如果想在切换用户之后使用新用户的工作环境，可以在su和username之间加-，例如：【su - root】

$表示普通用户

\#表示超级用户，也就是root用户



修改主机名

![](https://sidchai.oss-cn-beijing.aliyuncs.com/note/Linux/35.png)



> 用户的密码设置问题！

我们一般通过root创建用户的时候，要配置密码

Linux上输入密码是不会显示的，正常输入就行

如果是超级用户的话：

```bash
passwd username:
new password:
re password:
```

如果是普通用户：

```bash
passwd
(current) UNIX password:
new password:    #密码不能过于简单
re password:
```



> 锁定账户

root，比如张三辞职了！冻结这个账户，就登录不上系统

```bash
passwd -l starchai    #锁定之后这个用户就不能登录了
passwd -d starchai    #没有密码也不能登录
```


