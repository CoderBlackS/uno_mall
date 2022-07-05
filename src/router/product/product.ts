const product = () => import('@/views/product/product.vue')
export default {
  path: '/product',
  name: 'product',
  component: product,
  children: []
}
