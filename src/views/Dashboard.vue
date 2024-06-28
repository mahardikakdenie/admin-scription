<template>
	<div>
		<div class="flex gap-2 mb-4">
			<div 
				v-for="(type, i) in ['Mahoni', 'Jati', 'Akasia']" 
				:key="i" 
				class="hover:text-primary-400 cursor-pointer" 
				:class="[{'text-primary-400': type === category}]"
				@click="category = type"
			>
				<span>
					{{ type }}
				</span>
			</div>
		</div>
		<div class="grid grid-cols-4 gap-2">
			<div
				v-for="(product, index) in products"
				:key="index"
				class="border bg-white flex flex-col">
				<img
					:src="product?.image ?? 'https://dascode.mahardikakdenie.my.id/assets/post-1-4647ba55.png'"
					alt=""
					height="20"
					class="w-full" 
				/>

				<div class="p-3 flex-grow">
					<div>
						<span class="font-bold">{{ product.name }}</span>
					</div>
					<div>
						<span>{{ product?.description }}</span>
					</div>
					<div>
						<span>Stock : {{ product?.stock }}</span>
					</div>
				</div>

				<div class="mt-2 flex justify-center p-2">
					<router-link
						class="btn border w-full bg-primary-400 text-white text-center"
						:to="`/admin/product/${product?.name?.replace(' ', '-').toLocaleLowerCase()}`">
						Lihat Detail
					</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue';
import productJson from '@/constant/products.json';

const products = ref([]);
const category = ref('Mahoni');


const setProducts = () => {
	products.value = JSON.parse(localStorage.getItem('products')) || productJson;
	if (!products.value && products?.value?.length < 0) {
		localStorage.setItem('products', JSON.stringify(productJson));
	}
	products.value = products?.value?.filter(curr => curr?.category === category?.value);
};

onMounted(() => {
    setProducts();
});

watch(() => category?.value, () => {
	setProducts();
});
</script>
