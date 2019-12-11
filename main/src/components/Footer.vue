<template>
  <div id="footer" class="container-fluid">
    <div class="logo">
      <img class="logoimg" src="@/assets/img/logo.jpg" alt="logo图">
    </div>
    <p class="title">同窗e站</p>
    <p class="address_tel_fax">
      <span>地址：福建省福州市仓山区建新镇上下店路15号福建农林大学</span>
      <span>Tel：888-888-888</span>
      <span>Fax：8888-88888888</span>
    </p>
    <p class="email_wx">
      <span>邮箱：xxx@163.com</span>
      <span>公司微信号：xxx</span>
    </p>
    <p class="copy">Copyright &copy; 2018 - 2019 福州琢木鸟文化传媒有限公司</p>
  </div>
</template>
<script>
export default {
  name: "Footer",
  data() {
    return {};
  }
};
</script>
<style scoped>
#footer {
  width: 100%;
  height: 100%;
  color: #fff;
  background: #474747;
  overflow: hidden;
  text-align: center;
}
.logo {
  width: 95px;
  height: 95px;
  margin: 50px auto 20px;
}
.logoimg {
  width: 95px;
  height: 95px;
  margin: 50px auto 20px;
}
.title {
  font-size: 25px;
  margin-bottom: 20px;
}
.address_tel_fax {
  color: #d3d3d3;
  font-size: 14px;
  margin: 10px 0;
}
.email_wx {
  color: #d3d3d3;
  font-size: 14px;
}
.copy {
  color: #d3d3d3;
  font-size: 14px;
  margin: 50px 0 10px;
}
@media screen and (max-width: 997px) {
  .title {
    font-size: 20px;
  }
  .address_tel_fax {
    font-size: 12px;
  }
  .email_wx {

  font-size: 12px;
}
.copy {
  font-size: 12px;
  margin: 30px 0 10px;
}
}
</style>

