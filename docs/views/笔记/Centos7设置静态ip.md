---
title: 'Centos7设置静态ip'
date: 2020-08-20
# 文章访问密码
keys: 
 -  'e10adc3949ba59abbe56e057f20f883e'
# 是否发布文章
# publish: false
tags:
-  'Linux'
-  'Centos'
categories:
- '笔记'
---

### 桥接模式网络配置

**1.配置ip地址等信息在/etc/sysconfig/network-scripts/ifcfg-ens33文件中，对该文件做如下配置：**

```shell
vi   /etc/sysconfig/network-scripts/ifcfg-ens33
```

修改如下：

```shell
TYPE="Ethernet"
PROXY_METHOD="none"
BROWSER_ONLY="no"
#BOOTPROTO="dncp"
DEFROUTE="yes"
IPV4_FAILURE_FATAL="no"
IPV6INIT="yes"
IPV6_AUTOCONF="yes"
IPV6_DEFROUTE="yes"
IPV6_FAILURE_FATAL="no"
#IPV6_ADDR_GEN_MODE="stable-privacy"
NAME="ens33"   # 网卡设备名，设备名一定要跟文件名一致
UUID="a49e4e39-f0f2-4f65-acdc-cc77627072db"
DEVICE="ens33"  # 网卡设备名，设备名一定要跟文件名一致
ONBOOT="yes"    # 该网卡是否随网络服务启动

BOOTPROTO="static"         # 手动分配ip
IPADDR="192.168.0.190"     # 该网卡ip地址就是你要配置的固定IP，如果你要用xshell等工具连接，220这个网段最好和你自己的电脑网段一致，否则有可能用xshell连接失败
NETMASK="255.255.255.0"    # 子网掩码
GATEWAY="192.168.0.1"      # 网关
DNS1="8.8.8.8"             # DNS，8.8.8.8为Google提供的免费DNS服务器的IP地址
```



**2.配置网络工作**

在/etc/sysconfig/network文件里增加如下配置

```shell
# Created by anaconda
NETWORKING=yes
GATEWAY=192.168.0.1
```



**3.关闭防火墙**

```shell
systemctl stop firewalld # 临时关闭防火墙
systemctl disable firewalld # 禁止开机启动
```



**4.重启网络服务**

```shell
service network restart
```

