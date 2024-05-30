<template>
	<div>
		<div id="modifiers">
			<div @click="clickDiv">
				DIV 영역
				<p @click.self="clickP">
					p 영역
					<span @click.stop="clickSpan">
						span 영역
					</span>
				</p>
			</div>
		</div>
		<button @click.once="clickDiv">once</button>
		<a href="https://naver.com" @click.prevent="clickA">a 영역</a>
	</div>
</template>

<script>
export default {
	setup () {
		const clickDiv = () => {
			console.log('clickDiv');
			// location.href = 'https://naver.com'
		}

		const clickP = () => {
			console.log('clickP');
		}

		const clickSpan = (e) => {
			console.log('clickSpan');
			alert('good');
		}

		const clickA = (e) => {
			console.log('clickA');
			alert('a tag');
		}

		return {
			clickDiv,
			clickP,
			clickSpan,
			clickA
		}
	}
}
</script>

<style scoped>
#modifiers div,
#modifiers p,
#modifiers span {
	padding: 40px;
}

#modifiers div {
	background-color: #ccc;
}

#modifiers p {
	background-color: #999;
}

#modifiers span {
	background-color: #666;
	display: block;
}


</style>