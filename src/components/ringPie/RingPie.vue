<template>
    <div class="wrap-container">
       <div class="charsdom" id="chart_rp"></div>   
    </div>
</template>

<script>
export default {
    name: "ringPie",
    data() {
        return {
           // option: null
        }
    },
    mounted() {
        this.getEchart();
    },
    methods: {
        getEchart() {
            let myChart = echarts.init(document.getElementById('chart_rp'));
            this.option = {
                series: [{
                    name: '环型饼图',
                    type: 'pie',
                    radius: ['68%', '80%'],
                    label: {
                        show: true,
                        position: 'outside',
                    },
                    data: [{
                        value: 6,
                        name: '软件工程',
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0,0,0,1, [{
                                    offset: 0,
                                    color: '#6984fe'
                                },{
                                    offset: 1,
                                    color: '#24d1fd'
                                }])
                            }
                        }
                    },{
                        value: 10,
                        name: '大数据',
                    }]
                }]
            }
            myChart.setOption(this.option);
            // window.addEventListener('resize', () => {
            //     myChart.resize();
            // })
        }
    }
}
</script>

<style lang="scss" scoped>
.wrap-container{
    left: 100px;
    top: 70px;
    width: 602px;
    height: 400px;
    .charsdom {
    width: 100%;
    height: 100%;
    }
}

</style>