---
title: Docker的安装
date: 2020-07-29
categories:
 - 运维
tags:
 - go
 - docker
---

> 如何进行Docker的安装
> [可结合狂神老师的视频学习更快哦](https://www.bilibili.com/video/BV1og4y1q7M4?p=6)

<!-- more -->

## Docker安装


### 安装Docker

> 环境查看

```shell
# 系统内核是 3.10 以上的
[root@JackeyLov9 /]# uname -r
3.10.0-1062.18.1.el7.x86_64
```

```shell
[root@JackeyLov9 /]# cat /etc/os-release 
NAME="CentOS Linux"
VERSION="7 (Core)"
ID="centos"
ID_LIKE="rhel fedora"
VERSION_ID="7"
PRETTY_NAME="CentOS Linux 7 (Core)"
ANSI_COLOR="0;31"
CPE_NAME="cpe:/o:centos:centos:7"
HOME_URL="https://www.centos.org/"
BUG_REPORT_URL="https://bugs.centos.org/"

CENTOS_MANTISBT_PROJECT="CentOS-7"
CENTOS_MANTISBT_PROJECT_VERSION="7"
REDHAT_SUPPORT_PRODUCT="centos"
REDHAT_SUPPORT_PRODUCT_VERSION="7"
```

> 安装

帮助文档：

```shell
# 1. 卸载旧版本
yum remove docker \
                  docker-client \
                  docker-client-latest \
                  docker-common \
                  docker-latest \
                  docker-latest-logrotate \
                  docker-logrotate \
                  docker-engine
                  
# 2. 需要的安装包
yum install -y yum-utils

# 3. 设置镜像的仓库
yum-config-manager \
    --add-repo \
    https://download.docker.com/linux/centos/docker-ce.repo
    
yum-config-manager \
    --add-repo \
    http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo # 推荐使用阿里云
    
# 更新yum软件包索引
yum makecache fast
    
# 4. 安装docker相关		docker-ce	社区		ee	企业版
yum install docker-ce docker-ce-cli containerd.io

# 5. 启动docker
systemctl start docker

# 6. 使用docker version 是否安装成功
```

![](https://sidchai.oss-cn-beijing.aliyuncs.com/note/Microservice/Docker/1.png)

```shell
# 7. 测试hello world
docker run hello-world
```

![](https://sidchai.oss-cn-beijing.aliyuncs.com/note/Microservice/Docker/2.png)

```shell
# 8. 查看下载的这个 hello-world 镜像
[root@JackeyLov9 /]# docker images
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
hello-world         latest              bf756fb1ae65        5 months ago        13.3kB
```

卸载docker

```shell
# 1. 卸载依赖
yum remove docker-ce docker-ce-cli containerd.io

# 2. 删除资源
rm -rf /var/lib/docker

# /var/lib/docker	docker的默认工作路径
```

### 阿里云镜像加速

1、登录阿里云找到容器服务

![](https://sidchai.oss-cn-beijing.aliyuncs.com/note/Microservice/Docker/3.png)

2、找到镜像加速地址

![](https://sidchai.oss-cn-beijing.aliyuncs.com/note/Microservice/Docker/4.png)

3、配置使用

```shell
sudo mkdir -p /etc/docker

sudo tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": ["https://6su7tfy2.mirror.aliyuncs.com"]
}
EOF

sudo systemctl daemon-reload

sudo systemctl restart docker
```
## 声明
该Docker学习笔记根据B站狂神讲课视频记录，有兴趣学习的朋友可以点击[观看](https://www.bilibili.com/video/BV1og4y1q7M4)

