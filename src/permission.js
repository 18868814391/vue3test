import router from '@/router'

router.beforeEach(async (to, from, next) => {
  console.log(to.path)
  next()
})

router.afterEach(() => {})
