<template>
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
        <Button style="margin: 10px 0" type="primary" @click="exportExcel"
          >导出为Csv文件11111</Button
        >
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
        ></Page>
      </Row>
    </Card>
  </div>
</template>

<script>
import Tables from '_c/tables'
import { getList } from '@/api/content'
export default {
  name: 'content_management',
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
          title: '标题',
          key: 'title'
        },
        {
          title: '创建时间',
          key: 'create',
          align: 'center'
        },
        {
          title: '作者',
          key: 'user',
          align: 'center'
        },
        {
          title: '分类',
          key: 'classification',
          align: 'center'
        },
        {
          title: '积分',
          key: 'integral',
          align: 'center'
        },
        {
          title: '标签',
          key: 'sign',
          align: 'center'
        },
        {
          title: '是否结束',
          key: 'isFinished',
          align: 'center'
        },
        {
          title: '阅读计数',
          key: 'read',
          align: 'center'
        },
        {
          title: '回答记数',
          key: 'answer',
          align: 'center'
        },
        {
          title: '设置',
          key: 'setting',
          align: 'center'
        }
      ],
      tableData: []
    }
  },
  methods: {
    onPageChange (page) {
      this.page = page
      this._getList()
    },
    onPageSizeChange (size) {
      this.limit = size
    },
    _getList () {
      getList({
        page: this.page - 1,
        limit: this.limit
      }).then((res) => {
        this.tableData = res.data
        this.total = res.total
      })
    },
    exportExcel () {
      this.$refs.tables.exportCsv({
        filename: `table-${new Date().valueOf()}.csv`
      })
    }
  },
  mounted () {
    this._getList()
  }
}
</script>

<style></style>
