# bbs论坛设计文档

## 项目介绍

- 该项目为练手的小项目，目前只完成了登录、注册、退出与发表评论功能

## 技术列表

### 后端

- 使用了`express`作为主要开发框架

- 使用了`art-template`进行后端渲染前端页面 与 模板页面的开发
- 使用了`MongoDB`数据库进行数据存储
- 使用了`mongoose`进行数据库的操作
- 使用了`blueimp-md5`进行密码的加密
- 使用了`express-session`进行用户登录状态的保存

### 前端

- 使用了`jQuery`的`ajax`进行登录、注册的数据交互
- 使用了`bootstrap`进行页面的快速开发
- 使用了`ribbon.js`实现了登录、注册页面背景彩带特效

## 表设计

```sql
bbs_admin {
  admin_id int not NULL,
  admin_login_name varchar deafult NULL,
  admin_login_pwd varchar default NULL
}
bbs_user {
  user_id int not NULL 
  user_name char
  user_email char
  user_sex int [-1 0 1] # -1保密 0 女 1 男
  user_phone int
  user_status int [0 1 2] # 用户状态，0 正常， 1 评论禁止， 2登录禁止
  user_time date # 注册时间
  
}
bbs_article {
  art_id int not NULL,
  art_user_id int default NULL,
  art_title varchar default NULL
  art_content char default NULL, # 正文
  art_view int deafult NULL # 浏览量
  art_cre_time date default NULL #创建时间 
  art_com_num int default NULL #评论数
}
bbs_comment {
  com_id int not NULL
  com_content char # 评论正文
  com_art_id int # 文章id
  com_user_id int # 评论用户的id
  com_time date # 评论时间
}
```



## 路由设计

| 路径    | 方法 | get参数 | post参数                          | 是否需要登录 | 返回信息                                                     | 备注         |
| ------- | ---- | ------- | --------------------------------- | ------------ | ------------------------------------------------------------ | ------------ |
| /       | GET  | 无      | 无                                | 否           |                                                              | 渲染首页     |
| /login  | GET  | 无      | 无                                | 否           |                                                              | 渲染登录页面 |
| /login  | POST | 无      | email、password                   | 否           | msg:101  邮箱错误<br />msg:102  密码错误<br />msg:103  数据库繁忙<br />msg:200  登录成功 | 登录路由     |
| /regist | GET  | 无      | 无                                | 否           |                                                              | 渲染注册页面 |
| /regist | POST | 无      | email、password、name、repassword | 否           | msg:101  用户名不能为空<br />msg:102  邮箱不能为空<br />msg:103  密码不能为空<br />msg:104  两次密码不一致<br />msg:105  用户名已存在<br />msg:106  邮箱已存在<br />msg:107  服务器繁忙<br />msg:200  注册成功 | 注册路由     |
| /logout | GET  | 无      | 无                                | 是           |                                                              | 用户退出登录 |

## 演示地址

[演示地址](https://test.drghost.top/)

## 项目截图

https://cdn.jsdelivr.net/gh/1771346368/Picture-bed@main/img/20201021193728.png

https://cdn.jsdelivr.net/gh/1771346368/Picture-bed@main/img/20201021191955.png