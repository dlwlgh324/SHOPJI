<template>
<section class="header">
<div class="container">
<a href="#" class="logo"><strong>SHOP</strong>JI</a>
<input type="text">
<ul class="myMenu">
  <li><a href="#">로그인</a></li>
  <li><a href="#">회원가입</a></li>
  <li><a href="#">마이페이지</a></li>
  <li><a href="#">주문/배송조회</a></li>
  <li><a href="#">장바구니</a></li>
</ul>
</div>
</section>  
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
.header{
  padding: 2rem 0;
}

.container{
  position: relative;
  display: flex; 
  justify-content: space-between; 
  }

.logo{
  font-size: 3.6rem;
}

.myMenu{
  position: relative;
  display: flex;
  font-size: 1.4rem;
  li{
    margin-left: 1.5rem;
  }
}
</style>