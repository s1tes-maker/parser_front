<template>
  <div class="app-home-vue frame-page">

      <Form
        ref="form"
        mode="block"
        :model="data"
        :showErrorTip=true
        :rules="rules"
      >
        <Row>
          <Cell width="24">
            <FormItem prop="url">
              <template v-slot:label>ссылка</template>
              <textarea rows="3" v-autosize v-model="data.url" v-wordlimit='1000'></textarea>
            </FormItem>
          </Cell>

          <Cell width="24">
            <FormItem label="количество" prop="count">
              <template v-slot:label>количество объявлений</template>
              <NumberInput v-model="data.count" :min="1" :max="500"></NumberInput>
            </FormItem>
          </Cell>

          <Cell width="24">
            <FormItem label="предложить свою цену" prop="suggest_price" :show-label="false">
              <Checkbox v-model="data.suggest_price"></Checkbox> Предложить свою цену
            </FormItem>
          </Cell>

          <Row v-if="data.suggest_price">
              <Cell width="24">
                <FormItem prop="discount.min" label="диапазон скидки от (в процентах)">
                  <NumberInput v-model="data.discount.min" :min="0" :max="100"></NumberInput>
                </FormItem>

                <FormItem prop="discount.max" label="диапазон скидки до">
                  <NumberInput v-model="data.discount.max" :min="0" :max="100"></NumberInput>
                </FormItem>
              </Cell>
              <Cell width="24">
                <FormItem label="текст сообщения в предложении цены" prop="suggest_price_message">
                  <template v-slot:label>Введите текст сообщения в предложении цены(не обязательно)</template>
                  <textarea rows="3" v-autosize v-model="data.suggest_price_message" v-wordlimit='1000'></textarea>
                </FormItem>
              </Cell>
            </Row>

          <Cell width="24">
            <FormItem>
              <Button color="primary" @click="submit">начать</Button>&nbsp;&nbsp;&nbsp;
            </FormItem>
          </Cell>
        </Row>
      </Form>

  </div>
</template>
<script>

  import Request from '@common/request';
  import ParserModel from "@js/model/Parser";
  import {message} from "heyui";

export default {
  data() {
    return {
      data: ParserModel.parse({
        'url': 'https://yandex.ru/',
        'count': 500,
        'suggest_price': true,
        'discount' : {min: 41, max: 49}
      }),

      rules: {
        required: ['url', 'count'],
        combineRules: [
          {
            parentRef: 'discount',
            refs: ['min', 'max'],
            valid: {
              valid: 'lessThan',
              message:
                'Неверный диапазон цен'
            }
          }
        ],
        rules: {
          'url': {
            type: 'url'
          }
        }
      }
    };
  },
  methods: {
    submit() {
      Request.Parser.parse(this.data).then(resp => {
        if (resp.ok) {
          message('парсер успешно запущен. Номер процесса ' + resp.process_id);
        }
      });
    },
    resetData() {
      this.data = ParserModel.parse({});
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

  }
</style>
