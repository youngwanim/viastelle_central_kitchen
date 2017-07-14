/**
 * Created by hyemi_kim on 2017-07-13.
 */
const lang = {
  title: 'CENTRAL KITCHEN',
  login: {
    login: 'Login ID',
    holder_login: 'ID',
    pw: 'Password',
    holder_pw: 'PASSWORD',
    sign: 'sign in',
    error: ['The ID or Password dis not match', 'please try again']
  },
  production: {
    records: {
      menu: {cn: '商品', en: 'Menu'},
      planned: {cn: '预计产量', en: 'Planned production'},
      actual: {cn: '实际产量', en: 'Actual production'},
      sold: {cn: '售出', en: 'Sold'},
      stock: {cn: '库存', en: 'Stock'}
    },
    plan: {
      menu: {cn: '商品', en: 'Menu'},
      planned: {cn: '预计入库', en: 'Planned'},
      actual: {cn: '实际入库', en: 'Actual in-stock'},
      sold: {cn: '售出', en: 'Sold'},
      stock: {cn: '库存', en: 'Stock'}
    },
    cn: {
      title: '生产管理',
      records_title: '生产记录',
      plan_title: '商品分配计划',
      currentDate: '今天'
    },
    en: {
      title: 'production manage',
      records_title: 'Production records',
      plan_title: 'Commodity distribution plan',
      currentDate: 'today'
    }
  },
  schedule: {
    cn: {
      title: '生产日程表'
    },
    en: {
      title: 'schedule'
    }
  }
}

export default lang
