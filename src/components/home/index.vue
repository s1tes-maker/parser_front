<template>
  <div class="app-home-vue frame-page">
    <Row :space="30">

    </Row>
  </div>
</template>
<script>
import data1 from '@components/demo-components/components/datas/data1';
import data2 from '@components/demo-components/components/datas/data2';
import data3 from '@components/demo-components/components/datas/data4';

export default {
  data() {
    return {
      data1,
      data2,
      data3,
      type: 'type1'
    };
  },
  methods: {
    openMore() {
      this.$router.push({ name: 'Chart' });
    }
  }
};
</script>

<style lang="less">
  .app-home-vue {
    .home-part-body {
      height: 350px;
      .echarts-vue {
        height: 350px;
      }
    }

    .home-part-body2 {
      height: 420px;
      .echarts-vue {
        height: 420px;
      }
    }

    .progress-div {
      > p {
        padding: 8px 0;
      }
      .h-progress {
        &-title {
          color: @dark2-color;
          font-size: 15px;
        }
        &-text {
          width: 40px;
        }
      }
    }
  }
</style>
