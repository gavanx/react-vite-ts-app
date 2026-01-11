import React, { useState, useMemo } from 'react'
import { Card, Cascader, Select, Space, Typography } from 'antd'

const { Title } = Typography

interface RegionOption {
  label: string
  value: string
  children?: RegionOption[]
}

const REGION_DATA: RegionOption[] = [
  {
    label: '全球',
    value: 'glo-glo',
  },
  {
    label: '国内',
    value: 'chn-chn',
    children: [
      {
        label: '中国-智驾专区',
        value: 'chn-evad',
      },
      {
        label: '中国-北京',
        value: 'chn-beijing',
        children: [
          {
            label: 'rent',
            value: 'rent',
            children: [
              {
                label: 'p5',
                value: 'p5',
              },
              {
                label: '安康机房',
                value: 'ak',
              },
              {
                label: 'C3',
                value: 'c3',
              },
              {
                label: '金山云中经云',
                value: 'ksyzjy',
              },
              {
                label: 'C4捷付睿通区域',
                value: 'c4-jfrt',
              },
              {
                label: 'P3机房',
                value: 'P3',
              },
              {
                label: 'C4',
                value: 'c4',
              },
              {
                label: 'C5',
                value: 'c5',
              },
              {
                label: 'C3捷付睿通区域',
                value: 'c3-jfrt',
              },
              {
                label: '清河大队',
                value: 'qinghedadui',
              },
              {
                label: '总参',
                value: 'zongcan',
              },
              {
                label: '科技园机房',
                value: 'm1',
              },
              {
                label: '鹏博士亦庄机房',
                value: 'nc1',
              },
              {
                label: '北京大红门机房',
                value: 'nc2',
              },
              {
                label: '科技园机房ISP',
                value: 'm1-isp',
              },
              {
                label: '中云信',
                value: 'ksyzyx',
              },
            ],
          },
          {
            label: 'office',
            value: 'office',
            children: [
              {
                label: '科学城',
                value: 'kexuecheng',
              },
              {
                label: 'miwms',
                value: 'miwms',
              },
              {
                label: 'it',
                value: 'it',
              },
              {
                label: 'mihome',
                value: 'mihome',
              },
              {
                label: '北京亦庄产业园机房',
                value: 'm2',
              },
              {
                label: '海淀科技园',
                value: 'pek01',
              },
              {
                label: '北京白空间',
                value: 'pek55',
              },
              {
                label: '七里渠办公区',
                value: 'pek03',
              },
              {
                label: '北京海淀科技园运营商机房',
                value: 'pek52',
              },
              {
                label: '北京亦庄科技园数据中心',
                value: 'pek61',
              },
              {
                label: '北京清河智米',
                value: 'pek07',
              },
              {
                label: '北京直播大厅',
                value: 'pek08',
              },
              {
                label: '北京祥龙实验室',
                value: 'pek10',
              },
              {
                label: '北京三元首农',
                value: 'pek11',
              },
              {
                label: '北京竞业办公室',
                value: 'pek12',
              },
              {
                label: '北京亦庄M9',
                value: 'pek13',
              },
              {
                label: '北京亦庄科技园',
                value: 'pek02',
              },
              {
                label: '亦庄汽车工厂',
                value: 'm9',
              },
              {
                label: '昌平手机工厂',
                value: 'm3',
              },
              {
                label: '北京昌平M1',
                value: 'pek15',
              },
              {
                label: '北京昌平M4',
                value: 'pek14',
              },
              {
                label: 'CiscoVPN',
                value: 'cisco',
              },
              {
                label: '小米人VPN',
                value: 'mier',
              },
              {
                label: '北京海淀科技园IDC',
                value: 'pek51',
              },
              {
                label: '新业务北京IDC',
                value: 'mcbj',
              },
            ],
          },
          {
            label: 'cloud',
            value: 'cloud',
            children: [
              {
                label: '北京AWS',
                value: 'bjsaws',
              },
              {
                label: '金山云武清-生态云',
                value: 'ksywq-eco',
              },
              {
                label: '金山云北京机房',
                value: 'ksybj',
              },
              {
                label: '金山云武清',
                value: 'ksywq',
              },
              {
                label: '阿里云北京机房',
                value: 'bjsali',
              },
              {
                label: '阿里云张家口机房',
                value: 'alizjk',
              },
              {
                label: '北京腾讯云',
                value: 'tcbj',
              },
              {
                label: '火山引擎北京',
                value: 'vebj',
              },
              {
                label: '金山云天津专属机房',
                value: 'ksytjv',
              },
            ],
          },
        ],
      },
      {
        label: '中国-广州',
        value: 'chn-guangzhou',
        children: [
          {
            label: 'cloud',
            value: 'cloud',
            children: [
              {
                label: '金山云广州机房',
                value: 'ksygz',
              },
              {
                label: '阿里云广州机房',
                value: 'aligz',
              },
            ],
          },
          {
            label: 'rent',
            value: 'rent',
            children: [
              {
                label: '旗锐C6机房',
                value: 'qrc6',
              },
            ],
          },
          {
            label: 'office',
            value: 'office',
            children: [
              {
                label: '广州科技园',
                value: 'can01',
              },
            ],
          },
        ],
      },
      {
        label: '中国-杭州',
        value: 'chn-hangzhou',
        children: [
          {
            label: 'cloud',
            value: 'cloud',
            children: [
              {
                label: '阿里云杭州机房',
                value: 'alihz',
              },
            ],
          },
          {
            label: 'office',
            value: 'office',
            children: [
              {
                label: '杭州钱江国际',
                value: 'hgh01',
              },
            ],
          },
        ],
      },
      {
        label: '中国-宁夏',
        value: 'chn-ningxia',
        children: [
          {
            label: 'cloud',
            value: 'cloud',
            children: [
              {
                label: '金山云宁夏机房',
                value: 'ksynx',
              },
            ],
          },
        ],
      },
      {
        label: '中国-青岛',
        value: 'chn-qingdao',
        children: [
          {
            label: 'cloud',
            value: 'cloud',
            children: [
              {
                label: '阿里云青岛机房',
                value: 'aliqd',
              },
            ],
          },
        ],
      },
      {
        label: '中国-上海',
        value: 'chn-shanghai',
        children: [
          {
            label: 'office',
            value: 'office',
            children: [
              {
                label: '上海万科办公区',
                value: 'sha01',
              },
              {
                label: '上海WeWork办公区',
                value: 'cnsha04',
              },
              {
                label: '上海润和',
                value: 'sha03',
              },
              {
                label: '上海Wework',
                value: 'sha04',
              },
              {
                label: '上海汽车部Wework',
                value: 'sha06',
              },
              {
                label: '上海金桥5G园区',
                value: 'sha08',
              },
              {
                label: '上海试制车间',
                value: 'sha09',
              },
              {
                label: '上海新仓',
                value: 'sha0c1',
              },
              {
                label: '上海江空间',
                value: 'sha10',
              },
              {
                label: '新业务上海IDC',
                value: 'mcsh',
              },
              {
                label: '汽车部IDC',
                value: 'shwg',
              },
              {
                label: '上海嘉定智驾测试工区',
                value: 'sha11',
              },
            ],
          },
          {
            label: 'cloud',
            value: 'cloud',
            children: [
              {
                label: '金山云上海机房',
                value: 'ksysh',
              },
              {
                label: '上海微软AZURE',
                value: 'azuresh',
              },
              {
                label: '阿里云上海机房',
                value: 'alish',
              },
              {
                label: '金山上海私有云机房',
                value: 'kcgssh',
              },
            ],
          },
          {
            label: 'rent',
            value: 'rent',
            children: [
              {
                label: '鹏博士上海机房',
                value: 'nc3',
              },
              {
                label: '上海浦江万国机房',
                value: 'nc4',
              },
              {
                label: '上海万国库房',
                value: 'kf',
              },
            ],
          },
        ],
      },
      {
        label: '中国-深圳',
        value: 'chn-shenzhen',
        children: [
          {
            label: 'office',
            value: 'office',
            children: [
              {
                label: '深圳办公区',
                value: 'szx01',
              },
              {
                label: '深圳手机新业务竟业办公室',
                value: 'szx02',
              },
              {
                label: '深圳新职场',
                value: 'szx03',
              },
            ],
          },
          {
            label: 'cloud',
            value: 'cloud',
            children: [
              {
                label: '阿里云华南1',
                value: 'alihn1',
              },
            ],
          },
        ],
      },
      {
        label: '中国-扬州',
        value: 'chn-yangzhou',
        children: [
          {
            label: 'rent',
            value: 'rent',
            children: [
              {
                label: '扬州金山云',
                value: 'yangzhouksy',
              },
            ],
          },
        ],
      },
      {
        label: '中国-张家口',
        value: 'chn-zhangjiakou',
      },
      {
        label: '中国-重庆',
        value: 'chn-chongqing',
        children: [
          {
            label: 'rent',
            value: 'rent',
            children: [
              {
                label: '重庆',
                value: 'cq',
              },
            ],
          },
          {
            label: 'office',
            value: 'office',
            children: [
              {
                label: '重庆企业天地',
                value: 'ckg03',
              },
              {
                label: '重庆芯片',
                value: 'ckg04',
              },
              {
                label: '重庆光环中心',
                value: 'ckg05',
              },
              {
                label: '重庆金融',
                value: 'ckg02',
              },
            ],
          },
        ],
      },
      {
        label: '中国-乌兰察布',
        value: 'chn-wulanchabu',
        children: [
          {
            label: 'rent',
            value: 'rent',
            children: [
              {
                label: '内蒙乌兰察布机房',
                value: 'wlcb',
              },
            ],
          },
          {
            label: 'cloud',
            value: 'cloud',
            children: [
              {
                label: '阿里云乌兰察布机房',
                value: 'aliwlcb',
              },
            ],
          },
        ],
      },
      {
        label: '中国-武汉',
        value: 'chn-wuhan',
        children: [
          {
            label: 'office',
            value: 'office',
            children: [
              {
                label: '武汉办公区',
                value: 'cnwuh01',
              },
              {
                label: '武汉科技园',
                value: 'wh',
              },
            ],
          },
        ],
      },
      {
        label: '中国-南京',
        value: 'chn-nanjing',
        children: [
          {
            label: 'office',
            value: 'office',
            children: [
              {
                label: '南京新城机房',
                value: 'cnnkg01',
              },
              {
                label: '南京新城科技园',
                value: 'nkg01',
              },
            ],
          },
        ],
      },
      {
        label: '中国-成都',
        value: 'chn-chengdu',
        children: [
          {
            label: 'office',
            value: 'office',
            children: [
              {
                label: '成都平安金融中心',
                value: 'ctu01',
              },
              {
                label: '成都迈普大厦',
                value: 'ctu03',
              },
            ],
          },
        ],
      },
      {
        label: '中国-河源',
        value: 'chn-heyuan',
      },
      {
        label: '中国-呼和浩特',
        value: 'chn-huhehaote',
        children: [
          {
            label: 'office',
            value: 'office',
            children: [
              {
                label: '呼和浩特蓝海大厦',
                value: 'het01',
              },
            ],
          },
        ],
      },
      {
        label: '中国-沈阳',
        value: 'chn-shenyang',
        children: [
          {
            label: 'office',
            value: 'office',
            children: [
              {
                label: '沈阳兴华北街49号',
                value: 'she01',
              },
            ],
          },
        ],
      },
      {
        label: '中国-南昌',
        value: 'chn-nanchang',
        children: [
          {
            label: 'office',
            value: 'office',
            children: [
              {
                label: '南昌联合办公',
                value: 'khn01',
              },
            ],
          },
        ],
      },
      {
        label: '中国-济南',
        value: 'chn-jinan',
        children: [
          {
            label: 'office',
            value: 'office',
            children: [
              {
                label: '济南办公区',
                value: 'tna01',
              },
            ],
          },
        ],
      },
      {
        label: '中国-郑州',
        value: 'chn-zhengzhou',
        children: [
          {
            label: 'office',
            value: 'office',
            children: [
              {
                label: '郑州万达中心',
                value: 'cgo01',
              },
            ],
          },
        ],
      },
      {
        label: '中国-南宁',
        value: 'chn-nanning',
        children: [
          {
            label: 'office',
            value: 'office',
            children: [
              {
                label: '南宁三祺广场',
                value: 'nng01',
              },
            ],
          },
        ],
      },
      {
        label: '中国-哈尔滨',
        value: 'chn-haerbin',
        children: [
          {
            label: 'office',
            value: 'office',
            children: [
              {
                label: '哈尔滨哈西万达广场',
                value: 'hrb01',
              },
            ],
          },
        ],
      },
      {
        label: '中国-石家庄',
        value: 'chn-shijiazhuang',
        children: [
          {
            label: 'office',
            value: 'office',
            children: [
              {
                label: '石家庄开元金融中心',
                value: 'sjw01',
              },
            ],
          },
        ],
      },
      {
        label: '中国-西安',
        value: 'chn-xian',
        children: [
          {
            label: 'office',
            value: 'office',
            children: [
              {
                label: '西安长安国际A座',
                value: 'xiy01',
              },
              {
                label: '西安高新绿地中心B座',
                value: 'xiy03',
              },
              {
                label: '西安',
                value: 'xian',
              },
            ],
          },
        ],
      },
      {
        label: '中国-昆明',
        value: 'chn-kunming',
        children: [
          {
            label: 'office',
            value: 'office',
            children: [
              {
                label: '云南东方柏丰首座商务中心',
                value: 'kmg01',
              },
            ],
          },
        ],
      },
      {
        label: '中国-保定',
        value: 'chn-baoding',
        children: [
          {
            label: 'office',
            value: 'office',
            children: [
              {
                label: '保定联合办公客服职场',
                value: 'bdv01',
              },
              {
                label: '保定水晶国际',
                value: 'bdv03',
              },
            ],
          },
        ],
      },
      {
        label: '中国-长沙',
        value: 'chn-changsha',
        children: [
          {
            label: 'office',
            value: 'office',
            children: [
              {
                label: '长沙芙蓉办公区',
                value: 'csx01',
              },
              {
                label: '中国区长沙职场',
                value: 'csw01',
              },
            ],
          },
        ],
      },
      {
        label: '中国-贵阳',
        value: 'chn-guiyang',
        children: [
          {
            label: 'office',
            value: 'office',
            children: [
              {
                label: '贵阳和丰大厦',
                value: 'kwe01',
              },
            ],
          },
        ],
      },
      {
        label: '中国-太原',
        value: 'chn-taiyuan',
        children: [
          {
            label: 'office',
            value: 'office',
            children: [
              {
                label: '太原国贸大厦',
                value: 'tyn01',
              },
            ],
          },
        ],
      },
      {
        label: '中国-福州',
        value: 'chn-fuzhou',
        children: [
          {
            label: 'office',
            value: 'office',
            children: [
              {
                label: '福州融侨中心1901',
                value: 'foc01',
              },
            ],
          },
        ],
      },
      {
        label: '中国-合肥',
        value: 'chn-hefei',
        children: [
          {
            label: 'office',
            value: 'office',
            children: [
              {
                label: '合肥华润五彩国际908-910',
                value: 'hfe01',
              },
            ],
          },
        ],
      },
      {
        label: '中国-乌鲁木齐',
        value: 'chn-wulumuqi',
        children: [
          {
            label: 'office',
            value: 'office',
            children: [
              {
                label: '乌鲁木齐办公区',
                value: 'urc01',
              },
            ],
          },
        ],
      },
      {
        label: '中国-兰州',
        value: 'chn-lanzhou',
        children: [
          {
            label: 'office',
            value: 'office',
            children: [
              {
                label: '兰州办公职场',
                value: 'lhw01',
              },
            ],
          },
        ],
      },
      {
        label: '中国-长春',
        value: 'chn-changchun',
        children: [
          {
            label: 'office',
            value: 'office',
            children: [
              {
                label: '中国区长春职场',
                value: 'cgq01',
              },
            ],
          },
          {
            label: 'rent',
            value: 'rent',
            children: [
              {
                label: '测试机房001',
                value: 'site_test1',
              },
              {
                label: '测试机房12345',
                value: 'site_test12345',
              },
            ],
          },
        ],
      },
      {
        label: '中国-佛山',
        value: 'chn-foshan',
      },
      {
        label: '中国-南充',
        value: 'chn-nanchong',
      },
      {
        label: '中国-南基',
        value: 'chn-nanji',
      },
      {
        label: '中国-苏州',
        value: 'chn-suzhou',
      },
      {
        label: '中国-内江',
        value: 'chn-neijiang',
      },
      {
        label: '中国-金华',
        value: 'chn-jinhua',
      },
      {
        label: '中国-常州',
        value: 'chn-changzhou',
      },
      {
        label: '中国-珠海',
        value: 'chn-zhuhai',
        children: [
          {
            label: 'office',
            value: 'office',
            children: [
              {
                label: '珠海公共事务职场',
                value: 'zuh01',
              },
            ],
          },
        ],
      },
      {
        label: '中国-惠州',
        value: 'chn-huizhou',
      },
      {
        label: '中国-中国澳门',
        value: 'chn-macao',
      },
      {
        label: '中国-中国台湾',
        value: 'chn-taiwan',
      },
      {
        label: '中国-中国香港',
        value: 'chn-hongkong',
        children: [
          {
            label: 'rent',
            value: 'rent',
            children: [
              {
                label: '香港机房-HGC',
                value: 'hk.hgc.01',
              },
              {
                label: '香港机房-PCCW',
                value: 'hk.pccw.01',
              },
            ],
          },
        ],
      },
      {
        label: '中国-天津',
        value: 'chn-tianjin',
        children: [
          {
            label: 'rent',
            value: 'rent',
            children: [
              {
                label: '天津阿尔法担保机房',
                value: 'tjyxy01',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    label: '海外',
    value: 'abd-abd',
    children: [
      {
        label: '爱尔兰-都柏林',
        value: 'irl-dublin',
      },
      {
        label: '英国-伦敦',
        value: 'gbr-london',
      },
      {
        label: '印尼-雅加达',
        value: 'idn-jakarta',
        children: [
          {
            label: 'cloud',
            value: 'cloud',
            children: [
              {
                label: '阿里云印尼雅加达',
                value: 'jktali',
              },
            ],
          },
        ],
      },
      {
        label: '澳大利亚-悉尼',
        value: 'aus-sydney',
      },
      {
        label: '澳大利亚-新南威尔士州',
        value: 'aus-newsouthwales',
      },
      {
        label: '马来西亚-吉隆坡',
        value: 'mys-kualalumpur',
      },
      {
        label: '泰国-曼谷',
        value: 'tha-bangkok',
      },
      {
        label: '德国-法兰克福',
        value: 'deu-frankfurt',
        children: [
          {
            label: 'cloud',
            value: 'cloud',
            children: [
              {
                label: '法兰克福OCI',
                value: 'froci',
              },
              {
                label: '法兰克福AWS',
                value: 'fraws',
              },
              {
                label: '阿里云法兰克福机房',
                value: 'alifr',
              },
            ],
          },
          {
            label: 'rent',
            value: 'rent',
            children: [
              {
                label: '法兰克福POP点机房1',
                value: 'fra1',
              },
            ],
          },
        ],
      },
      {
        label: '美国-加利福尼亚州',
        value: 'usa-california',
      },
      {
        label: '美国-俄勒冈州',
        value: 'usa-oregon',
      },
      {
        label: '美国-俄亥俄州',
        value: 'usa-ohio',
      },
      {
        label: '美国-硅谷',
        value: 'usa-siliconvalley',
      },
      {
        label: '美国-弗吉尼亚州',
        value: 'usa-virginia',
      },
      {
        label: '美国-爱荷华州',
        value: 'usa-iowa',
      },
      {
        label: '美国-得克萨斯州',
        value: 'usa-texas',
      },
      {
        label: '美国-华盛顿州',
        value: 'usa-washington',
      },
      {
        label: '美国-洛杉矶',
        value: 'usa-losangeles',
      },
      {
        label: '阿联酋-迪拜',
        value: 'are-dubai',
      },
      {
        label: '巴林-巴林',
        value: 'bhr-bahrain',
      },
      {
        label: '荷兰-阿姆斯特丹',
        value: 'nld-amsterdam',
        children: [
          {
            label: 'cloud',
            value: 'cloud',
            children: [
              {
                label: '微软云荷兰阿姆斯特丹机房',
                value: 'azams',
              },
            ],
          },
          {
            label: 'rent',
            value: 'rent',
            children: [
              {
                label: '阿姆斯特丹POP点机房1',
                value: 'ams1',
              },
            ],
          },
        ],
      },
      {
        label: '法国-巴黎',
        value: 'fra-paris',
      },
      {
        label: '瑞士-斯德哥尔摩',
        value: 'che-stockholm',
      },
      {
        label: '加拿大-温哥华',
        value: 'can-vancouver',
      },
      {
        label: '巴西-里约热内卢',
        value: 'bra-riodejaneiro',
      },
      {
        label: '巴西-圣保罗',
        value: 'bra-saopaulo',
      },
      {
        label: '新加坡-新加坡',
        value: 'sgp-singapore',
        children: [
          {
            label: 'cloud',
            value: 'cloud',
            children: [
              {
                label: '金山云新加坡',
                value: 'ksysgp',
              },
              {
                label: '新加坡AWS',
                value: 'sgpaws',
              },
              {
                label: '阿里云新加坡机房',
                value: 'alisgp',
              },
            ],
          },
        ],
      },
      {
        label: '印度-孟买',
        value: 'ind-mumbai',
      },
      {
        label: '印度-普纳',
        value: 'ind-pune',
      },
      {
        label: '韩国-首尔',
        value: 'kor-seoul',
      },
      {
        label: '菲律宾-马尼拉',
        value: 'phl-manila',
      },
      {
        label: '俄罗斯-莫斯科',
        value: 'rus-moscow',
        children: [
          {
            label: 'rent',
            value: 'rent',
            children: [
              {
                label: '测试机房1',
                value: 'site1',
              },
              {
                label: '俄罗斯5',
                value: 'mos5',
              },
              {
                label: '莫斯科POP节点机房1',
                value: 'rus1',
              },
              {
                label: '莫斯科POP节点机房2',
                value: 'rus2',
              },
            ],
          },
          {
            label: 'cloud',
            value: 'cloud',
            children: [
              {
                label: '金山云俄罗斯机房EPC',
                value: 'ksmos-epc',
              },
              {
                label: '莫斯科腾讯云',
                value: 'tcmos',
              },
            ],
          },
        ],
      },
      {
        label: '意大利-米兰',
        value: 'ita-milan',
      },
      {
        label: '日本-东京',
        value: 'jpn-tokyo',
      },
      {
        label: '日本-大阪',
        value: 'jpn-osaka',
      },
      {
        label: '南非-开普敦',
        value: 'zaf-capetown',
      },
      {
        label: '测试地域1',
        value: 'test-regiona',
      },
    ],
  },
]

const RegionCascaderDemo: React.FC = () => {
  const [cascaderValue, setCascaderValue] = useState<string[]>([])
  const [level3Value, setLevel3Value] = useState<string | undefined>(undefined)
  const [level4Value, setLevel4Value] = useState<string | undefined>(undefined)

  // Level 1 & 2 Options for Cascader
  const cascaderOptions = useMemo(() => {
    return REGION_DATA.map((level1) => ({
      ...level1,
      children: level1.children?.map((level2) => ({
        ...level2,
        children: undefined, // Strip level 3 children
      })),
    }))
  }, [])

  // Level 3 Options
  const level3Options = useMemo(() => {
    if (!cascaderValue || cascaderValue.length < 2) return []

    const [l1Value, l2Value] = cascaderValue
    const l1Node = REGION_DATA.find((n) => n.value === l1Value)
    const l2Node = l1Node?.children?.find((n) => n.value === l2Value)

    return l2Node?.children || []
  }, [cascaderValue])

  // Level 4 Options
  const level4Options = useMemo(() => {
    if (!level3Value) return []

    const l3Node = level3Options.find((n) => n.value === level3Value)
    return l3Node?.children || []
  }, [level3Value, level3Options])

  const handleCascaderChange = (value: any) => {
    setCascaderValue(value as string[])
    setLevel3Value(undefined)
    setLevel4Value(undefined)
  }

  const handleLevel3Change = (value: string) => {
    setLevel3Value(value)
    setLevel4Value(undefined)
  }

  const handleLevel4Change = (value: string) => {
    setLevel4Value(value)
  }

  return (
    <Card title='Region Cascader Demo'>
      <Space direction='vertical' style={{ width: '100%' }}>
        <Space wrap>
          <Cascader
            options={cascaderOptions}
            value={cascaderValue}
            onChange={handleCascaderChange}
            placeholder='Select Region (Level 1 & 2)'
            style={{ width: 300 }}
            changeOnSelect={false} // Force selecting leaf (Level 2)
          />

          <Select
            value={level3Value}
            onChange={handleLevel3Change}
            options={level3Options}
            placeholder='Select Type (Level 3)'
            style={{ width: 200 }}
            disabled={level3Options.length === 0}
            fieldNames={{ label: 'label', value: 'value' }}
          />

          <Select
            value={level4Value}
            onChange={handleLevel4Change}
            options={level4Options}
            placeholder='Select Detail (Level 4)'
            style={{ width: 200 }}
            disabled={level4Options.length === 0}
            fieldNames={{ label: 'label', value: 'value' }}
          />
        </Space>

        <div>
          <Title level={5}>Selection Debug:</Title>
          <pre>
            {JSON.stringify(
              {
                cascader: cascaderValue,
                level3: level3Value,
                level4: level4Value,
              },
              null,
              2
            )}
          </pre>
        </div>
      </Space>
    </Card>
  )
}

export default RegionCascaderDemo
