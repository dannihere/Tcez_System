<template>
    <div id="NewsInformation">
        <div class="container">
            <div class="container text-center">
                <h3>服务流程</h3>
                <p style="color:#b2b2b2">Company News</p>
            </div>
            <div class="nav container text-center">
                <a  :class="{'active':activ===1}"  @click="changeData(1)">流程1</a>
                <a  :class="{'active':activ===2}" @click="changeData(2)">流程2</a>
                <a  :class="{'active':activ===3}" @click="changeData(3)">流程3</a>
            </div>
            <ul class="news-container container-fuild">
                <li v-for="(item,index) in newsList" :key="index" class="wow fadeIn">
                    <div class="content">
                        <p>{{item.title}}</p>
                        <p>{{item.introduce}}</p>
                    </div>
                    <div class="time">
                      <img src="@/assets/img/logo.jpg">
                        <!--<p>{{item.date}}</p>
                        <span>{{item.year}}</span>-->
                    </div>
                    <div class="circle">
                        <img src="../assets/img/circle.png">
                        <i class="line center-block"></i>
                    </div>
                </li>
            </ul>
            <div class="contaianer-fuild text-center more">
                <i class="glyphicon glyphicon-th"></i>
            </div>
        </div>
    </div>
</template>
<script>
import { WOW } from 'wowjs';
export default {
    name: 'NewsInformation',
    data(){
        return{
          activ:1,
            newsList:[
            ]
        }
    },
    mounted(){
        var wow = new WOW();
        wow.init();

        this.changeData(1)

    },
  methods:{
    changeData: function(index){
      if(index==1){
        this.activ=1
        this.newsList=[
          {
            id: '001',
            title: '世界上第一个程序员',
            introduce: '为计算程序拟定“算法”，写作的第四份“程序设计流程图”，被珍视为“第一位给计算机',
            date: '05-24',
            year: '2019'
          },{
            id: '002',
            title: '世界上第二个程序员',
            introduce: '为计算程序拟定“算法”，写作的第四份“程序设计流程图”，被珍视为“第一位给计算机',
            date: '05-24',
            year: '2019'
          }
        ]
      }else if(index==2){
        this.activ=2
        this.newsList=[
          {
            id: '003',
            title: '世界上第三个程序员',
            introduce: '为计算程序拟定“算法”，写作的第四份“程序设计流程图”，被珍视为“第一位给计算机',
            date: '05-24',
            year: '2019'
          },{
            id: '004',
            title: '世界上第四个程序员',
            introduce: '为计算程序拟定“算法”，写作的第四份“程序设计流程图”，被珍视为“第一位给计算机',
            date: '05-24',
            year: '2019'
          }
        ]
      }else if(index==3){
        this.activ=3
        this.newsList=[
         {
            id: '005',
            title: '世界上第五个程序员',
            introduce: '为计算程序拟定“算法”，写作的第五份“程序设计流程图”，被珍视为“第一位给计算机',
            date: '05-24',
            year: '2019'
          },{
            id: '006',
            title: '世界上第六个程序员',
            introduce: '为计算程序拟定“算法”，写作的第五份“程序设计流程图”，被珍视为“第一位给计算机',
            date: '05-24',
            year: '2019'
          }
        ]
      }

    }

  }


}
</script>
<style scoped>
.nav{
    margin: 20px 0;
}
.nav>a{
    display: inline-block;
    text-decoration: none;
    width: 100px;
    height: 45px;
    line-height: 45px;
    color: #333;
    border: 1px solid #333;
}
.nav>a.active{
    color: #1e73be;
    border-color: #1e73be;
}
.nav>a:hover{
    color: #1e73be;
    border-color: #1e73be;
}
.news-container{
    overflow: hidden;
    margin-bottom: 0;
}
.news-container>li{
    width: 55.6%;
    height: 120px;
    float: left;
    color: #333;
    text-align: right;
    border-left: 1px solid transparent;
    border-right: 1px solid transparent;
}
.news-container>li:hover{
    color: #1e73be;
    border: 1px solid #1e73be;
    cursor: pointer;
}
.news-container>li:nth-of-type(2n){
    float: right;
    text-align: left;
}
.news-container>li>.content{
    width: 60%;
    float: left;
    padding: 20px 0;
}
.news-container>li>.time{
    width: 20%;
    float: left;
    padding: 10px 0;
  padding-left: 22px;
}
.news-container>li>.time>p{
    font-size: 30px;
    margin: 5px 0;
}
.news-container>li>.time>img{
    height: 70px;
  width: 70px;
    margin: 1px 0;
}
.news-container>li>.circle{
    width: 20%;
    height: 100%;
    float: left;
    position: relative;
}
.news-container>li>.circle>img{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 20px;
    height: 20px;
}
.news-container>li>.circle>i{
    display: block;
    width: 1px;
    height: 100%;
    background: #707070;
}
.news-container>li:nth-of-type(2n)>.content{
    float: right;
}
.news-container>li:nth-of-type(2n)>.time{
    float: right;
}
.news-container>li:nth-of-type(2n)>.circle{
    float: right;
}
.news-container>li:nth-of-type(1)>.circle>i{
    height: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
}
.more{
    font-size: 25px;
    color: #707070;
}
.more>i{
    cursor: pointer;
}
@media screen and (max-width: 767px){
    .news-container>li{
        width: 100%;
    }
    .news-container>li>.content{
        width: 70%;
        text-align: left;
        float: right;
    }
    .news-container>li>.time{
        width: 30%;
        text-align: left;
        float: right;
    }
    .news-container>li>.circle{
        display: none;
    }
}
</style>

