<template>
  <div class="app-home-vue frame-page">
    <Row :space="30">
        Мониторинг процессов

      <Table :datas="datas" stripe>
        <TableItem title="id процесса" prop="process_id"></TableItem>
        <TableItem title="состояние" prop="status"></TableItem>
        <TableItem title="параметры" prop="avito_data"></TableItem>
        <TableItem title="время запуска" prop="data_begin"></TableItem>
      </Table>
    </Row>
  </div>
</template>
<script>
//import data1 from '@components/demo-components/components/datas/data1';
import Request from '@common/request';


export default {
  data() {
    return {
      datas: []
    };
  },
  mounted() {

    Request.Statuses.process_statuses().then(resp => {
      if (resp.ok) {
        this.datas = resp.body;
      }
    });

    let ddatas = [
      { id: 5, process_id: 123455, status: 'запущен', params: 12, address: 'Shanghai' },
      { id: 6, process_id: 123456, status: 'в работе', params: 13, address: 'Shanghai' },
      { id: 7, process_id: 123457, status: 'завершен', params: 14, address: 'Shanghai' },
      { id: 5, process_id: 123458, status: 'ошибка', params: 15, address: 'Shanghai' },
      { id: 6, process_id: 123459, status: 'завершен', params: 16, address: 'Shanghai' },
      { id: 7, process_id: 123453, status: 'завершен', params: 17, address: 'Shanghai' }
      ]
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
