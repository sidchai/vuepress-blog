## 一款基于vuepress的技术学习笔记

## 线上预览
> This is my vuepress-blog -> [预览](https://www.sidchai.cn)

## 项目截图

![](https://sidchai.oss-cn-beijing.aliyuncs.com/vuepress-blog-cover/1.png)



![](https://sidchai.oss-cn-beijing.aliyuncs.com/vuepress-blog-cover/2.png)



![](https://sidchai.oss-cn-beijing.aliyuncs.com/vuepress-blog-cover/3.png)



![](https://sidchai.oss-cn-beijing.aliyuncs.com/vuepress-blog-cover/4.png)



![](https://sidchai.oss-cn-beijing.aliyuncs.com/vuepress-blog-cover/5.png)



![](https://sidchai.oss-cn-beijing.aliyuncs.com/vuepress-blog-cover/6.png)

## 使用方法

``` shell
# 把项目从gitee上克隆下来
git clone https://gitee.com/sidchai/vuepress-blog.git
# 进入项目目录
cd vuepress-blog
# 安装依赖
npm install
# 启动项目
npm run serve
```

## 部署方法

### 推送到gitee仓库

1. 创建仓库
2. 配置秘钥
3. 拉取仓库
4. 将代码拷贝至仓库
5. push至远程仓库



### 云服务器ECS配置环境

1. `Git`安装

   ```bash
   # 安装，不一定是最新
   yum install -y git
   
   # 查看版本
   git --version
   
   # 设置git用户信息
   git config --global user.name "Your Name"
   git config --global user.email "email@example.com"
   ```

2. `Node`安装

   ```bash
   # 下载最新版本包 https://nodejs.org/dist
   wget https://nodejs.org/dist/v14.9.0/node-v14.9.0-linux-x64.tar.gz
   
   # 解压
   tar -xvf node-v14.9.0-linux-x64.tar.gz
   
   # 建立软链接
   ln -s ~/node-v14.9.0-linux-x64/bin/node /usr/bin/node
   ln -s ~/node-v14.9.0-linux-x64/bin/npm /usr/bin/npm
   
   # 检查版本
   node -v
   npm -v
   ```

3. `SSH`公私钥生成

   ```bash
   # 与windows一样生成ssh
   ssh-keygen -t rsa -C "your eamil@example.com"
   
   # 需要将linux上的公钥，配置到gitee/github，添加之后才能clone
   ```

4. 公钥配置(`gitee/github`)

   将/root/.ssh目录下的公钥配置到代码托管平台

   ```bash
   # 在home目录下，创建workspace目录，并作为vuepress源码的存放目录
   cd /home
   mkdir workspace
   cd workspace
   
   # 拉取gitee仓库的源码
   git clone git@gitee.com:sidchai/vuepress-blog.git
   ```

   ![](https://sidchai.oss-cn-beijing.aliyuncs.com/vuepress-blog-cover/7.png)

   ```bash
   # 进入源码目录
   cd  vuepress-blog
   
   # 安装依赖
   npm install
   
   # 以前台的方式运行，查看控制塔端口，这边设置的是7777
   npm run serve
   注意：这种运行方式，不能`ctrl+d`退出，否则进程被杀死，一般以nohup的方式启动
   ```

5. `start.sh`脚本方式启动

   ```bash
   #在vuepress-blog目录中创建start.sh脚本
   touch start.sh
   
   # 授予权限
   chmod 775 start.sh
   
   # 编辑启动脚本
   vim start.sh
   ```

   `start.sh`脚本如下

   ```bash
   # 切入源码目录，以确保能正常执行
   cd /home/sidchai/workspace/vuepress-blog
   
   # 拉取最新代码
   git pull
   
   # 杀死目前已启动进程
   ID=`ps -ef|grep node | grep vuepress|awk '{print $2}'`
   echo --- the process is $ID ---
   kill -9 $ID
   echo "killed $ID"
   
   # 启动
   nohup npm run serve &
   ```

   按esc，输入:wq，保存退出后，使用`./start.sh`启动程序

   ```bash
   # 执行启动命令
   ./start.sh
   
   # 查看运行日志
   tail -222f nohup.out
   
   # 使用curl检测程序是否正常运行
   curl http://localhost:7777
   ```

6. 外网通过ip+端口的方式访问

   ```
   如果使用的是阿里云服务器，需要先开启端口
   1.登录阿里云，找到ECS实例
   2.点进去之后，找到本实例安全组
   3.添加安全组，有的话点进去直接开启即可
   ```

7. `Nginx`域名http版配置

   ```bash
   # 进入/usr/local/nginx/conf/目录
   vim nginx.conf
   
   # 在最后一行大括号结束前，加入以下配置，并将sidchai.cn换成你自己的域名
      # http域名配置
      server {
       		listen 80;
       		server_name www.sidchai.cn sidchai.cn;
   
       		location / {
       			proxy_pass  http://127.0.0.1:7777;
       			proxy_redirect off;
       			proxy_set_header Host $http_host;
       			proxy_set_header   X-Real-IP $remote_addr;
       			proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
       			proxy_set_header Upgrade $http_upgrade;
       			proxy_set_header Connection "upgrade";
   
       			root html;
       			index index.html index.htm;
       		}
       }
   ```

8. 阿里云安全组配置80端口为0.0.0.0/0

9. 重新加载nginx配置文件

   ```bash
   # 验证nginx配置文件是否正确
   /usrlocal/nginx/sbin/nginx -t
   
   # 重新加载nginx配置文件
   /usrlocal/nginx/sbin/nginx -s reload
   ```

10. 去做域名解析

    

### SSL证书(https)配置

- 阿里云免费证书

  - 在输入框内搜索SSL证书，进入SSL证书控制台，点击购买证书

    ![](https://sidchai.oss-cn-beijing.aliyuncs.com/vuepress-blog-cover/8.png)

  - 点击证书申请

    ![](https://sidchai.oss-cn-beijing.aliyuncs.com/vuepress-blog-cover/9.png)

  - 申请证书，填写资料

    ![](https://sidchai.oss-cn-beijing.aliyuncs.com/vuepress-blog-cover/10.png)

  - 骚等3-5秒点击验证

- Let‘s Encrypt免费证书

- Nginx配置证书

  ```bash
  进入/usr/local/nginx/conf/目录# 进入/usr/local/nginx/conf/目录
  vim nginx.conf
  
  # 在最后一行大括号结束前，加入以下配置，并将sidchai.cn换成你自己的域名
  	#所有带http的请求，统一发到https请求上
      server {
      		listen 80;
      		server_name www.sidchai.cn *.sidchai.cn;
      		rewrite ^(.*)$ https://$host$1 permanent;
      }
  
      # 未带www的请求，统一发到https://www上
      server {
      		listen 80;
      		listen 443 ssl;
      		server_name sidchai.cn;
      		return 301 htpps://www.sidchai.cn$request_uri;
      }
  
      # https 请求处理
      server {
      		listen 443 default_server ssl;
      		server_name www.sidchai.cn;
      		ssl_certificate      /usr/local/nginx/ssh/4611126_www.sidchai.cn.pem;
      		ssl_certificate_key  /usr/local/nginx/ssh/4611126_www.sidchai.cn.key;
  
      		location / {
      			proxy_pass  http://127.0.0.1:7777;
      			proxy_redirect off;
      			proxy_set_header Host $http_host;
      			proxy_set_header   X-Real-IP $remote_addr;
      			proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
      			proxy_set_header Upgrade $http_upgrade;
      			proxy_set_header Connection "upgrade";
  
      			root html;
      			index index.html index.htm;
      		}
      }
  ```

- 重新加载nginx配置文件

  ```bash
  # 验证nginx配置文件是否正确
  /usrlocal/nginx/sbin/nginx -t
  
  # 重新加载nginx配置文件
  /usrlocal/nginx/sbin/nginx -s reload
  ```

  PS：如果出现`nginx: [emerg] the ``"ssl"` `parameter requires ngx_http_ssl_module ``in` `/usr/local/nginx/conf/nginx.conf:37`错误，[点我查看解决方法](https://blog.csdn.net/duyusean/article/details/79348613)

- 最终效果，访问https://www.sidchai.cn要能成功,并且加上锁





