<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
	this.$socketObj._initWebSocket()
			   this.$http.POST({
					 url:'banner/ad/adClassify',
					 data:{
						 a:'1'
					 }
				 })

				 		this.$socketObj.close()
		},


		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	page{
		font-size: 28upx;
		background: #F5F5F5;
		box-sizing: border-box;
	}
</style>
