import { registerRoutes } from '~/app'
import configureOpenAPI from '~/lib/configure-open-api'
import createApp from '~/lib/create-app'

// parseENV()
const app = createApp()
registerRoutes(app)
configureOpenAPI(app)

export default {
  fetch: app.fetch,
  port: Bun.env.PORT_NO,
}
