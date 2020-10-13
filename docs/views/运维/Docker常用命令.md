---
title: Docker的常用命令
date: 2020-07-29
categories:
 - 运维
tags:
 - go
 - docker
sticky:
 - 1
---

> Docker的一些常用命令
> [可结合狂神老师的视频学习更快哦](https://www.bilibili.com/video/BV1og4y1q7M4?p=9)
<!-- more -->

## Docker的常用命令

### 帮助命令

```shell
docker version		 # 显示docker的版本信息
docker info			 # 显示docker的系统信息，包括镜像和容器的数量
docker 命令 --help	# 帮助命令
```

[帮助文档的地址](https://docs.docker.com/reference/)


### 镜像命令

**docker images**	查看所有本地的主机上的镜像

```shell
[root@JackeyLov9 /]# docker images
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
hello-world         latest              bf756fb1ae65        5 months ago        13.3kB

# 解释
REPOSITORY		镜像的仓库源
TAG				镜像的标签
IMAGE ID		镜像的id
CREATED			镜像的创建时间
SIZE			镜像的大小

# 可选项
 -a,  --all             # 列出所有镜像
 -q,  --quiet           # 只显示镜像的id
```

**docker search 搜索镜像**

```shell
[root@JackeyLov9 /]# docker search mysql
NAME                              DESCRIPTION                                     STARS               OFFICIAL            AUTOMATED
mysql                             MySQL is a widely used, open-source relation…   9653                [OK]                
mariadb                           MariaDB is a community-developed fork of MyS…   3511                [OK] 

# 可选项,通过收藏来过滤
--filter=STARS=3000		# 搜索处理的镜像就是STARS大于3000

[root@JackeyLov9 /]# docker search mysql --filter=STARS=3000
NAME                DESCRIPTION                                     STARS               OFFICIAL            AUTOMATED
mysql               MySQL is a widely used, open-source relation…   9653                [OK]                
mariadb             MariaDB is a community-developed fork of MyS…   3511                [OK]
```

**docker pull**

```shell
# 下载镜像 docker pull 镜像名[:tag]
[root@JackeyLov9 /]# docker pull mysql
Using default tag: latest	# 如果不写 tag， 默认就是 latest
latest: Pulling from library/mysql
8559a31e96f4: Pull complete 	# 分层下载：docker image的核心 联合文件系统
d51ce1c2e575: Pull complete 
c2344adc4858: Pull complete 
fcf3ceff18fc: Pull complete 
16da0c38dc5b: Pull complete 
b905d1797e97: Pull complete 
4b50d1c6b05c: Pull complete 
c75914a65ca2: Pull complete 
1ae8042bdd09: Pull complete 
453ac13c00a3: Pull complete 
9e680cd72f08: Pull complete 
a6b5dc864b6c: Pull complete 
Digest: sha256:8b7b328a7ff6de46ef96bcf83af048cb00a1c86282bfca0cb119c84568b4caf6		# 签名
Status: Downloaded newer image for mysql:latest
docker.io/library/mysql:latest	# 真实地址

# 等价于它
docker pull mysql
docker pull docker.io/library/mysql:latest

# 指定版本下载
[root@JackeyLov9 /]# docker pull mysql:5.7
5.7: Pulling from library/mysql
8559a31e96f4: Already exists 
d51ce1c2e575: Already exists 
c2344adc4858: Already exists 
fcf3ceff18fc: Already exists 
16da0c38dc5b: Already exists 
b905d1797e97: Already exists 
4b50d1c6b05c: Already exists 
d85174a87144: Pull complete 
a4ad33703fa8: Pull complete 
f7a5433ce20d: Pull complete 
3dcd2a278b4a: Pull complete 
Digest: sha256:32f9d9a069f7a735e28fd44ea944d53c61f990ba71460c5c183e610854ca4854
Status: Downloaded newer image for mysql:5.7
docker.io/library/mysql:5.7
```

**docker rmi 删除镜像**i

```shell
[root@JackeyLov9 /]# docker rmi -f  容器id	# 删除指定的容器
[root@JackeyLov9 /]# docker rmi -f  容器id 容器id 容器id	# 删除多个容器
[root@JackeyLov9 /]# docker rmi -f $(docker images -aq)	# 删除全部容器
```



### 容器命令
<b style='color: red;'>说明：我们有了镜像才可以创建容器，linux，下载一个CentOS镜像来测试学习</b>

```shell
docker pull centos
```

**新建容器并启动**

```shell
docker run [可选参数] image

# 参数说明
--name="Name"		#容器名字	tomcat01	tomcat02	用来区分容器
-d					#后台方式运行
-it					#使用交互方式运行，进入容器查看内容
-p					#指定容器的端口 -p		8080:8080
	-p ip: 主机端口:容器端口
	-p	主机端口:容器端口（常用）
	-p	容器端口
	容器端口
-p					#随机指定端口


#测试，启动并进入容器
[root@JackeyLov9 /]# docker run -it centos /bin/bash
[root@c5f2b721e288 /]# ls		# 查看容器内的centos，基础版本，很多命令都是不完善的
bin  dev  etc  home  lib  lib64  lost+found  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var

# 从容器中退回主机
[root@c5f2b721e288 /]# exit
exit
[root@JackeyLov9 /]# ls
bin  boot  dev  etc  home  lib  lib64  lost+found  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var
```

**列出所有运行的容器**

```shell
# docker ps 命令
			# 列出当前正在运行的容器
-a			# 列出当前正在运行的容器+带出历史运行过的容器
-n=?		# 显示最近创建的容器
-q			# 只显示容器的编号
[root@JackeyLov9 /]# docker ps
CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS               NAMES
[root@JackeyLov9 /]# docker ps -a
CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS                      PORTS               NAMES
c5f2b721e288        centos              "/bin/bash"         2 minutes ago       Exited (0) 50 seconds ago                       zealous_bose
91ae4027441e        bf756fb1ae65        "/hello"            10 hours ago        Exited (0) 10 hours ago                         unruffled_heyrovsky
```

**退出容器**

```shell
exit		# 容器停止并退出
Ctrl + p + q		# 容器不停止退出
```

**删除容器**

```shell
docker rmi 容器id						# 删除指定的容器，不能删除正在运行的容器，如果要强制删除 rm -f
docker rm -f $(docker ps -aq)		  #	删除所有的容器
docker ps -a -q|xargs docker rm		  #	删除所有的容器
```

**启动和停止容器的操作**

```shell
docker start 容器id			# 启动容器
docker restart 容器id			# 重启容器
docker stop 容器id			# 停止当前正在运行的容器
docker kill 容器id			# 强制停止当前容器
```



### 常用其它命令

**后台启动容器**

```shell
# 命令 docker run -d 镜像名
[root@JackeyLov9 /]# docker run -d centos

# 问题docker ps , 发现 centos 停止了

# 常见的坑：docker 容器使用后台运行，就必须要有一个前台进程，docker发现没有应用，就会自动停止
# nginx，容器启动后，发现自己没有提供服务，就会立刻停止，就是没有程序了
```

**查看日志**

```shell
docker logs -f -t --tail 容器		# 没有日志

# 自己编写一段shell脚本
[root@JackeyLov9 /]# docker run -d centos /bin/sh -c "while true;do echo sidchai;sleep 1;done"

[root@JackeyLov9 /]# docker ps
CONTAINER ID        IMAGE
fa59f9912320        centos 

# 显示日志
-tf				# 显示日志
--tail number	# 要显示日志条数
docker logs -f -t --tail 10 fa59f9912320
```

**查看容器中的进程信息**

```shell
# 命令 docker top 容器id 
[root@JackeyLov9 /]# docker top fa59f9912320 
UID                 PID                 PPID                C                   STIME               TTY                 TIME                CMD
root                24145               24128               0                   10:56               ?                   00:00:00            /bin/sh -c while true;do echo sidchai;sleep 1;done
root                28884               24145               0                   11:00               ?                   00:00:00            /usr/bin/coreutils --coreutils-prog-shebang=sleep /usr/bin/sleep 1
```

**查看镜像的元数据**

```shell
# 命令
docker inspect 容器id

# 测试
[root@JackeyLov9 /]# docker inspect fa59f9912320
[
    {
        "Id": "fa59f99123206f5b345a3489b169ca51751ab80dfe1376bc356ffcc54e002540",
        "Created": "2020-06-23T02:56:41.415430464Z",
        "Path": "/bin/sh",
        "Args": [
            "-c",
            "while true;do echo sidchai;sleep 1;done"
        ],
        "State": {
            "Status": "running",
            "Running": true,
            "Paused": false,
            "Restarting": false,
            "OOMKilled": false,
            "Dead": false,
            "Pid": 24145,
            "ExitCode": 0,
            "Error": "",
            "StartedAt": "2020-06-23T02:56:42.423740341Z",
            "FinishedAt": "0001-01-01T00:00:00Z"
        },
        "Image": "sha256:831691599b88ad6cc2a4abbd0e89661a121aff14cfa289ad840fd3946f274f1f",
        "ResolvConfPath": "/var/lib/docker/containers/fa59f99123206f5b345a3489b169ca51751ab80dfe1376bc356ffcc54e002540/resolv.conf",
        "HostnamePath": "/var/lib/docker/containers/fa59f99123206f5b345a3489b169ca51751ab80dfe1376bc356ffcc54e002540/hostname",
        "HostsPath": "/var/lib/docker/containers/fa59f99123206f5b345a3489b169ca51751ab80dfe1376bc356ffcc54e002540/hosts",
        "LogPath": "/var/lib/docker/containers/fa59f99123206f5b345a3489b169ca51751ab80dfe1376bc356ffcc54e002540/fa59f99123206f5b345a3489b169ca51751ab80dfe1376bc356ffcc54e002540-json.log",
        "Name": "/jolly_hellman",
        "RestartCount": 0,
        "Driver": "overlay2",
        "Platform": "linux",
        "MountLabel": "",
        "ProcessLabel": "",
        "AppArmorProfile": "",
        "ExecIDs": null,
        "HostConfig": {
            "Binds": null,
            "ContainerIDFile": "",
            "LogConfig": {
                "Type": "json-file",
                "Config": {}
            },
            "NetworkMode": "default",
            "PortBindings": {},
            "RestartPolicy": {
                "Name": "no",
                "MaximumRetryCount": 0
            },
            "AutoRemove": false,
            "VolumeDriver": "",
            "VolumesFrom": null,
            "CapAdd": null,
            "CapDrop": null,
            "Capabilities": null,
            "Dns": [],
            "DnsOptions": [],
            "DnsSearch": [],
            "ExtraHosts": null,
            "GroupAdd": null,
            "IpcMode": "private",
            "Cgroup": "",
            "Links": null,
            "OomScoreAdj": 0,
            "PidMode": "",
            "Privileged": false,
            "PublishAllPorts": false,
            "ReadonlyRootfs": false,
            "SecurityOpt": null,
            "UTSMode": "",
            "UsernsMode": "",
            "ShmSize": 67108864,
            "Runtime": "runc",
            "ConsoleSize": [
                0,
                0
            ],
            "Isolation": "",
            "CpuShares": 0,
            "Memory": 0,
            "NanoCpus": 0,
            "CgroupParent": "",
            "BlkioWeight": 0,
            "BlkioWeightDevice": [],
            "BlkioDeviceReadBps": null,
            "BlkioDeviceWriteBps": null,
            "BlkioDeviceReadIOps": null,
            "BlkioDeviceWriteIOps": null,
            "CpuPeriod": 0,
            "CpuQuota": 0,
            "CpuRealtimePeriod": 0,
            "CpuRealtimeRuntime": 0,
            "CpusetCpus": "",
            "CpusetMems": "",
            "Devices": [],
            "DeviceCgroupRules": null,
            "DeviceRequests": null,
            "KernelMemory": 0,
            "KernelMemoryTCP": 0,
            "MemoryReservation": 0,
            "MemorySwap": 0,
            "MemorySwappiness": null,
            "OomKillDisable": false,
            "PidsLimit": null,
            "Ulimits": null,
            "CpuCount": 0,
            "CpuPercent": 0,
            "IOMaximumIOps": 0,
            "IOMaximumBandwidth": 0,
            "MaskedPaths": [
                "/proc/asound",
                "/proc/acpi",
                "/proc/kcore",
                "/proc/keys",
                "/proc/latency_stats",
                "/proc/timer_list",
                "/proc/timer_stats",
                "/proc/sched_debug",
                "/proc/scsi",
                "/sys/firmware"
            ],
            "ReadonlyPaths": [
                "/proc/bus",
                "/proc/fs",
                "/proc/irq",
                "/proc/sys",
                "/proc/sysrq-trigger"
            ]
        },
        "GraphDriver": {
            "Data": {
                "LowerDir": "/var/lib/docker/overlay2/ff207649dc442f42d70b515b2debeb3c35f2b4c19558b26fafc54f0a78c44250-init/diff:/var/lib/docker/overlay2/2cf4bbd64d95afdbf01edc032b33107730325f3bd9d4a66acfc90bc54c94f66e/diff",
                "MergedDir": "/var/lib/docker/overlay2/ff207649dc442f42d70b515b2debeb3c35f2b4c19558b26fafc54f0a78c44250/merged",
                "UpperDir": "/var/lib/docker/overlay2/ff207649dc442f42d70b515b2debeb3c35f2b4c19558b26fafc54f0a78c44250/diff",
                "WorkDir": "/var/lib/docker/overlay2/ff207649dc442f42d70b515b2debeb3c35f2b4c19558b26fafc54f0a78c44250/work"
            },
            "Name": "overlay2"
        },
        "Mounts": [],
        "Config": {
            "Hostname": "fa59f9912320",
            "Domainname": "",
            "User": "",
            "AttachStdin": false,
            "AttachStdout": false,
            "AttachStderr": false,
            "Tty": false,
            "OpenStdin": false,
            "StdinOnce": false,
            "Env": [
                "PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"
            ],
            "Cmd": [
                "/bin/sh",
                "-c",
                "while true;do echo sidchai;sleep 1;done"
            ],
            "Image": "centos",
            "Volumes": null,
            "WorkingDir": "",
            "Entrypoint": null,
            "OnBuild": null,
            "Labels": {
                "org.label-schema.build-date": "20200611",
                "org.label-schema.license": "GPLv2",
                "org.label-schema.name": "CentOS Base Image",
                "org.label-schema.schema-version": "1.0",
                "org.label-schema.vendor": "CentOS"
            }
        },
        "NetworkSettings": {
            "Bridge": "",
            "SandboxID": "05c6d8cb891aa5469a0d3cf02dcabd39747a3101e3369980590639086c1081c6",
            "HairpinMode": false,
            "LinkLocalIPv6Address": "",
            "LinkLocalIPv6PrefixLen": 0,
            "Ports": {},
            "SandboxKey": "/var/run/docker/netns/05c6d8cb891a",
            "SecondaryIPAddresses": null,
            "SecondaryIPv6Addresses": null,
            "EndpointID": "0076bea8619c17bf799712b4809047d214e500c0d2a8d182040bf709854d4def",
            "Gateway": "172.18.0.1",
            "GlobalIPv6Address": "",
            "GlobalIPv6PrefixLen": 0,
            "IPAddress": "172.18.0.2",
            "IPPrefixLen": 16,
            "IPv6Gateway": "",
            "MacAddress": "02:42:ac:12:00:02",
            "Networks": {
                "bridge": {
                    "IPAMConfig": null,
                    "Links": null,
                    "Aliases": null,
                    "NetworkID": "5731d182b6a51520f5e815818aa2dbae9640dbf9adc1f761683ca8d0f0078be5",
                    "EndpointID": "0076bea8619c17bf799712b4809047d214e500c0d2a8d182040bf709854d4def",
                    "Gateway": "172.18.0.1",
                    "IPAddress": "172.18.0.2",
                    "IPPrefixLen": 16,
                    "IPv6Gateway": "",
                    "GlobalIPv6Address": "",
                    "GlobalIPv6PrefixLen": 0,
                    "MacAddress": "02:42:ac:12:00:02",
                    "DriverOpts": null
                }
            }
        }
    }
]

```

**进入当前正在运行的容器**

```shell
# 我们通常容器都是使用后台方式运行的，需要进入容器，修改一些配置

# 命令
docker exec -it 容器id bashShell

# 测试
[root@JackeyLov9 /]# docker ps
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS               NAMES
fa59f9912320        centos              "/bin/sh -c 'while t…"   8 minutes ago       Up 8 minutes                            jolly_hellman
[root@JackeyLov9 /]# docker exec -it fa59f9912320 /bin/bash
[root@fa59f9912320 /]# ps -ef
UID        PID  PPID  C STIME TTY          TIME CMD
root         1     0  0 02:56 ?        00:00:00 /bin/sh -c while true;do echo sidchai;sleep 1;done
root       527     0  0 03:05 pts/0    00:00:00 /bin/bash
root       549     1  0 03:05 ?        00:00:00 /usr/bin/coreutils --coreutils-prog-shebang=sleep /usr/bin/sleep 1
root       550   527  0 03:05 pts/0    00:00:00 ps -ef

# 方式二
docker attach 容器id
# 测试
[root@JackeyLov9 /]# docker attach fa59f9912320
正在执行当前的代码...

# docker exec		# 进入容器后开启一个新的终端，可以再里面操作（常用）
# docker attach		# 进入容器正在执行的终端，不会启动新的进程
```

**从容器内拷贝文件到主机上**

```shell
docker cp 容器id:容器内路径	目的地主机路径

# 查看当前主机目录下
[root@JackeyLov9 home]# ls
sidchai  sidchai.java
[root@JackeyLov9 home]# docker ps
CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS               NAMES
947fd0f429f8        centos              "/bin/bash"         36 seconds ago      Up 34 seconds                           frosty_allen

# 进入docker容器内部
[root@JackeyLov9 home]# docker attach 947fd0f429f8
[root@947fd0f429f8 /]# cd /home/
[root@947fd0f429f8 home]# ls
# 在容器内新建一个文件
[root@947fd0f429f8 home]# touch test.java
[root@947fd0f429f8 home]# ls
test.java
[root@947fd0f429f8 home]# exit
exit
[root@JackeyLov9 home]# docker ps
CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS               NAMES
[root@JackeyLov9 home]# docker ps -a
CONTAINER ID        IMAGE               COMMAND             CREATED              STATUS                     PORTS               NAMES
947fd0f429f8        centos              "/bin/bash"         About a minute ago   Exited (0) 7 seconds ago                       frosty_allen

# 将这个文件拷贝出来到主机上
[root@JackeyLov9 home]# docker cp 947fd0f429f8:/home/test.java /home
[root@JackeyLov9 home]# ls
sidchai  sidchai.java  test.java

# 拷贝是一个手动过程，未来我们使用 -v 卷的技术，可以实现
```


### 小结

![](https://sidchai.oss-cn-beijing.aliyuncs.com/note/Microservice/Docker/9.jpg)

```shell
  attach      Attach to a running container						# 当前shell 下 attach 连接指定运行镜像
  build       Build an image from a Dockerfile					# 通过DockerFile 定制镜像
  commit      Create a new image from a container's changes		# 提交当前容器位新的镜像
  cp          Copy files/folders between a container and the local filesystem	# 从容器中拷贝指定文件或者目录到宿主机中
  create      Create a new container							# 创建一个新的容器， 同 run，但不启动容器
  diff        Inspect changes on a container's filesystem		# 查看docker容器变化
  events      Get real time events from the server				# 从docker 服务获取容器实时事件
  exec        Run a command in a running container				# 在已存在的容器上运行命令
  export      Export a container's filesystem as a tar archive	# 导出容器的内容流作为一个 tar 归档文件[对应 import]
  history     Show the history of an image						# 展示一个镜像形成历史
  images      List images										# 列出系统当前镜像
  import      Import the contents from a tarball to create a filesystem image	# 从tar包中的内容创建一个新的文件系统映像[对应export]
  info        Display system-wide information					# 显示系统相关信息
  inspect     Return low-level information on Docker objects	# 查看容器详细信息
  kill        Kill one or more running containers				# kill 指定 docker 容器
  load        Load an image from a tar archive or STDIN			# 从一个 tar 包中加载一个镜像[对应save]
  login       Log in to a Docker registry						# 注册或要登录一个 docker 源服务器
  logout      Log out from a Docker registry					# 从当前 Docker registry 退出
  logs        Fetch the logs of a container						# 输出当前容器日志信息
  pause       Pause all processes within one or more containers	# 暂停容器
  port        List port mappings or a specific mapping for the container		# 查看映射端口对应的容器内部源端口
  ps          List containers									# 列出容器列表
  pull        Pull an image or a repository from a registry		# 从docker镜像源服务器拉取指定镜像或者库镜像
  push        Push an image or a repository to a registry		# 推送指定镜像或者库镜像至docker源服务器
  rename      Rename a container								# 重命名一个容器
  restart     Restart one or more containers					# 重启运行的服务器
  rm          Remove one or more containers						# 移除一个或多个容器
  rmi         Remove one or more images							# 移除一个或多个镜像[无容器使用该镜像才可删除，否则需要删除相关容器才可继续或 -f 强制删除]
  run         Run a command in a new container					# 创建一个新的容器并运行一个命令
  save        Save one or more images to a tar archive (streamed to STDOUT by default)	# 保存一个镜像为一个 tar 包 [对应 load]
  search      Search the Docker Hub for images					# 在docker hub 中搜索镜像
  start       Start one or more stopped containers				# 启动容器
  stats       Display a live stream of container(s) resource usage statistics	# 显示容器资源使用统计信息的实时流
  stop        Stop one or more running containers				# 停止容器
  tag         Create a tag TARGET_IMAGE that refers to SOURCE_IMAGE				# 给源中镜像打标签
  top         Display the running processes of a container		# 查看容器中运行的进程信息
  unpause     Unpause all processes within one or more containers				# 取消暂停容器
  update      Update configuration of one or more containers	# 更新一个或多个容器的配置
  version     Show the Docker version information				# 查看docker版本号
  wait        Block until one or more containers stop, then print their exit codes		# 截取容器停止时的退出状态值
```


## 声明
该Docker学习笔记根据B站狂神讲课视频记录，有兴趣学习的朋友可以点击[观看](https://www.bilibili.com/video/BV1og4y1q7M4)
