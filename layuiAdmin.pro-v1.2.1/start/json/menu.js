{
  "code": 0
  ,"msg": ""
  ,"data": [{
    "title": "主页"
    ,"icon": "layui-icon-home"
    ,"list": [{
      "title": "控制台"
      ,"jump": "/"
    }]
  },{
    "name": "app"
    ,"title": "应用"
    ,"icon": "layui-icon-app"
    ,"list": [{
      "name": "content"
      ,"title": "内容系统"
      ,"list": [{
        "name": "list"
        ,"title": "文章列表"
      },{
        "name": "tags"
        ,"title": "分类管理"
      }]
    },{
      "name": "forum"
      ,"title": "社区系统"
      ,"list": [{
        "name": "list"
        ,"title": "帖子列表"
      }]
    }]
  },{
    "name": "user"
    ,"title": "用户"
    ,"icon": "layui-icon-user"
    ,"list": [{
      "name": "user"
      ,"title": "网站用户"
      ,"jump": "user/user/list"
    }, {
      "name": "administrators-list"
      ,"title": "后台管理员"
      ,"jump": "user/administrators/list"
    }, {
      "name": "administrators-rule"
      ,"title": "角色管理"
      ,"jump": "user/administrators/role"
    }]
  }]
}