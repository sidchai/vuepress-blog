---
title: Linux常用命令之目录管理
date: 2020-07-25
categories:
 - 运维
tags:
 - linux
---

### 目录管理

> 绝对路径、相对路径

绝对路径 路径的全称：E:\SecretDocument\xxx.xx
比如说SecretDocument目录下，那这个xxx.xx文件，对应我们的相对路径就是 /xxx.xx
- cd ：切换目录命令
- ./ ：当前目录
- cd .. ：返回上一级目录
![](https://sidchai.oss-cn-beijing.aliyuncs.com/note/Linux/14.png)

> ls（列出目录！）

在Linux中ls可能是最常用的

- -a参数：all，查看全部的文件，包括隐藏文件
- -l参数：列出所有的文件，包含文件的属性和权限，不包括隐藏文件
- 所有Linux可以组合使用

![](https://sidchai.oss-cn-beijing.aliyuncs.com/note/Linux/15.png)

![](https://sidchai.oss-cn-beijing.aliyuncs.com/note/Linux/16.png)

> cd命令 切换目录

cd 目录名（绝对路径（都是以/开头），相对路径（对于当前目录该如何寻找））

![](https://sidchai.oss-cn-beijing.aliyuncs.com/note/Linux/17.png)

> pwd 显示当前用户所在的目录


```bash
[root@JackeyLov9 ~]# cd /
[root@JackeyLov9 /]# cd /bin
[root@JackeyLov9 bin]# pwd
/bin
[root@JackeyLov9 bin]# cd /usr
[root@JackeyLov9 usr]# pwd
/usr
[root@JackeyLov9 usr]# 
```



> mkdir 创建一个目录

```bash
[root@JackeyLov9 home]# mkdir test1  #创建目录
[root@JackeyLov9 home]# ls
redis  sidchai  test  test1  www
[root@JackeyLov9 home]# cd ..
[root@JackeyLov9 /]# cd /home
[root@JackeyLov9 home]# mkdir -p test2/test3/test4 #创建多级目录 
[root@JackeyLov9 home]# cd test2
[root@JackeyLov9 test2]# ls
test3
[root@JackeyLov9 test2]# cd test3/
[root@JackeyLov9 test3]# ls
test4
[root@JackeyLov9 test3]# cd test4/
[root@JackeyLov9 test4]# ls
[root@JackeyLov9 test4]# 

```



> rmdir 删除目录

```bash
[root@JackeyLov9 test3]# ls
test4
[root@JackeyLov9 test3]# cd test4/
[root@JackeyLov9 test4]# ls
[root@JackeyLov9 test4]# cd ..
[root@JackeyLov9 test3]# cd ..
[root@JackeyLov9 test2]# cd ..
[root@JackeyLov9 home]# ls
redis  sidchai  test  test1  test2  www
[root@JackeyLov9 home]# rmdir test1
[root@JackeyLov9 home]# ls
redis  sidchai  test  test2  www
[root@JackeyLov9 home]# rmdir -p test2/test3/test4
[root@JackeyLov9 home]# ls
redis  sidchai  test  www
[root@JackeyLov9 home]# rmdir test/
[root@JackeyLov9 home]# ls
redis  sidchai  www
```

rmdir仅能删除空的目录，如果子目录存在文件，需要先删除文件，递归删除多个目录，加 -p参数即可



> cp（复制文件或者目录）

cp 原来的地方  新的地方

```bash
[root@JackeyLov9 home]# cp xz.jpg sidchai   #拷贝文件至目录
[root@JackeyLov9 home]# ls
redis  sidchai  www  xz.jpg
[root@JackeyLov9 home]# cd sidchai/
[root@JackeyLov9 sidchai]# ls
apache-tomcat-9.0.34.tar.gz  jdk-8u251-linux-x64.rpm  xz.jpg
[root@JackeyLov9 sidchai]# cd ..
[root@JackeyLov9 home]# cp xz.jpg sidchai   #如果文件重复，就选择覆盖(y)或放弃(n)
cp：是否覆盖"sidchai/xz.jpg"？ y
```



> rm（移除文件或者目录）

- -f ：忽略不存在的文件，不会出现警告，强制删除
- -r ：递归删除目录
- -i ：互动，删除询问是否删除

```bash
rm -rf /    #系统中所有的文件都被删除
```

```bash
[root@JackeyLov9 home]# ls
redis  sidchai  www  xz.jpg
[root@JackeyLov9 home]# rm -rf xz.jpg 
[root@JackeyLov9 home]# ls
```



> mv 移动文件或者目录！重命名文件

- -f ：强制
- -u ：只替换已经更新过的文件

```bash
[root@JackeyLov9 home]# ls
redis  sidchai  www  xz.jpg
[root@JackeyLov9 home]# mv xz.jpg sidchai/   #移动文件
[root@JackeyLov9 home]# ls
redis  sidchai  www
[root@JackeyLov9 home]# cd sidchai/
[root@JackeyLov9 sidchai]# ls
apache-tomcat-9.0.34.tar.gz  jdk-8u251-linux-x64.rpm  xz.jpg
[root@JackeyLov9 sidchai]# cd ..
[root@JackeyLov9 home]# ls
redis  sidchai  www
[root@JackeyLov9 home]# mv sidchai sidchai2   #重命名文件夹
[root@JackeyLov9 home]# ls
redis  sidchai2  www
```

