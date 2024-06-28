<template>
	<div class="bg-white p-3 grid grid-cols-2">
		<div>
			<div>
				<img :src="product?.image" alt="" />
			</div>
		</div>
		<div class="p-2">
			<div>
				<span class="font-bold">{{ product?.name }}</span>
			</div>
			<div>
				<span>Rp.{{ ((product?.wood_price * product?.wood_count) * product?.production_price) * (quantity < 1 ? 1 : quantity) }}</span>
			</div>
			<div>
				<div class="quantity flex items-center space-x-2">
					<label class="sr-only" for="quantity_667d7c0adf1ba"
						>Bangku Taman Balau Kayu Jati Minimalis quantity</label
					>
					<label class="label" for="quantity_667d7c0adf1ba"
						>Quantity:</label
					>
					<div class="qty-box flex items-center space-x-1">
						<button
                            @click="quantity--"
                            :disabled="quantity <= 1"
							class="decrease icon_minus-06 px-2 py-1 bg-gray-200 rounded">
							-
						</button>
						<input
							type="number"
							id="quantity_667d7c0adf1ba"
							class="input-text qty text w-16 text-center border border-gray-300 rounded"
							name="quantity"
							:value="quantity"
							title="Qty"
							min="1"
							max=""
							step="1"
							placeholder=""
							inputmode="numeric"
							autocomplete="off" />
						<button
                            @click="quantity++"
							class="increase icon_plus px-2 py-1 bg-gray-200 rounded">
							+
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import productJson from '@/constant/products.json';

const product = ref(null);
const route = useRoute();

const quantity = ref(1);

const setProducts = () => {
    const products = JSON.parse(localStorage.getItem('products')) || productJson;
	if (!products && products?.length < 0) {
        localStorage.setItem('products', JSON.stringify(productJson));
	}

    product.value = products?.find(curr => curr?.name?.replace(' ', '-').toLowerCase() === route?.params?.slug)
};


onMounted(() => {
    setProducts()
});
</script>
