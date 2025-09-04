import router from '~/routes/test'
import type { AppOpenAPI } from '~/types'

export function registerRoutes(app: AppOpenAPI) {
  return app.route('/test', router) // chained router.
}
