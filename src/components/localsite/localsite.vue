<template>
  <div>
    <div class="amap-page-container">
      <el-amap vid="amapDemo" :zoom="zoom" :center="center" class="amap-demo" :plugin="plugin">
        <el-amap-info-window  :position="mywindow.position" :content="mywindow.content" :visible="mywindow.visible" :events="mywindow.events"></el-amap-info-window>
        <el-amap-marker :position="marker.position" :events="marker.events" :visible="marker.visible" :draggable="marker.draggable"></el-amap-marker>
        <el-amap-circle :center="circle.center" :radius="circle.radius" :fillOpacity="circle.fillOpacity" :events="circle.events" :strokeColor="circle.strokeColor" :strokeStyle="circle.strokeStyle" :fillColor="circle.fillColor"></el-amap-circle>

      </el-amap>
    </div>
  </div>
</template>


<script>
export default {
  data () {
    return {
      zoom: 15,
      center: [104.071295, 30.630500000000005],
      circle: {
        clickable: true,
        center: [104.071295, 30.630500000000005],
        radius: 200,
        fillOpacity: 0.3,
        strokeStyle: 'dashed',
        fillColor: '#FFFF00',
        strokeColor: '#00BFFF'
      },
      marker: {
        position: [104.071295, 30.630500000000005],
        events: {
          click: () => {
            if (this.mywindow.visible === true) {
              this.mywindow.visible = false
            } else {
              this.mywindow.visible = true
            }
          },
          dragend: (e) => {
            this.markers[0].position = [e.lnglat.lng, e.lnglat.lat]
          }
        },
        visible: true,
        draggable: false
      },
      mywindow: {
        position: [104.071295, 30.630500000000005],
        content: '<h4>该点数据信息</h4><div class="text item">Information A: ...</div><div class="text item">Information B: ...</div>',
        visible: true,
        events: {
          close () {
            this.mywindow.visible = false
          }
        }
      },
      plugin: {
        pName: 'Scale',
        events: {
          init (instance) {
            console.log(instance)
          }
        }
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.showPosition, this.showError)
      } else {
        alert('浏览器不支持地理定位。')
      }
    })
  },
  methods: {
    showError (error) {
      switch (error.code) {
        case error.PERMISSION_DENIED:
          alert('定位失败,用户拒绝请求地理定位')
          break
        case error.POSITION_UNAVAILABLE:
          alert('定位失败,位置信息是不可用')
          break
        case error.TIMEOUT:
          alert('定位失败,请求获取用户位置超时')
          break
        case error.UNKNOWN_ERROR:
          alert('定位失败,定位系统失效')
          break
      }
    },
    showPosition (position) {
      let lat = position.coords.latitude // 纬度
      let lag = position.coords.longitude // 经度
      alert('纬度:' + lat + ',经度:' + lag)
    }
  }
}
</script>

<style>
  .amap-page-container {
    height: 500px;
  }
</style>