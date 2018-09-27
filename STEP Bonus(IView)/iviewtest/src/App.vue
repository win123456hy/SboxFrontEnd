<template>
  <div id="app">
    <Layout>
      <Header>

      </Header>
      <Layout :style="{minHeight: '100vh'}">
        <Sider collapsible :collapsed-width="78" v-model="isCollapsed">
          <Menu active-name="1-5" theme="dark" width="auto" :class="menuitemClasses">
            <MenuItem to="/login" name="1-1">
              <Icon type="md-contact"></Icon>
              <span>Login</span>
            </MenuItem>
            <MenuItem to="/register" name="1-2">
              <Icon type="md-contact"></Icon>
              <span>Register</span>
            </MenuItem>                      
            <MenuItem to="/dashboard" name="1-3">
              <Icon type="md-analytics" />
              <span>DashBoard</span>
            </MenuItem>            
            <MenuItem to="/table" name="1-4">
              <Icon type="md-analytics" />
              <span>Table</span>
            </MenuItem>              
            <MenuItem to="/about" name="1-5">
              <Icon type="ios-information-circle-outline" />
              <span>About</span>
            </MenuItem>
          </Menu>
        </Sider> 
        <Content :style="{padding: '0 50px'}">
          <Card>
            <div style="min-height: 800px;">

              <router-view></router-view>
            </div>
          </Card>
        </Content>
      </Layout>
      <Footer class="layout-footer-center">Make by Dat Dev</Footer>
    </Layout>
  </div>
</template>


<script>
export default {
  name: "app",
  data() {
    return {
      isCollapsed: false,
      split1: 0.5,
    };
  },
  computed: {
    menuitemClasses: function() {
      return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
    }

  }

};
</script>

<style>
.menu-item span {
  display: inline-block;
  overflow: hidden;
  width: 69px;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: bottom;
  transition: width 0.2s ease 0.2s;
}
.menu-item i {
  transform: translateX(0px);
  transition: font-size 0.2s ease, transform 0.2s ease;
  vertical-align: middle;
  font-size: 16px;
}
.collapsed-menu span {
  width: 0px;
  transition: width 0.2s ease;
}
.collapsed-menu i {
  transform: translateX(5px);
  transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
  vertical-align: middle;
  font-size: 22px;
}
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-logo {
  width: 100px;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}
.layout-nav {
  width: 420px;
  margin: 0 auto;
  margin-right: 20px;
}
.layout-footer-center {
  text-align: center;
}
</style>
