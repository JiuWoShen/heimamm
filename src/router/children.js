// 嵌套路由及提取icon与标签内容
// 导入嵌套子组件
import user from '../views/index/user/user.vue'
import subject from '../views/index/subject/subject.vue'
import question from '../views/index/question/question.vue'
import enterprise from '../views/index/enterprise/enterprise.vue'
import chart from '../views/index/chart/chart.vue'

export default [
    {
        path: 'user',
        component: user,
        meta:{
            power:['超级管理员','管理员'],
            icon:'el-icon-user',
            title:'用户列表'
        }
    },
    {
        path: 'subject',
        component: subject,
        meta:{
            power:['超级管理员','管理员','老师'],
            icon:'el-icon-notebook-2',
            title:'学科列表'
        }
    },
    {
        path: 'chart',
        component: chart,
        meta:{
            power:['超级管理员','管理员','老师'],
            icon:'el-icon-pie-chart',
            title:'数据概览'
        }
    },
    {
        path: 'question',
        component: question,
        meta:{
            power:['超级管理员','管理员','老师','学生'],
            icon:'el-icon-edit-outline',
            title:'题库列表'
        }
    },
    {
        path: 'enterprise',
        component: enterprise,
        meta:{
            power:['超级管理员','管理员','老师'],
            icon:'el-icon-office-building',
            title:'企业列表'
        }
    },
]