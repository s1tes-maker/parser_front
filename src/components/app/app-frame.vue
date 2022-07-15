<style lang="less"></style>
<template>
  <div>
    <Layout class="app-frame"
            v-if="!loading"
            :siderCollapsed="siderCollapsed"
            :siderFixed="layoutConfig.siderFixed">
      <Sider :theme="layoutConfig.siderTheme">
        <appMenu :theme="layoutConfig.siderTheme"></appMenu>
      </Sider>
      <Layout :headerFixed="layoutConfig.headerFixed">
        <HHeader theme="white">
          <appHead @openSetting="openSetting = true"
                   :layoutConfig="layoutConfig">
          </appHead>
        </HHeader>
        <SysTabs v-if="layoutConfig.showSystab" homePage="Home"></SysTabs>
        <Content>
          <div class="app-frame-content">
            <!-- <keep-alive> -->
            <router-view></router-view>
            <!-- </keep-alive> -->
          </div>
          <HFooter>
            <appFooter></appFooter>
          </HFooter>
        </Content>
      </Layout>
    </Layout>
    <Modal v-model="openSetting" type="drawer-right" title="系统布局配置">
      <appLayoutSetting :initLayoutConfig="layoutConfig"></appLayoutSetting>
    </Modal>
  </div>
</template>
<script>
import appLayoutSetting from './modules/app-layout-setting';
import appHead from './app-header';
import appMenu from './app-menu';
import appFooter from './app-footer';
import SysTabs from '../common/sys-tabs';
import Request from '@common/request';
import { mapState } from 'vuex';
import { loading, heyuiConfig } from 'heyui';

export default {
  data() {
    return {
      loading: true,
      openSetting: false,
      layoutConfig: {
        siderTheme: 'white',
        showSystab: false,
        headerFixed: true,
        siderFixed: true
      }
    };
  },
  mounted() {
    // 如果无后台数据，将此处屏蔽
    this.init();
  },
  methods: {
    init() {
      loading('加载中');
      Request.User.info().then(resp => {
        if (resp.ok) {
          resp.body.avatar = require('../../images/avatar.png');
          this.$store.dispatch('updateAccount', resp.body);
          this.initDict();
          this.initMenu();
        }
      });
    },
    initDict() {
      Request.Dict.get().then(resp => {
        if (resp.ok) {
          let dicts = resp.body;
          for (let dict of dicts) {
            heyuiConfig.addDict(dict.name, dict.data);
          }
        }
        this.loading = false;
        loading.close();
      });
    },
    updateLayoutConfig({ key, value }) {
      this.layoutConfig[key] = value;
    },
    initMenu() {

      Request.Account.auth_page({page_name: this.$route.name}).then(resp => {
        if (resp.message == 403) {
          this.$router.replace({ name: 'PermissionError' });
        }
      });

       Request.Account.menus().then(resp => {
         if (resp.ok) {
           this.$store.dispatch('updateMenus', resp.body);
         }
       });
    }
  },
  computed: {
    siderCollapsed() {
      return this.$store.state.siderCollapsed;
    },
    ...mapState(['menus', 'fullMenus', 'menuKeys', 'fullMenuKeys'])
  },
  components: {
    appHead,
    appMenu,
    SysTabs,
    appFooter,
    appLayoutSetting
  }
};
</script>
