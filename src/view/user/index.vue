<template>
  <div class="user">
    <div>
      <Card>
        <tables
          ref="tables"
          editable
          searchable
          search-place="top"
          v-model="tableData"
          :columns="columns"
        />
        <Row type="flex" justify="space-between" align="middle">
          <Col class="ctrls">
            <Button @click="handleSelectAll(true)">批量全选</Button>
            <Button @click="handleSelectAll(false)">取消全选</Button>
            <Button style="margin: 10px 0" type="primary" @click="exportExcel"
              ><Icon type="md-download"></Icon>导出表格</Button
            >
          </Col>
          <Col>
            <Page
              :total="40"
              :curent="page"
              :page-size="limit"
              :page-size-opts="pageArr"
              @on-change="onPageChange"
              @on-page-size-change="onPageSizeChange"
              size="small"
              show-elevator
              show-sizer
              show-total
            ></Page
          ></Col>
        </Row>
      </Card>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import Tables from '_c/tables'

export default {
  name: 'userManagement',
  components: {
    Tables
  },
  data () {
    return {
      page: 0,
      limit: 10,
      total: 40,
      pageArr: [10, 30, 50, 100],
      columns: [
        {
          type: 'selection',
          width: 60,
          align: 'center'
        },
        {
          title: '用户昵称',
          key: 'name',
          minWidth: 120
        },
        {
          title: '登录名',
          key: 'username',
          minWidth: 120
        },
        {
          title: '角色',
          key: 'roles',
          align: 'center',
          minWidth: 120
        },
        {
          title: '积分',
          key: 'favs',
          align: 'center',
          minWidth: 80
        },
        {
          title: '是否禁用',
          key: 'status',
          align: 'center',
          minWidth: 120,
          render: (h, params) => {
            return h('div', [
              h('span', params.row.status === '0' ? '否' : '是')
            ])
          }
        },
        {
          title: '是否VIP',
          key: 'isVip',
          align: 'center',
          minWidth: 120,
          render: (h, params) => {
            return h('div', [
              h('span', params.row.created === '0' ? '否' : '是')
            ])
          }
        },
        {
          title: '创建时间',
          key: 'created',
          align: 'center',
          minWidth: 120,
          render: (h, params) => {
            return h('div', [
              h(
                'span',
                dayjs(params.row.created).format('YYYY-MM-DD hh:mm:ss')
              )
            ])
          }
        },
        {
          title: '设置',
          key: 'setting',
          slot: 'actions',
          fixed: 'right',
          width: 160,
          align: 'center'
        }
      ],
      tableData: []
    }
  },
  mounted () {},
  methods: {
    onPageChange (page) {
      this.page = page
      this._getList()
    },
    onPageSizeChange (size) {
      this.limit = size
    },
    exportExcel () {
      this.$refs.tables.exportCsv({
        filename: `table-${new Date().valueOf()}.csv`
      })
    }
  }
}
</script>

<style lang="less" scoped>
.ctrls {
  button {
    margin-right: 10px;
  }
}
</style>
